import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../a_minicomponents/dropdown/Dropdown";
import './Sidebar.sass'
import { NavLink } from "react-router-dom";
function Sidebar({ sideBar, setSideBar }: { sideBar: any, setSideBar: any }) {
  const [sectionDropdown, setSectionDropdown] = useState(false)
  const modalRef = useRef<any>()
  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      if(e.target === modalRef.current){
        e.stopPropagation()
        setSideBar((val: boolean) => !val)
      }
    })
  }, [setSideBar])
  return (
    <div className={`SidebarContainer ${sideBar && "activeModal"}`}
      ref={modalRef}
    >
      <div className="Sidebar">
        <Dropdown
          active={sectionDropdown}
          onClick={() => { setSectionDropdown(!sectionDropdown) }}
          title="example"
        >
          <NavLink exact className="NavLink w-100" to="" activeClassName="selected">
            Link
          </NavLink>
          <NavLink exact className="NavLink w-100" to="/dawdaw" activeClassName="selected">
            Link2
          </NavLink>
        </Dropdown>
      </div>
    </div>
  )
}
export default Sidebar
