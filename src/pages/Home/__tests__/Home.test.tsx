import { render, screen } from "@testing-library/react"
import Home from ".."

test("Shall load Home Component" , ()=>{
    render(<Home />)
    const textelement = screen.getByText("Home Page")
    expect(textelement).toBeInTheDocument();
})