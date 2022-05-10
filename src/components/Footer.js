import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterBox = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    margin: 90px 50px 0 0;
    font-size: 20px;
    font-weight: 800;
    color: #4f4b4b;
  }

  a {
    margin: 82px 25px 0 -30px;
    font-size: 30px;
    text-decoration: none;
  }
`;
function Footer() {
  return (
    <FooterBox>
      <p>Team</p>
      <p>소연 • 수정 • 유라</p>
      <a target="_blank" href="https://github.com/yuraup/2022Intro" rel="noreferrer">
        💌
      </a>
    </FooterBox>
  );
}

export default Footer;
