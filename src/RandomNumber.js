import { MissionUtils } from "@woowacourse/mission-utils";

export class RandomNumber {

    #answer;

    constructor() {
        this.#answer = MissionUtils.Random.pickNumberInRange(100,999);
    }

    get printAnswer() {
        return MissionUtils.Console.print(`Answer was : ${this.#answer}`);
    }
}