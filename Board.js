const Player = require("./Player");
class Board {
  players = [];
  numOfPlayers;
  constructor(numOfPlayers) {
    this.numOfPlayers = numOfPlayers;
    this.initializePlayers(numOfPlayers);
  }

  initializePlayers(numOfPlayers) {
    for (let i = 0; i < numOfPlayers; i++) {
      this.players.push(new Player());
    }
  }

  executeTurn(playerNum, tokenNum, steps) {
    const tokensCompleted = this.players[playerNum].moveToken(tokenNum, steps);
    let isGameOver = false;
    if (tokensCompleted === 4) {
      console.log(`Player ${playerNum} won!!!`);
      isGameOver = true;
    }

    const curTokenPos = this.players[playerNum].tokens[tokenNum - 1].position;

    if (curTokenPos !== 0) {
      this.handleClashes(curTokenPos, playerNum);
    }

    return isGameOver;
  }

  displayBoardPosition() {
    this.players.forEach((player, playerIndex) => {
      player.tokens.forEach((token, tokenIndex) => {
        console.log(
          `Player: ${playerIndex + 1}, Token: ${
            tokenIndex + 1
          }, Position: ${token.getPosition()}`
        );
      });
    });
  }

  handleClashes(position, excludedPlayer) {
    this.players.forEach((player, playerIndex) => {
      player.tokens.forEach((token, tokenIndex) => {
        if (token.position === position && excludedPlayer !== playerIndex) {
          this.players[playerIndex].tokens[tokenIndex].position = 0;
          console.log(
            `Token: ${tokenIndex + 1} of player: ${
              playerIndex + 1
            } clashed with currect move, sending it back to home`
          );
        }
      });
    });
  }
}

module.exports = Board;
