import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Main from './main';
import { useState } from 'react';
import Register from './register';


function App() {

  const [register,setregister] = useState(false);
  function maintainRegister (){
    setregister(!register);

    console.log(register)

  }


  const [side,setside] = useState(false);
  function maintainSide (){
    setside(!side);


    
    
  }


  const [login,setlogin] = useState(false);
  function maintainLogin (){
    setlogin(!login);

    console.log(login)

  }









  return (
    <div className="App">
      
      <Navbar maintainRegister={maintainRegister} maintainSide={maintainSide} />
      <Main  side={side} />
      {register && <Register login={login} maintainLogin={maintainLogin} />}
    </div>
  );
}

export default App;
