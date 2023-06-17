class Token {
  constructor() {
    this.position = 0;
  }
  setPosition(n) {
    this.position = n;
  }
  getPosition() {
    return this.position;
  }
}

module.exports = Token;
