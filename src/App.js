import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="all" element={<div>A</div>} />
          <Route path="admin" element={<div>A</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
