/* eslint linebreak-style: ["error", "windows"] */

import makeElementNode from '../shared';

function makeScoreTable() {
  const node = makeElementNode('table', ['score-table']);
  const template = `
  <thead>
    <tr>
      <th>Name</th>
      <th>Moves</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody id="score-table-body">
  </tbody>
  `;
  node.insertAdjacentHTML('afterbegin', template);
  return node;
}

function insertResultsInTable(tableNode, results) {
  results.forEach(({ playerName, moves, time }) => {
    const trNode = makeElementNode('tr', ['score-table__tr']);
    const tdName = makeElementNode('td', ['player-name']);
    tdName.textContent = playerName;
    const tdMoves = makeElementNode('td', ['player-moves']);
    tdMoves.textContent = moves;
    const tdTime = makeElementNode('td', ['player-time']);
    tdTime.textContent = time;
    trNode.append(tdName, tdMoves, tdTime);
    tableNode.append(trNode);
  });
}

export default class ScoreTableView {
  constructor() {
    this.tableNode = null;
  }

  render(results) {
    this.tableNode = makeScoreTable();
    insertResultsInTable(this.tableNode, results);
    document.body.append(this.tableNode);
  }

  remove() {
    this.tableNode.remove();
  }
}
