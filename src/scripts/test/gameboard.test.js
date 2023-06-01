import { Gameboard } from "../factories/gameboard";
import { Ship } from '../factories/ship';

describe('Gameboard', () => {

  let gameboard;
  let ship;

  beforeEach(() => {
    gameboard = new Gameboard();
    ship = new Ship(4);
  });

  test('Gameboard consruction', () => {
    // Verify that the Gameboard grid has 10 rows
    expect(gameboard.grid.length).toBe(10);
    
    // Verify that the Gameboard grid has 10 columns
    expect(gameboard.grid[0].length).toBe(10);
  });

});