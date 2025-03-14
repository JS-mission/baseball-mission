import {RandomNumber} from "./RandomNumber.js";

class App {
  async play() {
    new RandomNumber().printAnswer;
  }
}

const app = new App();
app.play();

export default App;
