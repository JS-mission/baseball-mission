import { Console } from '@woowacourse/mission-utils';
import { PROGRESS } from '../constant/messages.mjs';

const OutPutView = {
  printStaticMessage(message) {
    Console.print(message);
  },

  /**
   * 볼과 스트라이크 갯수를 통해 출력 메시를 반환함
   * @param {number} ball
   * @param {number} strike
   * @returns {string} 게임 진행 상황 출력
   */
  printGameProgress(ball, strike) {
    let message = '';

    if (ball === 0 && strike === 0) message = PROGRESS.nothing;
    if (ball > 0) message += `${ball}${PROGRESS.ball}`;
    if (strike > 0) {
      if (message.length > 0) message += PROGRESS.and;
      message += `${strike}${PROGRESS.strike}`;
    }

    return this.printStaticMessage(message);
  },
};

export default OutPutView;
