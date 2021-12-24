import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Header from './pages/Header/Header';
import Advisory from './pages/Advisory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="soltuions" element={<Solutions />} />
          <Route path="industry" element={<Industries />} />
          <Route path="advisory" element={<Advisory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
