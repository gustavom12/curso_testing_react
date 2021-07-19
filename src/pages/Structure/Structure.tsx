import React,{} from "react";
import './Structure.sass'
import useScrollTo from "../../helpers&hooks/customHooks/useScrollToSection"
function Structure (){
  useScrollTo()
  return(
    <section className="Structure">
      <h1 className="mb-3" id="i">Estructura de testing</h1>
      <div className="block w-100 bg-dark code">
        <h2 className="fw-bold mb-4 text-white fs-2 text-center">Bloque de testing</h2>
        <div className="square code fw-bold bg-success">
          Renderiza uno o más componentes
        </div>
        <div className="square code fw-bold bg-primary">
          Encuentra los elementos con los que quieres interactuar
        </div>
        <div className="square code fw-bold bg-orange">
          Interactua con los elementos
        </div>
        <div className="square code fw-bold bg-danger">
          Afirma si los resultados son los esperados
        </div>
      </div>
      <div>
        <h3 className="mt-4 mb-3 fw-bold" id="example"> Ejemplo simple: </h3>
        <img className="w-100" src="https://i.ibb.co/PTqjRn5/Captura-de-pantalla-2021-07-15-140343.png" alt="" />
      </div>
      <div>
        <h3 className="mt-4 mb-3 fw-bold" id="example"> Ejemplo de múltiples tests </h3>
        <h5 className="mt-3 mb-3">Para agrupar múltiples tests, la mejor práctica es agrupandolos
          en un "<span className="fw-bold">describe block</span>"
        </h5>
        <img className="w-75" src="https://i.ibb.co/khLspw1/Captura-de-pantalla-2021-07-19-143910.png" alt="" />
      </div>
    </section>
  )
}
export default Structure
