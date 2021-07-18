import React,{} from "react";
import './Navbar.sass'
function Navbar ({toggleSideBar}:{toggleSideBar:any}){
  return(
    <nav className="d-flex">
      <button
        className="fas fa-bars toggleSideBar"
        onClick={()=>{toggleSideBar((val:any)=>!val)}}
      ></button>
      <div className="d-flex">
        <img src="https://i.ibb.co/JprDdjt/octopus-64x64.png" alt="" className="logo"/>
        <h2 className="m-0 flex"> Curso React Testing Library </h2>
      </div>
    </nav>
  )
}
export default Navbar
