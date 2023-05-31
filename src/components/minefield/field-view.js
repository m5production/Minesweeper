/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint linebreak-style: ["error", "windows"] */

import makeElementNode, { FigColor } from '../shared';

function addCellNodes(fieldNode, cellRows) {
  cellRows.forEach((row) => {
    row.forEach((cell) => {
      if (cell.isClosed) cell.node.classList.add('closed');
      if (cell.isFlag) cell.node.classList.add('flagged');
      fieldNode.append(cell.node);
    });
  });
}

function setFontSizeDependOnFromCellSize() {
  const cellNodes = document.querySelectorAll('.mines-field__cell');
  const cellSize = cellNodes[0].clientWidth;
  cellNodes.forEach((cellNode) => {
    cellNode.style.fontSize = `${(cellSize / 3) * 2.3}px`;
  });
}

export default class FieldView {
  constructor() {
    this.fieldNode = makeElementNode('div', 'mines-field');
  }

  removeField() {
    this.fieldNode.remove();
  }

  renderOpen(cellNode) {
    cellNode.classList.remove('closed');
  }

  renderNumberOfNearBombs(cellNode, num) {
    const cellInscription = num === 0 ? '' : num;
    cellNode.style.color = num !== 0 ? FigColor[num - 1] : '';
    cellNode.textContent = cellInscription;
  }

  toggleRenderFlag(cellNode) {
    cellNode.classList.toggle('flagged');
  }

  renderBomb(cell) {
    cell.node.classList.add('bomb');
  }

  renderField(cellRows) {
    this.fieldNode.style.gridTemplateRows = `repeat(${cellRows.length}, 1fr)`;
    this.fieldNode.style.gridTemplateColumns = `repeat(${cellRows[0].length}, 1fr)`;
    document.body.append(this.fieldNode);
    addCellNodes(this.fieldNode, cellRows);
    setFontSizeDependOnFromCellSize();
  }
}
