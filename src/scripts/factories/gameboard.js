export class Gameboard {
  constructor() {
    this.grid = this.createGrid();
    this.missedAttacks = [];
  }

  // Creates a 10 row 10 grid with null values
  createGrid() {
    const grid = [];
    for (let row = 0; row < 10; row++) {
      const gridArray = [];
      for (let col = 0; col < 10; col++) {
        gridArray.push(null);
      }
      grid.push(gridArray);
    }
    return grid;
  }

  placeShip(ship, row, col, isVertical) {
    const shipLength = ship.length;
    const shipSections = [];

    // Check if the ship can be placed within the boundaries of the grid
    if (isVertical) {
      if (col + shipLength > 10) {
        throw new Error('Ship placement out of bounds');
      }

      // Check if there are any obstructions at the specified coordinates
      for (let i = col; i < col + shipLength; i++) {
        if (this.grid[i][row]) {
          throw new Error('Ship placement obstructed');
        }
        shipSections.push({row, col: i});
      }
    } else {
      if (row + shipLength > 10) {
        throw new Error('Ship placement out of bounds');
      }

      // Check if there are any obstructions at the specified coordinates
      for (let i = row; i < row + shipLength; i++) {
        if (this.grid[col][i]) {
          throw new Error('Ship placement obstructed');
        }
        shipSections.push({row: i, col});
      }
    }

    // Place the ship sections on the grid
    shipSections.forEach(({row, col}) => {
      this.grid[col][row] = ship;
    });
  }


  receiveAttack(row, col) {
    const target = this.grid[row][col];
    if (target === null){
      // Record the coordinates of the missed shot
      this.missedAttacks.push({ row, col });
    } else if (target instanceof Ship) {
      // Call the 'hit' function on the ship
      target.hit(row, col);
    }
  }


};