import { useState } from 'react';
import styled from 'styled-components';

import YuraImg from '../img/yura.jpg';
import Bunny from '../img/yuraBunny.jpg';

import YuraButton from './YuraButton';

const YuraWapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 20px;
`;

const IntroBox = styled.div`
  font-size: 13px;
`;

const IntroduceBox = styled.div`
  background: pink;
  width: 380px;
  height: 570px;
  padding: 20px;
  border-radius: 15px;
  line-height: 19px;
  margin-top: 30px;

  .bold {
    font-size: 17px;
    font-weight: 600;
  }
  .s {
    font-size: 11px;
  }

  .m {
    font-size: 13px;
  }
`;
const HoverBox = styled.div`
  margin: 150px 0 0 30px;
  img {
    width: 290px;
    height: 390px;
    margin: -30px 0 0 21px;
    cursor: pointer;
    border: 8px dashed pink;
    border-radius: 20px;
  }
  p {
    font-size: 40px;
    display: flex;
    justify-content: center;
    padding: 0 0 0 10px;
  }
`;

// const heartEffect = styled.p`
// position: absolute;
// `;

function Yura() {
  const [ImgHover, setImgHover] = useState(false);
  return (
    <YuraWapper>
      <IntroBox>
        <Title>
          <h1>Yura Lee 💕</h1>
        </Title>
        <hr />
        <IntroduceBox>
          <p className="bold">안녕하세요!</p>
          <p className="bold">저는 프론트 개발자를 희망하는 이유라입니다.</p>
          <p className="m"> • MBTI : ENFP 💖</p>
          <p className="m"> • 장점 : 긍정적, 도전적, 자아성찰능력이 뛰어남</p>
          <p className="m"> • 단점 : 겁이 많다. 궁금한 게 많다. </p>
          <p className="m"> • 취미 : 넷플 보기, 게임, 그림그리기, 글쓰기, 산책</p>
          <p className="m"> • 좋아하는 일: 잠 자기. 잠죽자보다는 잠살자!</p>
          <p className="s">- 저는 여름잠과 겨울잠을 자요... 답이 없다면 자고 있어요.... </p>
          <p className="m"> • 좋아하는 음식: 아이스크림, 젤리, 육류, 어류, 신 것</p>
          <p className="m"> • 좋아하는 동물: 강아지, 고양이과의 맹수들 (크앙-!!) </p>
          <p className="m"> • 좋아하는 드라마: 굿플레이스 </p>
          <p className="m"> • 좋아하는 영화: 모아나, 주토피아, 소울, 인턴, 어바웃타임 </p>
          <p className="s">- 맞습니다! 저는 애니메이션 영화를 좋아해요! 지브리보다는 디즈니! </p>
          <p className="s">- 하지만, 서바이벌 영화도 좋아하고요 등등 공포영화 빼고 다 좋아요! </p>
          <p className="s">- 저는 헝거게임과 메이즈러너를 한때 엄청 사랑했답니다... </p>
          <p> • 좋아하는 캐릭터: 뽀슈 </p>
          <p className="s"> - 저는 뽀슈 작가님의 싸인까지 받을 정도로 좋아한답니다! 귀여운 뽀슈!</p>
        </IntroduceBox>
      </IntroBox>
      <HoverBox>
        <p>💖</p>
        <div onMouseEnter={() => setImgHover(true)} onMouseLeave={() => setImgHover(false)}>
          <img src={ImgHover ? YuraImg : Bunny} alt="이미지 호버" />
        </div>
      </HoverBox>
      <YuraButton />
    </YuraWapper>
  );
}
export default Yura;
