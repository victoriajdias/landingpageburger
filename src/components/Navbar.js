import React from "react";
import Name from './img/Burger Heaven.png';



const Navbar = () => {

return(
    <div className="divnavbar">
<div className="textlink">
<nav className="divtextlink">
    <a className="textlink02">Sobre</a>
    <a className="textlink02">Menu</a>
</nav>
<button className="encomendar">Encomendar online</button>
<img className="title01" src={Name}/>
</div>
</div>
)

}
export default Navbar