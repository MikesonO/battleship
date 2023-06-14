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

  test('starting and ending the turn', () => {
    // Verify initial turn state
    expect(player.turn).toBe(true);

    // End the turn
    player.endTurn();

    // Verify turn state after ending the turn
    expect(player.turn).toBe(false);

    // Start the turn
    player.startTurn();

    // Verify turn state after starting the turn
    expect(player.turn).toBe(true);
  });

  test('making a random play', () => {
    const gameboard = new Gameboard();

    // Call the makeRandomPlay method
    player.makeRandomPlay(gameboard);

    // Verify that the player's previousAttacks array has one attack recorded
    expect(player.previousAttacks.length).toBe(1);
  });

});
