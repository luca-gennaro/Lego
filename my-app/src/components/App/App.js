import { Route, Routes } from "react-router-dom";
import DesignSystemLibrary from "../Pages/DesignSystemLibrary/DesignSystemLibrary";
import Home from "../Pages/Home/Home";
import ProductCard from "../Ui/ProductCard/ProductCard";
import './App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designsystemlibrary" element={<DesignSystemLibrary />} />
      </Routes>
      <ProductCard novità={true} sconto={32} titolo={"Prodotto di prova da App - Forza Napoli"} prezzo={79.99}/>
    </div>
  );
}

export default App;
