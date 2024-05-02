import './App.css'
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Canvas } from '@react-three/fiber'
import DDock3D from './components/DDock3D';
import Header from './components/Header';

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

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Background/>
      <Char3D className='w-[100%] h-[100vh]'>
        <Canvas>
          <DDock3D />
        </Canvas>
      </Char3D>
      <div className='relative'>
        <Header/>
        <div>하이</div>
      </div>
    </>
  )
}

export default App
