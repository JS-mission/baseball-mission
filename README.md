# 미션 - 숫자 야구

## 🔍 진행 방식

- 미션은 **기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항** 세 가지로 구성되어 있습니다.
- 세 개의 요구 사항을 만족하기 위해 노력합니다. 특히 기능을 구현하기 전에 [excalidraw](https://excalidraw.com/)를 통해 기능 및 구조를 시각화 합니다. 
- 미션 진행 시, 구현에 어려운 부분은 이슈에 [ISSUE](https://github.com/JS-mission/baseball-mission/issues) 질문합니다.

## 📮 미션 제출 방법
- excalidraw를 통해 시각화한 기능 및 구조는 PR에 첨부합니다.
- PR 시 PR명은 ([이름 - Step 단계] PR) 명으로 제출합니다.
- Step 구현 중간에도 리뷰를 받고 싶다면 PR 템플릿을 이용하여 PR을 올립니다.

## 🚀 기능 요구 사항
기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임 입니다.
같은 수가 같은 자이에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 해당 힌트를 이용하여 먼저 상대방(컴퓨터)의 수를 맞추면 승리합니다.

- 예) 상대방(컴퓨터)의 수가 425일 때
  - 123을 제시한 경우 : 1스트라이크
  - 456을 제시한 경우 : 1볼 1스트라이크
  - 789를 제시한 경우 : 낫싱

  위 숫자 야구 게임에서 상대방의 역할을 컴퓨터가 합니다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택합니다.
- 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력합니다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
- 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.
<br/>

## 🏓  미션 진행 PR step 단계

#### 1️⃣ step1. 랜덤으로 컴퓨터가 3자리를 생성하도록 구현합니다.

#### 2️⃣ step2. 프로그램의 입, 출력 기능을 구현합니다.
- 게임 시작 문구를 출력하도록 구현합니다.(출력 4번)
- 입력 시 프로그램이 생성한 랜덤 숫자와 일치하면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이 출력되도록 합니다.(출력 1번, 출력 2번)

#### 3️⃣ step3. 프로그램이 생성한 숫자와 사용자가 입력한 숫자,자리가 모두 맞다면 (출력 3번)을 표시하도록 구현합니다. 

#### 4️⃣ step4. 숫자,자리가 모두 맞다면 게임 종료 후 다시 게임을 시작하거나 완전히 종료할 수 있도록 구현합니다.(실행 결과 예시 참고)

#### 5️⃣ step5. 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용하여 예외를 발생 시킨 후, 어플리케이션을 종료 합니다. 

#### 6️⃣ step6. 작성한 코드에 대해 테스트 코드를 작성합니다.
<br/>

## 🤖 입출력 요구 사항

#### 입력
- 서로 다른 3자리의 수
- 게임이 끝난 경우 재시작/종료를 구분하는 1과 2 중 하나의 수

#### 출력

- 출력 1번: 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시

```
1볼 1스트라이크
```

- 출력 2번: 하나도 없는 경우

```
낫싱
```

- 출력 3번: 3개의 숫자를 모두 맞힐 경우

```
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
```

- 출력 4번: 게임 시작 문구 출력

```
숫자 야구 게임을 시작합니다.
```


### 테스트 실행 가이드

- 테스트 패키지 설치를 위해 `Node.js` 버전 `18.17.1` 이상이 필요합니다.
- 다음 명령어를 입력해 패키지를 설치합니다.

```bash
npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행합니다.

```bash
npm test
```

---

## 🏃🏻‍♂️ 실행 결과 예시

```
숫자 야구 게임을 시작합니다.
숫자를 입력해주세요 : 123
1볼 1스트라이크
숫자를 입력해주세요 : 145
1볼
숫자를 입력해주세요 : 671
2볼
숫자를 입력해주세요 : 216
1스트라이크
숫자를 입력해주세요 : 713
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
1
숫자를 입력해주세요 : 123
1볼
...
```

---

## 🎯 프로그래밍 요구 사항
- 프로그램 실행의 시작점은 `App.js`의 `play` 메서드입니다. 아래와 같이 프로그램을 실행시킬 수 있어야 합니다.

**예시**

```javascript
const app = new App();
app.play();
```

1. `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않습니다. 순수 Vanilla JS로만 구현합니다.
2. [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 합니다.
3. 프로그램 종료 시 `process.exit()`를 호출하지 않습니다.
4. 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 합니다.
5. 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

### 라이브러리

- `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현해야 합니다.
  - Random 값 추출은 `Random.pickNumberInRange()`를 활용합니다.
  - 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용합니다.

#### 사용 예시

```javascript
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
```

---

## ✏️ 과제 진행 요구 사항
- 미션은 [개인 깃허브 명]으로 브랜치를 한 뒤 해당 브랜치에 [개인 깃허브 명 - step단계]명으로 PR을 올립니다.

#### 미션 참고 자료 

- DOM
  - [MDN DOM](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C)
- alert
  - [MDN alert](https://developer.mozilla.org/ko/docs/Web/API/Window/alert)
- javascript module
  - [module](https://ko.javascript.info/modules-intro)
- event
  - [이벤트](https://ko.javascript.info/introduction-browser-events)
  - [이벤트 위임](https://ko.javascript.info/event-delegation)

#### 우테코 코드 PR 모음
- 코드 작성 및 리뷰 시 다른 사람의 우테코 숫자 야구 코드를 참고하여 작성해도 됩니다.
- [우테코 숫자 야구 PR 제출 목록](https://github.com/woowacourse-precourse/javascript-baseball-6/pulls)