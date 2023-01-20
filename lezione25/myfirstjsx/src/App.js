import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelloWorld from "./components/HelloWorld";
import Orologio from "./components/Orologio";
import BottoneContatore from "./components/BottoneContatore";
import Esempio from "./Esempio";
import Counter from "./Counter.js";
import CounterReducer from "./CounterReducer";

function App() {
  return (
    <div class="container">
      <div class="text-center mt-5">
        <HelloWorld name="mondo"></HelloWorld>
        <p class="lead">A complete project boilerplate built with Bootstrap</p>
        <BottoneContatore></BottoneContatore>
        <Esempio></Esempio>
        <Counter></Counter>
        <CounterReducer></CounterReducer>
       
      </div>
    </div>
  );
}

export default App;