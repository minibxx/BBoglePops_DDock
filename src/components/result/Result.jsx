import React from 'react'
import Header from '@components/Header';
import styled from 'styled-components';
import Typo from '@components/Typography'
import RSection from './RSection'
import Answer from './Answer';

const Background = styled.div`
position: fixed;
width: 100%;
height: 100vh;     
background-image: linear-gradient(#000,#002A84);
background-repeat : no-repeat;
background-size : cover;
z-index: -2;ㅋㅋ
`;

function Result() {
  return (
    <>
      <Background />
      <Header />
      <RSection/>
      <Answer/>
    </>
  )
}

export default Result