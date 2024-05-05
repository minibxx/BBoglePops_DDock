import React from 'react'
import Typo from '@components/Typography'
import { styled } from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const LoginBtn = styled.button`
  border: 2px solid white;
  color: white;
  border-radius: 15px;
  padding: 2px 15px;
  &:hover{
    background-color: rgb(255,255,255,0.3);
  }
`;
const Container = styled.div`
  position: relative;
  height: 3.125rem;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #000;
`;
function Header() {
  return (
    <Container>
      <div className='flex fixed flex-row justify-between text-white'>
        <div>Header</div>
        <ul className='flex flex-row gap-[30px]'>
          <li><Typo title={'똑똑 평가기준'} type={'heading1'} /></li>
          <li><Typo title={'면접 시작'} type={'heading1'} /></li>
          <li><Typo title={'내 면접 기록'} type={'heading1'} /></li>
        </ul>
        <LoginBtn><Typo title={'로그인'} type={'heading1'} /></LoginBtn>
      </div>
    </Container>
  )
}

export default Header