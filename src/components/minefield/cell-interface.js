/* eslint linebreak-style: ["error", "windows"] */

export default class Cell {
  constructor(cellNode) {
    this.node = cellNode;
    this.isClosed = true;
    this.isBomb = false;
    this.isFlag = false;
    this.bombsAround = 0;
  }

  plantBomb() {
    this.isBomb = true;
  }
}
