/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint linebreak-style: ["error", "windows"] */

import makeElementNode from '../shared';
import Cell from './cell-interface';

function generateCells(cellRows, width, height) {
  for (let rowIdx = 0; rowIdx < height; rowIdx += 1) {
    const row = [];
    for (let cellIdx = 0; cellIdx < width; cellIdx += 1) {
      const cellNode = makeElementNode('div', 'mines-field__cell');
      const cell = new Cell(cellNode);
      row.push(cell);
    }
    cellRows.push(row);
  }
}

function getRandomCell(cellRows) {
  const rowCtr = cellRows.length;
  const currentRowIdx = Math.floor(Math.random() * rowCtr);
  const currentCellIdx = Math.floor(Math.random() * cellRows[currentRowIdx].length);
  const cell = cellRows[currentRowIdx][currentCellIdx];
  return cell;
}

function getRandomEmptyCell(cellRows, excluded) {
  const rowsWithPlantableCells = cellRows
    .map((row, rowIdx) => row
      .filter((cell, cellIdx) => !(cell.isBomb
        || (cellIdx === excluded.x && rowIdx === excluded.y))))
    .filter((row) => row.length !== 0);
  const cell = getRandomCell(rowsWithPlantableCells);
  return cell;
}

export default class FieldModel {
  constructor() {
    this.cellRows = [];
    this.bombsCtr = null;
    this.flagsCtr = 0;
  }

  get closedEmptyCells() {
    const res = this.cellRows.reduce((acc, row) => acc + row.reduce((cellAcc, cell) => {
      const isCellEmptyAndClosed = cell.isClosed && !cell.isBomb;
      return isCellEmptyAndClosed ? cellAcc + 1 : cellAcc;
    }, 0), 0);
    return res;
  }

  openNearCells(coords) {
    for (let y = coords.y - 1; y <= coords.y + 1; y += 1) {
      // eslint-disable-next-line no-continue
      if (y < 0 || y >= this.cellRows.length) continue;
      for (let x = coords.x - 1; x <= coords.x + 1; x += 1) {
        // eslint-disable-next-line no-continue
        if (x < 0 || x >= this.cellRows[0].length) continue;
        this.markOpenBomblessCell({ y, x });
      }
    }
  }

  markOpenBomblessCell(coords) {
    const currentCell = this.cellRows[coords.y][coords.x];
    if (currentCell.isFlag || !currentCell.isClosed) return;
    this.markOpen(currentCell);
    if (currentCell.bombsAround === 0) {
      this.openNearCells(coords);
    }
  }

  eraseCellRows() {
    this.cellRows = null;
  }

  countMinesAround(cellCoords) {
    let minesAround = 0;
    for (let y = cellCoords.y - 1; y <= cellCoords.y + 1; y += 1) {
      // eslint-disable-next-line no-continue
      if (y < 0 || y >= this.cellRows.length) continue;
      for (let x = cellCoords.x - 1; x <= cellCoords.x + 1; x += 1) {
        // eslint-disable-next-line no-continue
        if (x < 0 || x >= this.cellRows[0].length) continue;
        const currentCell = this.cellRows[y][x];
        if (currentCell.isBomb) minesAround += 1;
      }
    }

    return minesAround;
  }

  markOpen(cell) {
    cell.isClosed = false;
  }

  toggleIsFlag(cell) {
    cell.isFlag = !cell.isFlag;
  }

  makeNewFieldData({ width, height, bombsCtr }) {
    this.bombsCtr = bombsCtr;
    generateCells(this.cellRows, width, height);
  }

  scatterBombs(coords) {
    for (let i = 0; i < this.bombsCtr; i += 1) {
      const cell = getRandomEmptyCell(this.cellRows, coords);
      cell.plantBomb();
    }
  }

  calculateMinesAroundEachCell() {
    for (let y = 0; y < this.cellRows.length; y += 1) {
      for (let x = 0; x < this.cellRows[y].length; x += 1) {
        const currentCell = this.cellRows[y][x];
        currentCell.bombsAround = this.countMinesAround({ y, x });
      }
    }
  }

  getCellDataByNode(node) {
    let res = null;
    let isFound = false;
    for (let rowIdx = 0; rowIdx < this.cellRows.length && !isFound; rowIdx += 1) {
      for (let cellIdx = 0; cellIdx < this.cellRows[rowIdx].length && !isFound; cellIdx += 1) {
        const currentCell = this.cellRows[rowIdx][cellIdx];
        if (currentCell.node === node) {
          res = {
            cellData: currentCell,
            coords: {
              x: cellIdx,
              y: rowIdx,
            },
          };
          isFound = true;
        }
      }
    }

    return res;
  }
}
