import './App.css';
import HelloWorld from './components/HelloWorld';
import Orologio from './components/Orologio';

function Ciao (props) {
  return <p>Ciao, {props.name}</p>
}


function App() {  
  return (
    <div className="App">
      <HelloWorld name="mondo"></HelloWorld>
      <Ciao name="Paolo"></Ciao>
      <Orologio></Orologio>
    </div>
  );
}

export default App;