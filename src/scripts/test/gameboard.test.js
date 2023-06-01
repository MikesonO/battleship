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

  
test('receiveAttack recording missed shots', () => {
  gameboard = new Gameboard();

  // Attack at coordinates (3, 4) with no ship
  gameboard.receiveAttack(3, 4);

  // Check if the missed attack is recorded
  expect(gameboard.missedAttacks).toContainEqual({ row: 3, col: 4 });
});

test('checkPlayerShips returns true when all ships are sunk', () => {
  const gameboard = new Gameboard();

  // Create ships and place them on the gameboard
  const ship1 = new Ship(3);
  const ship2 = new Ship(2);
  gameboard.placeShip(ship1, 2, 3, true);
  gameboard.placeShip(ship2, 5, 6, false);

  // Hit all sections of both ships
  ship1.hit(0);
  ship1.hit(1);
  ship1.hit(2);
  ship2.hit(0);
  ship2.hit(1);

  // Check if all ships are sunk
  expect(gameboard.checkPlayerShips()).toBe(true);
});

test('checkPlayerShips returns false when not all ships are sunk', () => {
  const gameboard = new Gameboard();

  // Create ships and place them on the gameboard
  const ship1 = new Ship(3);
  const ship2 = new Ship(2);
  gameboard.placeShip(ship1, 2, 3, true);
  gameboard.placeShip(ship2, 5, 6, false);

  // Hit sections of the ships
  ship1.hit(0);
  ship1.hit(2); 
  ship2.hit(1);

  // Check if all ships are not sunk
  expect(gameboard.checkPlayerShips()).toBe(false);
});



});