import "./App.css"
import { Navbar } from "./components"
import { Home } from "./pages"
import { LayoutContainer } from "./styled-components"

export const App = () => {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </>
  )
}
