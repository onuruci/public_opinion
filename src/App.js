
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './mainPage/rootPage'
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
        
      </BrowserRouter>
    </div>
  );
}

export default App;
