import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Main from './main';
import { useState } from 'react';

function App() {

  const [mode,setmode] = useState(true);
  function maintainMode (){
    setmode(!mode);

    
  }


  const [side,setside] = useState(false);
  function maintainSide (){
    setside(!side);


    console.log(side)

    
  }





  return (
    <div className="App">
      <Navbar maintainMode={maintainMode} maintainSide={maintainSide} mode={mode}/>
      <Main mode={mode} side={side} />
      
    </div>
  );
}

export default App;
