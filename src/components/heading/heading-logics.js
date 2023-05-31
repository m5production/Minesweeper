/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */

import handleMinesNumberInput from './mines-number-logic';

export default class Controls {
  constructor(gameParams) {
    this.fieldSize = document.getElementById('field-size');
    this.numberOfMines = document.getElementById('number-of-mines');
    this.restart = document.getElementById('game-restart-btn');

    this.fieldSize.addEventListener('input', () => {
      gameParams.width = this.fieldSize.value;
      gameParams.height = this.fieldSize.value;
    });

    this.numberOfMines.addEventListener('input', () => {
      gameParams.bombsCtr = this.numberOfMines.value;
    });

    handleMinesNumberInput(this.numberOfMines);
  }
}
