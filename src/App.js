import GameController from './controller/GameController.mjs';
import ComputerNumberGenerator from './model/ComputerNumberGenerator.mjs';

class App {
  #gameController;

  constructor(gameController) {
    this.#gameController = gameController;
  }

  async play() {
    await this.#gameController.startGame();
  }
}

const computerNumberGenerator = new ComputerNumberGenerator();
const gameController = new GameController(computerNumberGenerator);
const app = new App(gameController);

app.play();

export default App;
