import GameController from './controller/GameController.mjs';
import ComputerNumberGenerator from './model/ComputerNumberGenerator.mjs';

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController(new ComputerNumberGenerator());
  }

  async play() {
    await this.#gameController.startGame();
  }
}

export default App;
