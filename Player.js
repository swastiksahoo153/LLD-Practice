const Token = require("./Token");

const FINAL_POSITION = 100;

class Player {
  tokens;
  tokensCompleted;
  constructor() {
    this.initializeTokens();
    this.tokensCompleted = 0;
  }

  initializeTokens() {
    this.tokens = [];
    for (let i = 0; i < 4; i++) {
      this.tokens.push(new Token());
    }
  }

  moveToken(tokenNumber, steps) {
    const token = this.tokens[tokenNumber - 1];
    let tokenPosition = token.getPosition();
    let newPosition = tokenPosition;
    if (tokenPosition === 0) {
      if (steps === 6) {
        newPosition = 1;
      }
    } else if (tokenPosition + steps <= FINAL_POSITION) {
      newPosition = tokenPosition + steps;
      if (newPosition === FINAL_POSITION) {
        this.tokensCompleted += 1;
        console.log("tokensCompleted: " + this.tokensCompleted);
      } else {
        console.log(
          `Cannot move token ${tokenNumber} by ${steps} as ${tokenPosition} + ${steps} > ${FINAL_POSITION}.`
        );
      }
    }

    token.setPosition(newPosition);
    return this.tokensCompleted;
  }
}

module.exports = Player;
