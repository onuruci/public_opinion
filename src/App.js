import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './mainPage/rootPage'
import Navbar from './components/Navbar';
import AdminPage from "./components/AdminPage";
import AdminAdd from "./components/AdminAdd";
import './styles/styles.css';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="all" element={<div>A</div>} />
          <Route path="admin" element={<AdminPage/>} />
          <Route path="admin/add" element={<AdminAdd/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
