import React from 'react'
import styled from 'styled-components';
import Typo from '@components/Typography'
import Header from '../Header';

const Background = styled.div`
position: fixed;
width: 100%;
height: 100vh;     
background-image: linear-gradient(#000,#002A84);
background-repeat : no-repeat;
background-size : cover;
z-index: -2;
`;

const SignUPDiv = styled.div`
  width: 714px;
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
  border-bottom: 2px solid white;
  background-color: transparent;
  &::placeholder{
    color:rgb(255,255,255,0.3);
    font-size: 20px;
  }
`;

const SignUpBtn = styled.div`
  text-align: center;
  width: 362px;
  height: 60px;
  margin: 50px auto 70px auto;
  border: 2px solid white;
  color: black;
  border-radius: 35px;
  padding: 10px 30px;
  background-color: rgb(255,255,255);
`;

function SignUp() {
  return (
    <>
      <Background />
      <Header />
      <SignUPDiv>
        <div className='text-center my-[50px]'>
          <Typo title={'SIGN UP'} type={'body5'} />
        </div>
        <div className='ml-[145px]'>

          {/* <div className='mx-[20px] mt-[5px]'>
            <Typo title={'ID'} type={'body2'} />
          </div> */}
          <Insert placeholder='ID' />
          <div className='mx-[20px] mt-[10px] mb-[20px]'>
            <Typo title={'이미 사용중인 아이디입니다.'} type={'passwordError'} />
          </div>

          {/* <div className='mx-[20px] mt-[5px]'>
            <Typo title={'비밀번호'} type={'body2'} />
          </div> */}
          <Insert placeholder='PASSWORD' />
          <div className='mx-[20px] mt-[10px] mb-[20px]'>
            <Typo title={'숫자, 영어 포함 8자 이상으로 입력해주세요.'} type={'passwordError'} />
          </div>

          {/* <div className='mx-[20px] mt-[5px]'>
            <Typo title={'비밀번호 확인'} type={'body2'} />
          </div> */}
          <Insert placeholder='PASSWORD' />
          <div className='mx-[20px] mt-[10px] mb-[20px]'>
            <Typo title={'비밀번호를 다시 확인해주세요.'} type={'passwordError'} />
          </div>
        </div>
        <SignUpBtn>
          <Typo title={'SIGN UP'} type={'body2'} />
        </SignUpBtn>
      </SignUPDiv>
    </>
  )
}

export default SignUp