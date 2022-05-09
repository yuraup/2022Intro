import { Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import PortfolioJeong from './components/PortfolioJeong';
import PortfolioYeon from './components/PortfolioYeon';
import PortfolioYura from './components/PortfolioYura';
import Soojeong from './components/Soojeong';
import Soyeon from './components/Soyeon';
import Yura from './components/Yura';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Portfolio/SooJeong" element={<PortfolioJeong />} />
      <Route path="/Portfolio/Soyeon" element={<PortfolioYeon />} />
      <Route path="/Portfolio/Yura" element={<PortfolioYura />} />
      <Route path="/Yura" element={<Yura />} />
      <Route path="/Soyeon" element={<Soyeon />} />
      <Route path="/Soojeong" element={<Soojeong />} />
    </Routes>
  );
}

export default App;
