import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getUserNumber(message) {
    const userNumber = await Console.readLineAsync(message);

    return parseInt(userNumber, 10);
  },

  async getUserCommand(message) {
    const userCommand = await Console.readLineAsync(message);

    return parseInt(userCommand, 10);
  },
};

export default InputView;
