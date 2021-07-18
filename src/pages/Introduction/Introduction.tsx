import React, { } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../components/a_minicomponents/dropdown/Dropdown";
import useScrollTo from "../../helpers&hooks/customHooks/useScrollToSection"
import './Introduction.sass'
function Introduction() {
  useScrollTo()
  return (
    <section className="Introduction">
      <h1> Introducción </h1>
      {/* <h3 style={{fontWeight:600}}></h3> */}
      {/* <p style={{fontSize:"20px"}}>
        <span className="fw-bold"> ¡Bienvenido al curso de testing library con React! </span>

      </p> */}
      <a href="/" className="yt">
        <i className="fas fa-play"></i>
        Ir al curso en youtube
      </a>
      <div className="mt-4 themes" id="temas">
        <h2 className="fw-bold mb-2"> ¿Que aprenderé en "React testing library desde cero"? </h2>
        <Dropdown title="Test unitarios" className="mt-4 bg-success">
          {/* <p></p> */}
          <ul>
            <li> Componentes </li>
            <li> Custom Hooks </li>
          </ul>
        </Dropdown>
        <Dropdown title="Integration Tests" className="mt-2 bg-primary">
          <ul>
            <li> Relación entre componentes </li>
            <li> Pasos de propiedades </li>
          </ul>
        </Dropdown>
        <Dropdown title="End to End Tests" className="mt-2 bg-dark">
          <ul>
            <li> Testeos de aplicaciones de principio a fin </li>
          </ul>
        </Dropdown>
      </div>
      <div className="mt-4">
        <h2 className="fw-bold mb-2"> ¿Por qué "Testing Library"? </h2>
        <p>
          Testing library es la librería de testing con <span className="fw-bold">mayor crecimiento </span> y
          <span className="fw-bold"> más querida </span>
          por la comunidad según <a href="https://stateofjs.com/">stateOfJS</a> en estos últimos años.
        </p>
        <img className="w-100" src="https://i.ibb.co/QvW4jbY/Captura-de-pantalla-2021-07-14-001602.png" alt="" />
      </div>
      <div className="mt-4" id="empezar">
        <h2 className="fw-bold mb-2"> Cómo empezar </h2>
        <h4 className="fw-bold mt-3"> Proyecto de práctica </h4>
        <p>
          El curso será realizado con mi<a href="https://github.com/gustavom12/Curso_TestingLibrary_Todo"> repositorio de práctica </a>
          puedes prácticar clonando dicho repositorio.
        </p>
        <h4 className="fw-bold"> Proyecto ya creado </h4>
        <p>
          Si quieres prácticar con tu <span className="fw-bold">propio proyecto</span>,
          React <span className="fw-bold">ya viene con las dependencias </span>
          para poder hacer tus tests,
          para comprobarlo, puedes verificarlo viendo tu "package.json",
          este debería tener estas dependencias:
        </p>
        <img className="w-100" src="https://i.ibb.co/n7WmghY/Captura-de-pantalla-2021-07-14-134341.png" alt="" />
        <h5 className="fw-bold my-2"> En caso de no poseer estas dependencias:</h5>
        <div className="bg-dark code">
          npm install --save-dev @testing-library/react
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-between">
        <span className="fw-bold"> ¡Ya estás listo para empezar! </span>
        <Link to="/structure"> Estructura de testeos </Link>
      </div>
    </section>
  )
}
export default Introduction
