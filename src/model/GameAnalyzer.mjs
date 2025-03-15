const GameAnalyzer = {
  getBallAndStrike(computerNumber, userNumber) {
    return this.calcBallAndStrike(String(computerNumber), String(userNumber));
  },

  /**
   * 컴퓨터가 생성한 숫자와 사용자의 입력한 숫자와 비교하여 볼과 스트라이크의 갯수를 구한다.
   * @param {string} computerString
   * @param {string} userString
   * @returns {{ball:number, strike: number}} 볼과 스트라이크의 갯수를 가진 객체
   */
  calcBallAndStrike(computerString, userString) {
    let ball = 0;
    let strike = 0;

    [...computerString].forEach((char, index) => {
      if (userString[index] === char) strike += 1;
      else if (userString.includes(char)) ball += 1;
    });

    return { ball, strike };
  },
};

export default GameAnalyzer;
