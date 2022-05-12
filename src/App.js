import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>A</div>} />
          <Route path="all" element={<div>A</div>} />
          <Route path="admin" element={<div>A</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
