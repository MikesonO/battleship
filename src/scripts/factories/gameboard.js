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


};