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
        <div className="logo bg-primary fw-bold">
        </div>
        <h1 className="m-0">Title</h1>
      </div>
    </nav>
  )
}
export default Navbar
