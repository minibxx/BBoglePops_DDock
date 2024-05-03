import React from 'react'
import Typo from '@components/Typography'
import { styled } from 'styled-components';

const LoginBtn = styled.button`
  border: 2px solid white;
  color: white;
  border-radius: 15px;
  padding: 2px 15px;
  &:hover{
    background-color: rgb(255,255,255,0.3);
  }
`;

function Header() {
  return (
    <>
    <div className='flex flex-row justify-between text-white'>
        <div>Header</div>
        <ul className='flex flex-row gap-[30px]'>
            <li><Typo title={'똑똑 평가기준'} type={'heading1'}/></li>
            <li><Typo title={'면접 시작'} type={'heading1'}/></li>
            <li><Typo title={'내 면접 기록'} type={'heading1'}/></li>
        </ul>
        <LoginBtn><Typo title={'로그인'} type={'heading1'}/></LoginBtn>
    </div>
    </>
  )
}

export default Header