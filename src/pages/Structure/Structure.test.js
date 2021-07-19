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

describe("Bloque de múltiples tests", ()=>{
  test("Nombre del testeo1", ()=>{
    render(<Structure/>);
    const Title = screen.getByRole("heading")
    expect(Title).toBeInTheDocument()
  })
  test("Nombre del testeo2", ()=>{
    render(<Structure/>);
    const Title = screen.getByText(/titulo/i)
    expect(Title).toBeInTheDocument()
  })
  test("Nombre del testeo3", ()=>{
    render(<Structure/>);
    const Title = screen.getByTestId("id")
    expect(Title).toBeInTheDocument()
  })
})
