import React from "react";
import Routers from "./Routes/Routers";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
