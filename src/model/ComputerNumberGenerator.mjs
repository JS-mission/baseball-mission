import { Random } from '@woowacourse/mission-utils';
import { GAME_CONDITION } from '../constant/conditions.mjs';

class ComputerNumberGenerator {
  #computerNumber;

  constructor() {
    this.#computerNumber = this.generateRandomNumbers();
  }

  /**
   * 컴퓨터는 중복되지 않는 랜덤 세자리의 숫자를 생성한다.
   * @returns {number} 중복되지 않는 세자리의 숫자
   */
  generateRandomNumbers() {
    const digitalArray = new Set();

    while (digitalArray.size < GAME_CONDITION.maxLength) {
      const randomNumber = Random.pickNumberInRange(
        GAME_CONDITION.startNumber,
        GAME_CONDITION.endNumber
      );
      digitalArray.add(randomNumber);
    }

    return parseInt([...digitalArray].join(''), 10);
  }

  getComputerNumber() {
    return this.#computerNumber;
  }

  initComputerNumber() {
    this.#computerNumber = this.generateRandomNumbers();
  }
}

export default ComputerNumberGenerator;
