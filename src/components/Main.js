import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Top = styled.div`
  background: #fcf8f8;
  padding: 30px;
  .Title {
    font-size: 55px;
    font-weight: 900;
    color: #f95353;
    margin-top: -30px;
    padding-top: 30px;
  }

  .SecondTitle {
    font-size: 23px;
    margin-top: -30px;
    font-weight: 800;
    color: #4f4b4b;
  }
`;

const Button = styled.button`
  border-radius: 12px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background: #fd9b9b;
  padding: 22px 30px 22px 30px;
  text-decoration: none;
  margin: 15px 50px;
  cursor: help;
  border: 0;

  :hover {
    background: #fef6f6;
    color: #f17373;
  }
`;

const Middle = styled.div`
  background: linear-gradient(45deg, Violet, Orange);
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .left {
    display: flex;
    flex-direction: column;
  }

  .right {
    display: flex;
    flex-direction: column;
  }
`;

const Hr = styled.hr`
  width: 80%;
  height: 5px;
  background-color: pink;
  border: 0;
`;

const Heart = styled.p`
  position: absolute;
  font-size: 50px;
  margin-left: 1500px;
`;

const Heart2 = styled.p`
  position: absolute;
  font-size: 50px;
  margin-left: -1500px;
`;
function Main() {
  return (
    <div>
      <Top>
        <p className="Title">2022 자기소개 💖</p>
        <p className="SecondTitle">세 명의 프론트 & 협업 연습</p>
      </Top>
      <Middle>
        <Heart2>🐣</Heart2>
        <div className="left">
          <Hr />
          <Link to="/Soojeong">
            <Button>수정의 자기소개</Button>
          </Link>
          <Link to="/Soyeon">
            <Button>소연의 자기소개</Button>
          </Link>
          <Link to="/Yura">
            <Button>유라의 자기소개</Button>
          </Link>
        </div>
        <br />
        <Heart>❤️</Heart>
        <div className="right">
          <Hr />
          <Link to="/Portfolio/SooJeong">
            <Button>수정의 포트폴리오</Button>
          </Link>
          <Link to="/Portfolio/Soyeon">
            <Button>소연의 포트폴리오</Button>
          </Link>
          <Link to="/Portfolio/Yura">
            <Button>유라의 포트폴리오</Button>
          </Link>
        </div>
      </Middle>
    </div>
  );
}

export default Main;
