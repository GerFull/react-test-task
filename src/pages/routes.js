import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Product from "./product/product";

export default () => (



   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<Product/>} />
   </Routes>
)