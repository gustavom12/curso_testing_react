import React, { } from "react";
import './Dropdown.sass'
function Dropdown({ children, className, active, onClick, title }:
  { children: any, className?: string, active: boolean, onClick: any, title: string }) {
  return (
    <div className={`Dropdown ${className} ${active && "active"} w-100`}>
      <h5 className="title d-flex justify-content-between w-100" onClick={onClick}>
        <span>{title}</span>
        <i className="fas fa-chevron-right"></i>
      </h5>
      <div className="content w-100">
        {children}
      </div>
    </div>
  )
}
export default Dropdown
