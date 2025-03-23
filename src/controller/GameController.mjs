import OutPutView from '../view/OutputView.mjs';
import { MESSAGES } from '../constant/messages.mjs';
import InputView from '../view/InputView.mjs';
import GameAnalyzer from '../model/GameAnalyzer.mjs';
import { USER_COMMAND } from '../constant/conditions.mjs';

class GameController {
  #computer;

  constructor(computerNumberGenerator) {
    this.#computer = computerNumberGenerator;

    OutPutView.printStaticMessage(MESSAGES.startGuide);
  }

  async startGame() {
    const computerNumber = this.#computer.getComputerNumber();
    const userNumber = await InputView.getUserNumber(MESSAGES.inputGuide);
    const { ball, strike } = GameAnalyzer.getBallAndStrike(
      userNumber,
      computerNumber
    );

    OutPutView.printGameProgress(ball, strike);

    if (userNumber === computerNumber) return this.finishGame();

    return this.startGame();
  }

  async finishGame() {
    OutPutView.printStaticMessage(MESSAGES.endGuide);

    const userCommand = await InputView.getUserCommand(MESSAGES.replayGuide);

    if (userCommand === USER_COMMAND.replay) {
      this.#computer.initComputerNumber();
      return this.startGame();
    }
    return null;
  }
}

export default GameController;
