import { Gameboard } from "../factories/gameboard";
import { Ship } from '../factories/ship';

describe('Gameboard', () => {

  let gameboard;
  let ship;

  beforeEach(() => {
    gameboard = new Gameboard();
    ship = new Ship(4);
  });


});