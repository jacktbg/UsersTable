import { Provider } from "react-redux"
import "./App.css"
import { Navbar } from "./components"
import { Home } from "./pages"
import { LayoutContainer } from "./styled-components"
import store from "./redux/store"

export const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  )
}
