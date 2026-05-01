import './App.css'
import ProductList from "./components/ProductList.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<ProductList products={[]} />}></Route>
                <Route path="/products" element={<ProductList />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
