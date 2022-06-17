import './App.css';
import { FrontPageImages } from './components/FrontPageImages';
import { NavList } from './components/NavList';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { HatsList } from './components/HatsList';
import { BeltsList } from './components/BeltsList';
import { DressesList } from './components/DressesList';
import { ShoesList } from './components/ShoesList';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavList />
        <Routes>
          <Route path="/" element={
            <FrontPageImages />
          }
          />
          <Route path="/AboutUs" element={
            <AboutUs />
          }
          />
          <Route path="Hats" element={
            <HatsList />
          } />
          <Route path="Belts" element={
            <BeltsList />
          } />
          <Route path="Dresses" element={
            <DressesList />
          } />
          <Route path="Shoes" element={
            <ShoesList />
          } />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
