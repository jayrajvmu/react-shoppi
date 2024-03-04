import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import Nopage from "./Components/Nopage";
import Hero from "./Components/Hero";
import Homepagecontent from "./Components/Homepagecontent";
import Products from "./Components/Products"

function App() {
  return (
    <div>
      <Router>

        <Nav />

        <Routes>

          <Route path="/" element={<><Hero /><Homepagecontent/></>} />
          <Route path="/products" element={<><Products /></>} />

          
          <Route path="*" element={<Nopage />} />

        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
