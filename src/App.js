import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial';
import CadastroDePrato from './pages/CadastroDePrato';
import Cardapio from './pages/Cardapio';

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/cadastro-de-prato" element={<CadastroDePrato />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}

export default App;
