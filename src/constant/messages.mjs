import GAME_CONDITION from './conditions.mjs';

const MESSAGES = Object.freeze({
  startGuide: `숫자 야구 게임을 시작합니다.`,
  inputGuide: `숫자를 입력해주세요 : `,
  endGuide: `${GAME_CONDITION.maxLength}개의 숫자를 모두 맞히셨습니다! 게임종료`,
});

const PROGRESS = Object.freeze({
  nothing: `낫싱`,
  ball: `볼`,
  strike: `스트라이크`,
  and: ` `,
});

export { MESSAGES, PROGRESS };
