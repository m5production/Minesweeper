/* eslint linebreak-style: ["error", "windows"] */

import renderEndGameMsg from '../global/global-view';
import FieldModel from './field-model';
import FieldView from './field-view';

// eslint-disable-next-line no-unused-vars
function checkArrElemPropState(rows, prop) {
  return rows.map((row) => row.map((cell) => cell[prop]));
}

export default class FieldController {
  constructor({
    params,
    timer,
    movesCtr,
    addScoreOnWin,
  }) {
    this.model = new FieldModel();
    this.view = new FieldView();
    this.timer = timer;
    this.movesCtr = movesCtr;
    this.onWinCallback = addScoreOnWin;

    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleRightMouseBtnClick = this.handleRightMouseBtnClick.bind(this);

    this.model.makeNewFieldData(params);
    this.view.renderField(this.model.cellRows);
    this.view.fieldNode.addEventListener('click', this.handleCellClick);
    this.view.fieldNode.addEventListener('contextmenu', this.handleCellClick);
  }

  handleRightMouseBtnClick(cellData, cellNode) {
    this.model.toggleIsFlag(cellData);
    this.view.toggleRenderFlag(cellNode);
  }

  handleLeftMouseBtnClick(cellData, coords) {
    if (cellData.isFlag) return;

    // console.log(checkArrElemPropState(this.model.cellRows, 'isClosed'));

    if (cellData.isBomb) {
      const cellNode = cellData.node;
      this.model.markOpen(cellData);
      this.view.renderOpen(cellNode);
      cellNode.style.backgroundColor = 'red';
      this.view.renderBomb(cellData);
      this.handleLoose();
    } else {
      this.model.markOpenBomblessCell(coords);
      this.updateField();
    }

    if (this.model.closedEmptyCells === 0) this.handleWin();
  }

  handleCellClick(e) {
    e.preventDefault();
    const cellNode = e.target.closest('.mines-field__cell');
    if (!cellNode) return;
    const { cellData, coords } = this.model.getCellDataByNode(cellNode);
    if (this.movesCtr.moves === '000') {
      this.model.scatterBombs(coords);
      this.model.calculateMinesAroundEachCell();
    }
    if (!cellData.isClosed) return;
    if (this.timer.timerId === null) this.timer.start();
    if (e.isTrusted) {
      this.movesCtr.addOneMove();
      this.movesCtr.render();
    }

    if (e.type === 'click') this.handleLeftMouseBtnClick(cellData, coords);
    else this.handleRightMouseBtnClick(cellData, cellNode);
  }

  updateField() {
    this.model.cellRows.forEach((row) => {
      row.forEach((cell) => {
        if (cell.isClosed) return;
        this.view.renderOpen(cell.node);
        this.view.renderNumberOfNearBombs(cell.node, cell.bombsAround);
      });
    });
  }

  removeClickEventListeners() {
    this.view.fieldNode.removeEventListener('click', this.handleCellClick);
    this.view.fieldNode.removeEventListener('contextmenu', this.handleCellClick);
  }

  handleLoose() {
    this.timer.stop();
    this.removeClickEventListeners();
    renderEndGameMsg();
  }

  handleWin() {
    this.timer.stop();
    this.removeClickEventListeners();
    const { time } = this.timer;
    const { moves } = this.movesCtr;
    renderEndGameMsg({ time, moves });
    this.onWinCallback({ time, moves });
  }

  removeFieldView() {
    this.view.fieldNode.remove();
  }
}
