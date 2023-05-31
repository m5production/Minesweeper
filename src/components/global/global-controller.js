/* eslint linebreak-style: ["error", "windows"] */

import GameParameters from '../interfaces/game-parameters-interface';
import Controls from '../heading/heading-logics';
import FieldController from '../minefield/fieldController';
import Timer from '../game-stats/game-timer';
import MovesController from '../game-stats/user-moves';
import ScoreTable from '../score-table/score-table-controller';
import GameResult from '../interfaces/game-result-interface';

export default class GlobalController {
  constructor() {
    this.scoreTable = null;
    this.timer = null;
    this.movesCtr = null;
    this.gameParams = null;
    this.controls = null;
    this.field = null;

    this.addScoreOnWin = this.addScoreOnWin.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  addScoreOnWin(result) {
    const scoreData = new GameResult(result);
    this.scoreTable.addScore(scoreData);
  }

  start() {
    this.scoreTable = new ScoreTable();
    this.timer = new Timer();
    this.movesCtr = new MovesController();
    this.gameParams = new GameParameters();
    this.controls = new Controls(this.gameParams);
    this.field = new FieldController({
      params: this.gameParams,
      timer: this.timer,
      movesCtr: this.movesCtr,
      addScoreOnWin: this.addScoreOnWin,
    });

    this.controls.fieldSize.addEventListener('input', this.restartGame);
    this.controls.numberOfMines.addEventListener('change', this.restartGame);
    this.controls.restart.addEventListener('click', this.restartGame);
  }

  restartGame() {
    this.field.removeFieldView();
    this.timer.setToDefault();
    this.movesCtr.setToDefault();
    this.field = new FieldController({
      params: this.gameParams,
      timer: this.timer,
      movesCtr: this.movesCtr,
      addScoreOnWin: this.addScoreOnWin,
    });
  }
}
