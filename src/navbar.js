import { MdOutlineLight } from "react-icons/md";





function Navbar({maintainMode,mode}){
    return (
        <div className={mode ? "nav" : "nav-l"}>
            <div className="logo">
                <p className="logo-n">CINEMA</p>
            </div>
            <div className="nav-li">
                <li className="nav-li-link">Movie</li>
                <li className="nav-li-link">Tv show</li>
                <li className="nav-li-link">Animation</li>
                <li className="nav-li-link">Series</li>
            </div>
            <div >
                <input className="search" type="search" placeholder="search"></input>
            </div>
            <div className="nav-other">
                <button onClick={maintainMode} className="dark"><MdOutlineLight/></button>
                <button className="register"><sapn className="A" >C</sapn><sapn className="reg">Register</sapn></button>

            </div>

        </div>
    )
}


export default Navbar;