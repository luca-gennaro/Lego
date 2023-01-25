import { Route, Routes } from "react-router-dom";
import DesignSystemLibrary from "../Pages/DesignSystemLibrary/DesignSystemLibrary";
import Index from "../Pages/Index/Index";
import Home from "../Pages/Home/Home";
import Banners from "../Pages/Banners/Banners";
import Headers from "../Pages/Headers/Headers";
import SpotlightCard from "../Ui/SpotlightCard/SpotlightCard";
import "./App.css";
import Sliders from "../Pages/Sliders/Sliders";
import Articles from "../Pages/Articles/Articles";
import ModalFromHeart from "../Ui/Modal/Modal";
import NavBar from "../Ui/Navbar/NavBar";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/designsystemlibrary" element={<DesignSystemLibrary />} />
        <Route path="/banners" element={<Banners />} />
        <Route path="/headers" element={<Headers />} />
        <Route path="/spotlightcard" element={<SpotlightCard />} />
        <Route path="/sliders" element={<Sliders />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/modal" element={<ModalFromHeart/>} />
        <Route path="/navbar" element={<NavBar/>} />
        

      </Routes>
    </div>
  );
}

export default App;
