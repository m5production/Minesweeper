/* eslint linebreak-style: ["error", "windows"] */

const heading = `
<header class="main-header">
<h1>Minesweeper</h1>
<button type="button" id="show-score-btn">Show top ten players</button>
<ul class="options-list">
  <li class="options-list__item">
    <div class="number-of-mines-wrapper">
      <label for="number-of-mines">Number of mines</label>
      <input name="number-of-mines" id="number-of-mines" type="range" value="10" step="1" min="10" max="99">
    </div>
    <div id="display-number-of-mines">10</div>
  </li>
  <li class="options-list__item">
    <select class="field-size-select" name="field-size" id="field-size">
      <option value="10" chosen>Easy</option>
      <option value="15">Medium</option>
      <option value="25">Hard</option>
    </select>
  </li>
</ul>
<button class="reset-btn" type="button" id="game-restart-btn">RESTART</button>

<div class="game-stats">
  <ul class="game-stats__list">
    <li class="game-stats__list__item">
      Time: <span id="timer-node">000</span>
    </li>
    <li class="game-stats__list__item">
      Moves: <span id="moves-counter-node">000</span>
    </li>
  </ul>
</div>
</header>
`;

export default function renderHeading() {
  document.body.insertAdjacentHTML('afterbegin', heading);
}
