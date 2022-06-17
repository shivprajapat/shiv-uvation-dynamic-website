import React from "react";
import Routers from "./Routes";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter } from "react-router-dom";
// import dotenv from "dotenv";
// require('dotenv').config()
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
