// ✅ App.jsx — Full router setup
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Gallery from './pages/Gallery';
import Edit from './pages/Edit';
import Detail from './pages/Detail';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/crewmate/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;