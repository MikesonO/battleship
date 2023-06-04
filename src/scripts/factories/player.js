export class Player {
  constructor(name){
    this.name = name;
    this.turn = true;
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
  

}