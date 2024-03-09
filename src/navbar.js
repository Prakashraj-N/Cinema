import { IoIosLogIn } from "react-icons/io";
import { TbLayoutNavbarExpandFilled } from "react-icons/tb";





function Navbar({maintainRegister,maintainSide}){
    return (
        <div className="nav" >
            <div className="logo">
                <p className="logo-n">CINEMA</p>
            </div>
            <div className="nav-li">
                <li className="nav-li-link">Movie</li>
                
                <li className="nav-li-link">Animation</li>
                <li className="nav-li-link">Series</li>
            </div>
            <div >
                <input className="search" type="search" placeholder="search"></input>
            </div>
            <div className="nav-other">
                
                <button className="register" onClick={maintainRegister}><sapn className="A" ><IoIosLogIn/></sapn><sapn className="reg">Register</sapn></button>
                <button  className="register" onClick={maintainSide}><sapn className="A" ><TbLayoutNavbarExpandFilled /></sapn><sapn className="reg">Menu</sapn></button>

            </div>

        </div>
    )
}


export default Navbar;