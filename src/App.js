
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";

import Main from './components/mainPage/rootPage'
import Navbar from './components/Navbar';
import './styles/styles.css';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="all" element={<div>A</div>} />
          <Route path="admin" element={<div>A</div>} />
        </Routes>
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
