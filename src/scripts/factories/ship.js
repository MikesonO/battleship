export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array(length).fill(false); // sets each element in the array to false.
    this.isVerticle = false;
  }

  hit(position) {
    if (position >= 0 && position < this.length) {
      this.hits[position] = true;
      return true; // Hit successful
    }
    return false; // Invalid hit position
  }

  isSunk() {
    return this.hits.every((hit) => hit);
  }

  rotate() {
    if (!this.isVertical) {
      this.isVertical = true;
    } else {
      this.isVertical = false;
    }
  }
  
}
