import React, { useState } from 'react'
import Header from '@components/Header';
import styled from 'styled-components';
import Typo from '@components/Typography';
import { postLogIn } from '../../apis/login';
import { useNavigate } from 'react-router-dom';

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
  cursor: pointer;
`;

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <Background />
      <Header />
      <LoginDiv>
        <div className='text-center my-[50px]'>
          <Typo title={'LOGIN'} type={'body5'} />
        </div>
        <div className='ml-[145px]'>
          <Insert placeholder='ID'
            value={id}
            onChange={(e) => { setId(e.target.value) }} />
          <div className='mx-[20px] mt-[5px] mb-[10px]'>
            <Typo title={'가입되어 있지 않은 아이디입니다.'} type={'passwordError'} />
          </div>
          <Insert
            type={'password'}
            placeholder='PASSWORD'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />
          <div className='mx-[20px] mt-[5px] mb-[10px]'>
            <Typo title={'비밀번호가 틀렸습니다.'} type={'passwordError'} />
          </div>
        </div>
        <LoginBtn onClick={() => {
          postLogIn(id, password).then((data) => {
            localStorage.setItem("Authorization", data.access)
            navigate('/')
          })
        }}>
          <Typo title={'LOGIN'} type={'body2'} />
        </LoginBtn>
        <div className='flex justify-between w-[320px] m-[auto] mb-[70px]'>
          <Typo title={'회원가입'} type={'body9'} />
          <Typo title={'아이디/비밀번호 찾기'} type={'body10'} />
        </div>
      </LoginDiv>
    </>
  )
}

export default Login