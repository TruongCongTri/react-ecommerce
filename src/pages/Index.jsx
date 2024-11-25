import React from 'react'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"
import Shop from "./Shop"
import SingleProduct from "./SingleProduct"

import { Routes, Route } from "react-router-dom";



export default function listRoutes() {
  const NotFoundPage = () => {
    return <div><h1 className="font-bold ">Sorry </h1></div>
  }
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="*" element={<NotFoundPage />} />
    
    </Routes>
  )
}
