import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constant/messages.mjs';
import InputValidator from '../model/InputValidator.mjs';

const InputView = {
  async getUserNumber(message) {
    const userNumber = await Console.readLineAsync(message);

    if (!InputValidator.hasValidNumber(userNumber))
      throw new Error(MESSAGES.inputError);

    return parseInt(userNumber, 10);
  },

  async getUserCommand(message) {
    const userCommand = await Console.readLineAsync(message);

    if (!InputValidator.hasValidCommand(userCommand))
      throw new Error(MESSAGES.inputError);

    return parseInt(userCommand, 10);
  },
};

export default InputView;
