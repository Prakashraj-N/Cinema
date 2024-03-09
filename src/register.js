
import Login from './login';


function Register({login,maintainLogin}){
    return (
        login ?
            <Login maintainLogin={maintainLogin}/>
            :
            <div className='overlay'>
                <div className="form">
                    <h2 className="f-head">REGISTER</h2>
                    <input className="f-input" type="name" placeholder="Enter your Name"></input>
                    <input className="f-input" type="name" placeholder="Enter your Mail id"></input>
                    
                    <input className="f-input" type="password" placeholder="Enter your password"></input>
                    <div className="f-buttons">
                        <button className="submit" >Register</button>

                        <button onClick={maintainLogin} className="submit" >Login</button>
                    </div>
                </div>
            </div>



        

        
        
    )

}


export default Register;