import { Player } from "../factories/player";
import { Gameboard } from "../factories/gameboard";

describe('Player', () => {

  let player;

  beforeEach(() => {
    player = new Player('Player 1');
  });

  test('setting and getting the player name', () => {
    // Verify initial player name
    expect(player.getName()).toBe('Player 1');

    // Set new player name
    player.setName('New Player');

    // Verify updated player name
    expect(player.getName()).toBe('New Player');
  });

});
