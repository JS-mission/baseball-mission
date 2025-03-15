import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getUserNumber(message) {
    const userNumber = await Console.readLineAsync(message);

    return parseInt(userNumber, 10);
  },
};

export default InputView;
