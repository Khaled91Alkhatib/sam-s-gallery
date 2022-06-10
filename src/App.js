import './App.css';
import { FrontPageImages } from './components/FrontPageImages';
import { NavList } from './components/NavList';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
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
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
