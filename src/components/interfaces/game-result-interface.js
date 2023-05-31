/* eslint linebreak-style: ["error", "windows"] */

export default class GameResult {
  constructor({ time, moves }) {
    // eslint-disable-next-line no-alert
    this.playerName = prompt('Please, enter your name', 'Anonimous Player');
    this.time = time;
    this.moves = moves;
  }
}
