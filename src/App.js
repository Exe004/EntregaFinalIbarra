import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CustomProvider from "./components/CartContext";

function App() {

  return (
    <BrowserRouter>
      <CustomProvider>
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
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Main>       
        
        <Footer />
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
