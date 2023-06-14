export class Player {
  constructor(name){
    this.name = name;
    this.turn = true;
    this.previousAttacks = [];
  }

  setName(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  startTurn(){
    if (!this.turn){
      this.turn = true;
    }
  }

  endTurn(){
    if (this.turn){
      this.turn = false;
    }
  }

  makeRandomPlay(gameboard) {
    const rows = gameboard.grid.length;
    const cols = gameboard.grid[0].length;

    let row, col;
    let validMove = false;

    while (!validMove) {
      row = Math.floor(Math.random() * rows);
      col = Math.floor(Math.random() * cols);

      // Check if the move has already been played
      const isRepeatedMove = this.previousAttacks.some((attack) => {
        return attack.row === row && attack.col === col;
      });

      if (!isRepeatedMove) {
        validMove = true;
      }
    }

    // Record the attack
    this.previousAttacks.push({ row, col });

    // Make the attack on the gameboard
    gameboard.receiveAttack(row, col);
  }
  

}