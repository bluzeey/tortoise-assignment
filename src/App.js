import './App.css';
import Word from './Word';
import {useState} from 'react'
function App() {
  const [letter,setLetter]=useState()
  const [input,setInput]=useState()
  return (
    <div className="App">
      <h1>Type the Alphabet</h1>
      <p>Typing game to see how fast you type. Timer starts when you do :)</p>
      <Word input={input}/>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
    </div>
  );
}

export default App;
