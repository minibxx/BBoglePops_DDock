import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Canvas } from '@react-three/fiber'
import DDock3D from '@components/DDock3D';
import Header from '@components/Header';
import Typo from '@components/Typography';
import FunctionCard from './FunctionCard';
import MovingLogo from './MovingLogo';
import DDock from '/images/ddockEng.png';
import Main0 from '/images/main0.svg'
import Main2 from '/images/main2.svg'
import Main3 from '/images/main3.svg'
import Main4 from '/images/main4-2.svg'
import Mainbottom from '/images/mainbottom.svg'
import Title1 from '/images/mainWhat.svg'
import Title2 from '/images/mainWhy.svg'

const Char3D = styled.div`
position: absolute;
top: 0;
z-index: -1;
`;

const Background = styled.div`
position: fixed;
width: 100%;
height: 100vh;     
background-image: linear-gradient(#000,#002A84);
background-repeat : no-repeat;
background-size : cover;
z-index: -2;
`;

const StartBtn = styled.button`
  font-size: 40px;
  margin: 0 auto;
  border: 2px solid white;
  color: white;
  border-radius: 15px;
  padding: 10px 30px;
  &:hover{
    background-color: rgb(255,255,255,0.3);
  }
`;

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Background />
      {/* <Char3D className='w-[100%] h-[100vh]'>
        <Canvas>
          <DDock3D />
        </Canvas>
      </Char3D> */}
      <div className='relative '>
        <Header />
        <img src={DDock} className='w-[98%]' />
        <img src={Main0} className='ml-[25px]' />
        <img src={Main2} className='w-[110%]' />
        <div className='w-[1214px] m-[auto]'>
          {/* <div className='text-white text-[50px]'>똑부러지는 취업?</div>
          <div className='text-white text-[50px] ml-[112px] mb-[50px]'>똑바른 자세부터!</div> */}
          <img src={Title1} className='my-[80px]' />
          <div className='flex justify-between'>
            <img src={Main3} className='w-[400px]' />
            <div className='mt-[70px]'>
              <div className='text-[#1CBDBB]'>
                <Typo title={'“모의 면접, 실전처럼 연습하다.”'} type={'body4'} />
              </div>
              <div className='text-white mt-[26px]'>
                <Typo title={'똑똑은 면접 준비의 새로운 패러다임을 제시합니다. '} type={'body2'} />
                <Typo title={'메타휴먼과의 면접 연습을 통해,  '} type={'body2'} />
                <Typo title={'실제 면접관 앞에서의 경험을 완벽하게 재현합니다. '} type={'body2'} />
                <Typo title={'답변 내용을 분석해 제공하여,  '} type={'body2'} />
                <Typo title={'당신의 합격을 끊임없이 서포트합니다. '} type={'body2'} />
              </div>
            </div>
          </div>
          <MovingLogo />
          <div className='flex justify-between items-end'>
            <img src={Title2} className='mt-[180px] mb-[80px]' />
            <img src={Main4} className='w-[250px] mr-[50px]' />
          </div>
          <FunctionCard />
          <div className='text-white mt-[370px]'>
           
          </div>
          <div className='ml-[450px] mt-[90px]'>
            <StartBtn>면접 보러가기</StartBtn>
          </div>
        </div>
          <img src={Mainbottom} />
      </div>
    </>
  )
}

export default App
