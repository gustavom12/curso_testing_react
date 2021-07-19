import React, { useEffect, useRef } from "react";
import Dropdown from "../a_minicomponents/dropdownLinks/DropdownLinks";
import './Sidebar.sass'
import { Link } from "react-router-dom";
import useObserver from "../../helpers&hooks/customHooks/useObserver";
function Sidebar({ sideBar, setSideBar }: { sideBar: any, setSideBar: any }) {
  const modalRef = useRef<any>()
  const intersectingEl = useObserver("",
    ["temas", "empezar", "i", "example", "metodos", "cheatsheet", "priority"]
  )
  console.log({ intersectingEl })
  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      if (e.target === modalRef.current) {
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
          <Link
            className={`Link w-100 ${intersectingEl === "temas" || intersectingEl === "" ? "selected" : null}`}
            to="/introduction/temas"
          >
            Temas
          </Link>
          <Link className={`Link w-100 ${intersectingEl === "empezar" && "selected"}`} to="/introduction/empezar">
            Empezar
          </Link>
        </Dropdown>
        <Dropdown
          title="Estructura"
          link="structure"
        >
          <Link className={`Link w-100 ${intersectingEl === "i" && "selected"}`} to="/structure/i">
            Estructura
          </Link>
          <Link className={`Link w-100 ${intersectingEl === "example" && "selected"}`} to="/structure/example">
            Ejemplo
          </Link>
        </Dropdown>
        <Dropdown
          title="Queries"
          link="queries"
        >
          <Link className={`Link w-100 ${intersectingEl === "metodos" && "selected"}`} to="/queries/metodos">
            Métodos
          </Link>
          <Link className={`Link w-100 ${intersectingEl === "cheatsheet" && "selected"}`} to="/queries/cheatsheet">
            Cheatsheet
          </Link>
          <Link className={`Link w-100 ${intersectingEl === "priority" && "selected"}`} to="/queries/priority">
            Prioridad
          </Link>
        </Dropdown>
        <Dropdown
          title="Eventos"
          link="events"
        >
          <Link className={`Link w-100 ${intersectingEl === "metodos" && "selected"}`} to="/queries/metodos">
            Eventos
          </Link>
          <Link className={`Link w-100 ${intersectingEl === "cheatsheet" && "selected"}`} to="/queries/cheatsheet">
            Cheatsheet
          </Link>
          <Link className={`Link w-100 ${intersectingEl === "" && "selected"}`} to="/queries/priority">
            Prioridad
          </Link>
        </Dropdown>
      </div>
    </div>
  )
}
export default Sidebar
