import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Error from "./pages/Error";

function App() {
  return (
   
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
