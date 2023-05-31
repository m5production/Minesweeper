/* eslint linebreak-style: ["error", "windows"] */

export default class ScoreTableModel {
  constructor() {
    const savedTable = localStorage.getItem('scoreTable');
    this.topTenScores = savedTable ? JSON.parse(savedTable) : [];

    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);

    window.onunload = this.saveToLocalStorage;
  }

  addScore(gameResult) {
    if (this.topTenScores.length >= 10) this.topTenScores.shift();
    this.topTenScores.push(gameResult);
  }

  saveToLocalStorage() {
    localStorage.setItem('scoreTable', JSON.stringify(this.topTenScores));
  }
}
