import './App.css'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Canvas } from '@react-three/fiber'
import DDock3D from './components/DDock3D';

const SaveButton = styled.button`
font-size: 20px;
border-radius: 50px;
display: flex;
border: 1px solid white;
gap: 10px;
height: 30px;
margin-bottom: 16px;
justify-content: center;
align-items: center;
padding: 25px 20px;
`;
function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className='h-[75vh]'>
        <Canvas>
          <DDock3D />
        </Canvas>
      </div>
      <div>
        <SaveButton
          onClick={() => navigate('/interview')}
          className='m-[auto]'
        >
          면접 보러 가기
        </SaveButton>
      </div>
    </>
  )
}

export default App
