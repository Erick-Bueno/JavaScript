import List from './Components/List';
import './App.css';
import Frase from './Components/Frase';
import SaymyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
function App() {
  return (
    <div className="App">
      <Frase frase="ola mundoooo"></Frase>
      <Frase frase="mundo é o meu ovo"></Frase>
      <SaymyName nome = "ana"></SaymyName>
      <Pessoa nome = "marcos" idade = "18"></Pessoa>
      <List></List>
    </div>
  );
}

export default App;
