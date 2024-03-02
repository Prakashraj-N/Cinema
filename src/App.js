import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Main from './main';
import { useState } from 'react';

function App() {

  const [mode,setmode] = useState(true);
  function maintainMode (){
    setmode(!mode);

    console.log(mode)
  }





  return (
    <div className="App">
      <Navbar maintainMode={maintainMode} mode={mode}/>
      <Main mode={mode}/>
      
    </div>
  );
}

export default App;
