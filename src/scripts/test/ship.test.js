import { Ship } from "../factories/ship";


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

})