const prompt = require("prompt-sync")();

const Board = require("./Board");
const Dice = require("./Dice");

const NUM_OF_PLAYERS = 4;

function run() {
  const dice = new Dice();
  const board = new Board(NUM_OF_PLAYERS);
  let curPlayer = 0;
  while (true) {
    const steps = dice.roll();
    const tokenNum = Number(
      prompt(
        `Enter the token for player-${curPlayer + 1} (dice result = ${steps}): `
      )
    );
    if (tokenNum > 4) {
      console.error("Token Number should be between 1-4");
      continue;
    }
    const isGameOver = board.executeTurn(curPlayer, tokenNum, steps);
    if (isGameOver) {
      break;
    }
    curPlayer += 1;
    curPlayer %= NUM_OF_PLAYERS;
    board.displayBoardPosition();
  }
}

run();
