/* eslint linebreak-style: ["error", "windows"] */

import ScoreTableModel from './score-table-model';
import ScoreTableView from './score-table-view';

export default class ScoreTable {
  constructor() {
    this.tableShowBtn = document.getElementById('show-score-btn');
    this.model = new ScoreTableModel();
    this.view = new ScoreTableView();

    this.showTable = this.showTable.bind(this);
    this.hideTable = this.hideTable.bind(this);

    this.tableShowBtn.addEventListener('click', this.showTable);
  }

  showTable() {
    this.view.render(this.model.topTenScores);
    setTimeout(() => document.addEventListener('click', this.hideTable), 1000);
  }

  hideTable() {
    this.view.remove();
    document.removeEventListener('click', this.hideTable);
  }

  addScore(gameResult) {
    this.model.addScore(gameResult);
  }
}
