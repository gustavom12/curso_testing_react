import React, { } from "react";
import useScrollTo from "../../helpers&hooks/customHooks/useScrollToSection"
import './Queries.sass'
function Queries() {
  useScrollTo()
  return (
    <section className="Queries">
      <h1 id="metodos">Métodos de busqueda</h1>
      <div className="container bg-dark text-white mt-4">
        <h3 className="fw-bold fs-1 text-center text-white mb-3">Find 1 element</h3>
        <div className="row ">
          <div className="col flex"></div>
          <div className="col flex bg-primary fw-bold text-white">getBy</div>
          <div className="col flex bg-primary fw-bold text-white">findBy</div>
          <div className="col flex bg-primary fw-bold text-white">queryBy</div>
        </div>
        <div className="row ">
          <div className="col flex bg-primary">Null</div>
          <div className="col flex bg-danger">Error</div>
          <div className="col flex bg-danger">Error</div>
          <div className="col flex text-black bg-gray">Null</div>
        </div>
        <div className="row ">
          <div className="col flex bg-primary">1 Match</div>
          <div className="col flex bg-success">Return</div>
          <div className="col flex bg-success">Return</div>
          <div className="col flex bg-success">Return</div>
        </div>
        <div className="row ">
          <div className="col flex bg-primary">1+ Match</div>
          <div className="col flex bg-danger">Error</div>
          <div className="col flex bg-danger">Error</div>
          <div className="col flex bg-danger">Error</div>
        </div>
        <div className="row ">
          <div className="col flex bg-primary">Async</div>
          <div className="col flex bg-danger">No</div>
          <div className="col flex bg-success">Yes</div>
          <div className="col flex bg-danger">No</div>
        </div>
      </div>
      <div className="container bg-dark text-white mt-4">
        <h3 className="fw-bold fs-1 text-center text-white mb-3">Find Multiple Elements</h3>
        <div className="row ">
          <div className="col flex"></div>
          <div className="col flex bg-primary fw-bold text-white">getAllBy</div>
          <div className="col flex bg-primary fw-bold text-white">findAllBy</div>
          <div className="col flex bg-primary fw-bold text-white">queryAllBy</div>
        </div>
        <div className="row ">
          <div className="col flex bg-primary">Null</div>
          <div className="col flex bg-danger">Error</div>
          <div className="col flex bg-danger">Error</div>
          <div className="col flex bg-success">Array</div>
        </div>
        <div className="row ">
          <div className="col flex bg-primary">1 Match</div>
          <div className="col flex bg-success">Array</div>
          <div className="col flex bg-success">Array</div>
          <div className="col flex bg-success">Array</div>
        </div>
        <div className="row ">
          <div className="col flex bg-primary">1+ Match</div>
          <div className="col flex bg-success">Array</div>
          <div className="col flex bg-success">Array</div>
          <div className="col flex bg-success">Array</div>
        </div>
        <div className="row ">
          <div className="col flex bg-primary">Async</div>
          <div className="col flex bg-danger">No</div>
          <div className="col flex bg-success">Yes</div>
          <div className="col flex bg-danger">No</div>
        </div>
      </div>
      <div className="cheatSheet">
        <h2 className="fw-bold fs-1 mt-5 mb-3" id="cheatsheet">CheatSheet</h2>
        <p><span className="fw-bold mx-1">ByLabelText</span> Contenido del texto del Label</p>
        <ul>
          <li>getByLabelText</li>
          <li>queryByLabelText</li>
          <li>getAllByLabelText</li>
          <li>queryAllByLabelText</li>
          <li>findByLabelText</li>
          <li>findAllByLabelText</li>
        </ul>
        <p>
          <span className="fw-bold mx-1"> ByPlaceholderText </span>
          Encuentra un elemento según el valor del placeholder
        </p>
        <ul>
          <li>getByPlaceholderText</li>
          <li>queryByPlaceholderText</li>
          <li>getAllByPlaceholderText</li>
          <li>queryAllByPlaceholderText</li>
          <li>findByPlaceholderText</li>
          <li>findAllByPlaceholderText</li>
        </ul>
        <p>
          <span className="fw-bold mx-1">ByText</span>
          Encuentra un elemento según el contenido de text
        </p>
        <ul>
          <li>getByText</li>
          <li>queryByText</li>
          <li>getAllByText</li>
          <li>queryAllByText</li>
          <li>findByText</li>
          <li>findAllByText</li>
        </ul>
        <p>
          <span className="fw-bold mx-1">ByDisplayValue</span>
          Encuentra un "form" element por su valor actual
        </p>
        <ul>
          <li>getByDisplayValue</li>
          <li>queryByDisplayValue</li>
          <li>getAllByDisplayValue</li>
          <li>queryAllByDisplayValue</li>
          <li>findByDisplayValue</li>
          <li>findAllByDisplayValue</li>
        </ul>
        <p>
          <span className="fw-bold mx-1">ByAltText</span>
          encuentra una imagen según su "alt" value
        </p>
        <ul>
          <li>queryByAltText</li>
          <li>getAllByAltText</li>
          <li>queryAllByAltText</li>
          <li>findByAltText</li>
          <li>findAllByAltText</li>
        </ul>
        <p>
          <span className="fw-bold mx-1">ByTitle</span>
          Encuentra según un "title" attribute de un svg
          find by title attribute or svg title tag
        </p>
        <ul>
          <li>getByTitle</li>
          <li>queryByTitle</li>
          <li>getAllByTitle</li>
          <li>queryAllByTitle</li>
          <li>findByTitle</li>
          <li>findAllByTitle</li>
        </ul>
        <p>
          <span className="fw-bold mx-1">ByRole</span>
          Encuentra según el rol del elemento
        </p>
        <ul>
          <li>getByRole</li>
          <li>queryByRole</li>
          <li>getAllByRole</li>
          <li>queryAllByRole</li>
          <li>findByRole</li>
          <li>findAllByRole</li>
        </ul>
        <p>
          <span className="fw-bold mx-1">ByTestId</span>
          encuentra según el atributo "data-testid"
        </p>
        <ul>
          <li>getByTestId</li>
          <li>queryByTestId</li>
          <li>getAllByTestId</li>
          <li>queryAllByTestId</li>
          <li>findByTestId</li>
          <li>findAllByTestId</li>
        </ul>
      </div>
      <div className="Prioridad">
        <h2 className="fs-1 fw-bold" id="priority">Prioridad</h2>
        <h4 className="fw-bold">¿Cuál usar primero?</h4>
        <p className="m-0">Las <span className="fw-bold">buenas prácticas</span>, son siempre acceder por atributos que sean accesibles
          por el usuario
        </p>
        <h5 className="fw-bold mt-3 mb-2 ">Accesibles por el usuario</h5>
        <div className="d-flex w-100">
          <span className="bg-dark code my-1 mx-2 text-white fw-bold">getByRole</span>
          <span className="bg-dark code my-1 mx-2 text-white fw-bold">getByLabelText</span>
          <span className="bg-dark code my-1 mx-2 text-white fw-bold">getByPlaceholderText</span>
          <span className="bg-dark code my-1 mx-2 text-white fw-bold">getByText</span>
        </div>
        <h5 className="fw-bold mt-3 mb-2">Queries semánticas</h5>
        <div className="d-flex w-100">
          <span className="bg-dark code mx-2 text-white fw-bold">getByAltText</span>
          <span className="bg-dark code mx-2 text-white fw-bold">getByTitle</span>
        </div>
        <h5 className="fw-bold mt-3 mb-3">Test ID</h5>
        <span className="bg-dark code mx-2 text-white fw-bold">getBytestId</span>
      </div>
    </section>
  )
}
export default Queries
