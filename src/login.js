function Login({maintainLogin}){
    return (
        <div className='overlay'>
            <div className="form">
                <h2 className="f-head">LOGIN</h2>
                
                <input className="f-input" type="name" placeholder="Enter your Mail id"></input>
                
                <input className="f-input" type="password" placeholder="Enter your password"></input>
                
                <div className="f-buttons">

                    <button onClick={maintainLogin} className="submit" >Back</button>
                    <button  className="submit" >Login</button>
                    
                </div>
            
            </div>
        </div>
    )

}


export default Login;