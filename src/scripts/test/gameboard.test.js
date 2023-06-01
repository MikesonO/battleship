import {
  Gameboard
} from "../factories/gameboard";
import {
  Ship
} from '../factories/ship';

describe('Gameboard', () => {

  let gameboard;
  let ship;

  beforeEach(() => {
    gameboard = new Gameboard();
    ship = new Ship(4);
  });

  test('gameboard consruction', () => {
    // Verify that the Gameboard grid has 10 rows
    expect(gameboard.grid.length).toBe(10);

    // Verify that the Gameboard grid has 10 columns
    expect(gameboard.grid[0].length).toBe(10);
  });

  test('ship placement', () => {

    gameboard.placeShip(ship, 2, 3, ship.isVerticle);

    // Verify error message when placing ship on top of existing ship
    const anotherShip = new Ship(3);

    let error; // Error message

    try {
      anotherShip.rotate;
      gameboard.placeShip(anotherShip, 3, 3, anotherShip.isVerticle);
    } catch (e) {
      error = e.message;
    }

    
    expect(error).toBe('Ship placement obstructed');

    // Verify that the second ship is not placed on the grid
    expect(gameboard.grid[3][3]).toBe(ship);
    expect(gameboard.grid[3][4]).toBe(ship);
    expect(gameboard.grid[3][5]).toBe(ship);
    expect(gameboard.grid[3][6]).toBe(null);
  });

});