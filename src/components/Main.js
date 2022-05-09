import PortfolioJeong from './PortfolioJeong';
import PortfolioYeon from './PortfolioYeon';
import PortfolioYura from './PortfolioYura';
import Soojeong from './Soojeong';
import Soyeon from './Soyeon';
import Yura from './Yura';

function Main() {
  return (
    <div>
      <header>
        <div>
          <p>메인페이지</p>
          <PortfolioJeong />
          <PortfolioYeon />
          <PortfolioYura />
          <Soojeong />
          <Yura />
          <Soyeon />
        </div>
      </header>
    </div>
  );
}

export default Main;
