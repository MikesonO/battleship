import {
  Ship
} from "../factories/ship";


describe('Ship', () => {

  let ship;

  beforeEach(() => {
    ship = new Ship(4); // Create a ship with length 4 for each test
  });

  test('ship construction', () => {
    // Verify that the ship is constructed with the correct length
    expect(ship.length).toBe(4);

    // Verify that the hits array is initialised with the correct length
    expect(ship.hits.length).toBe(4);

    // Verify that all elements in the hits array are set to false 
    expect(ship.hits.every((hit) => hit === false)).toBe(true);
  });

  test('hitting a valid position', () => {

    const shipHit = ship.hit(2);

    // Verify that the hit is successful (returns true)
    expect(shipHit).toBe(true);

    // Verify that the hit position is true
    expect(ship.hits[2]).toBe(true);
  });

  test('hitting an invalid position', () => {

    const shipHit = ship.hit(5);

    // Verify that the hit is unsuccessful (returns false)
    expect(shipHit).toBe(false);

    // Verify that the hit position is undefined
    expect(ship.hits[5]).toBe(undefined);
  });

})