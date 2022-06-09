import './App.css';
import { FrontPageImages } from './components/FrontPageImages';
import { NavList } from './components/NavList';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <NavList />
      <FrontPageImages />
      <Footer />
    </div>
  );
}

export default App;
