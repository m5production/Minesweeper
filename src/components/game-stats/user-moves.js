/* eslint linebreak-style: ["error", "windows"] */

export default class MovesController {
  constructor() {
    this.movesCtrNode = document.getElementById('moves-counter-node');
    this.internalMovesCtr = 0;
  }

  get moves() {
    return this.internalMovesCtr.toString().padStart(3, 0);
  }

  setToDefault() {
    this.internalMovesCtr = 0;
    this.render();
  }

  addOneMove() {
    this.internalMovesCtr += 1;
  }

  render() {
    this.movesCtrNode.textContent = this.moves;
  }
}
