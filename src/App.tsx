import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./page/Home";
import About from "./page/About";
import Checkout from "./page/Checkout";
import Product from "./page/Product";
import Authentication from "./page/auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
