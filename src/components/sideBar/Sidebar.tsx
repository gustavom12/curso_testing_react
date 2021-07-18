import React, { useEffect, useRef } from "react";
import Dropdown from "../a_minicomponents/dropdownLinks/DropdownLinks";
import './Sidebar.sass'
import { NavLink } from "react-router-dom";
function Sidebar({ sideBar, setSideBar }: { sideBar: any, setSideBar: any }) {
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
          title="Introducción"
          link="introduction"
        >
          <NavLink exact className="NavLink w-100" to="/introduction" activeClassName="selected">
            Inicio
          </NavLink>
          <NavLink exact className="NavLink w-100" to="/introduction/temas" activeClassName="selected">
            Temas
          </NavLink>
          <NavLink exact className="NavLink w-100" to="/introduction/empezar" activeClassName="selected">
            Empezar
          </NavLink>
        </Dropdown>
        <Dropdown
          title="Estructura"
          link="structure"
        >
          <NavLink exact className="NavLink w-100" to="/structure/i" activeClassName="selected">
            Estructura
          </NavLink>
          <NavLink exact className="NavLink w-100" to="/structure/example" activeClassName="selected">
            Ejemplo
          </NavLink>
        </Dropdown>
        <Dropdown
          title="Queries"
          link="queries"
        >
          <NavLink exact className="NavLink w-100" to="/queries/metodos" activeClassName="selected">
            Métodos
          </NavLink>
          <NavLink exact className="NavLink w-100" to="/queries/cheatsheet" activeClassName="selected">
            Cheatsheet
          </NavLink>
          <NavLink exact className="NavLink w-100" to="/queries/priority" activeClassName="selected">
            Prioridad
          </NavLink>
        </Dropdown>
        <Dropdown
          title="Eventos"
          link="events"
        >
          <NavLink exact className="NavLink w-100" to="/queries/metodos" activeClassName="selected">
            Eventos
          </NavLink>
          <NavLink exact className="NavLink w-100" to="/queries/cheatsheet" activeClassName="selected">
            Cheatsheet
          </NavLink>
          <NavLink exact className="NavLink w-100" to="/queries/priority" activeClassName="selected">
            Prioridad
          </NavLink>
        </Dropdown>
      </div>
    </div>
  )
}
export default Sidebar
