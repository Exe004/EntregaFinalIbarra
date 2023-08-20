import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main>
        <Routes>
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting="Saludos del Greeting" />}
          />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
