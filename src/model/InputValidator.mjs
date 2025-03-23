import { USER_COMMAND, GAME_CONDITION } from '../constant/conditions.mjs';

const InputValidator = {
  /**
   * 유효범위의 중복이 없는 3자리 숫자가 입력되었는지 검증
   * @param {string} input //검증할 값
   * @return {boolean} //입력값이 유효한 경우 true, 그렇지 않을 경우 false를 반환
   */

  hasValidNumber(input) {
    const numberRegExp = /^\d+$/;
    const isNumeric = numberRegExp.test(input);
    const isValidLength = input.length === GAME_CONDITION.maxLength;
    const isValidUnique = new Set(input).size === GAME_CONDITION.maxLength;
    const isValidRange = !input.includes(GAME_CONDITION.limitNumber);

    return isNumeric && isValidLength && isValidUnique && isValidRange;
  },

  /**
   * 재시작 또는 종료 명령어와 일치하는지 검증
   * @param {string} input //검증할 입력값
   * @return {boolean} //입력값이 유효한 경우 true, 그렇지 않을 경우 false를 반환
   */
  hasValidCommand(input) {
    const commandInput = parseInt(input, 10);

    return (
      commandInput === USER_COMMAND.replay || commandInput === USER_COMMAND.end
    );
  },
};

export default InputValidator;
