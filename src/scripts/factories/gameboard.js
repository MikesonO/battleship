export class Gameboard {
  constructor() {
    this.grid = this.createGrid();
  }

  // Creates a 10 x 10 grid with null values
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

  placeShip(ship, x, y, isVertical) {
    const shipLength = ship.length;
    const shipSections = [];

    // Check if the ship can be placed within the boundaries of the grid
    if (isVertical) {
      if (y + shipLength > 10) {
        console.log('Ship placement out of bounds');
      }

      // Check if there are any obstructions at the specified coordinates
      for (let i = y; i < y + shipLength; i++) {
        if (this.grid[i][x]) {
          console.log('Ship placement obstructed');
        }
        shipSections.push({x, y: i});
      }
    } else {
      if (x + shipLength > 10) {
        console.log('Ship placement out of bounds');
      }

      // Check if there are any obstructions at the specified coordinates
      for (let i = x; i < x + shipLength; i++) {
        if (this.grid[y][i]) {
          console.log('Ship placement obstructed');
        }
        shipSections.push({x: i, y});
      }
    }

    // Place the ship sections on the grid
    shipSections.forEach(({x, y}) => {
      this.grid[y][x] = ship;
    });
  }


};