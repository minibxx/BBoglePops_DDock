import React from 'react'
import styled from 'styled-components';
import Typo from '@components/Typography'

const Background = styled.div`
position: fixed;
width: 100%;
height: 100vh;     
background-image: linear-gradient(#000,#002A84);
background-repeat : no-repeat;
background-size : cover;
z-index: -2;
`;

const LoginDiv = styled.div`
  width: 714px;
  height: 553px;
  font-size: 40px;
  margin: 15% auto;
  border: 2px solid white;
  color: white;
  border-radius: 52px;
  padding: 10px 30px;
  background-color: rgb(255,255,255,0.1);
`;

const Insert = styled.input`
  width: 362px;
  padding: 20px;
  font-size: 20px;
  height: 60px;
  border: 2px solid white;
  border-radius: 35px;
  background-color: rgb(255,255,255,0.3);
  &::placeholder{
    color:rgb(255,255,255,0.3);
    font-size: 20px;
  }
`;

const LoginBtn = styled.div`
  text-align: center;
  width: 362px;
  height: 60px;
  margin: 50px auto 20px auto;
  border: 2px solid white;
  color: black;
  border-radius: 35px;
  padding: 10px 30px;
  background-color: rgb(255,255,255);
`;

function SignUp() {
  return (
    <>
    <LoginDiv>
        <div className='text-center my-[50px]'>
          <Typo title={'LOGIN'} type={'body5'} />
        </div>
        <div className='ml-[145px]'>
          <Insert placeholder='ID'/>
          <Insert placeholder='PASSWORD'/>
        </div>
        <LoginBtn>
          <Typo title={'LOGIN'} type={'body2'} />
        </LoginBtn>
        <div className='flex justify-between w-[320px] m-[auto]'>
          <Typo title={'회원가입'} type={'body9'} />
          <Typo title={'아이디/비밀번호 찾기'} type={'body10'} />
        </div>
      </LoginDiv>
    </>
  )
}

export default SignUp