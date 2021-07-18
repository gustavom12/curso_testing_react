import {render, screen} from "@testing-library/react";
import Structure from "./Structure"

test("Nombre del testeo", ()=>{
  //Selecciona el/los componentes a renderizar
  render(<Structure/>);
  //Busca elementos en el DOM
  const Title = screen.getByRole("heading")
  //Ya puedes interactuar/testear con los elementos seleccionados
  expect(Title).toBeInTheDocument()
})
