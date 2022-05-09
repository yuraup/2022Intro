/* eslint-disable no-undef */
import { useState } from 'react';
import styled from 'styled-components';

const Wapper = styled.div``;

const TextBox = styled.div``;

const ButtonBox = styled.div``;

function YuraButton() {
  const [ImgHover, setImgHover] = useState(false);
  return (
    <Wapper>
      <TextBox />
      <ButtonBox />
    </Wapper>
  );
}
export default YuraButton;
