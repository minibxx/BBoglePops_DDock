import './App.css'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InterviewPage from './components/InterviewPage';

const SaveButton = styled.button`
border-radius: 50px;
display: flex;
border: 1px solid black;
font-size: 15px;
gap: 10px;
height: 30px;
margin-bottom: 16px;
justify-content: center;
align-items: center;
padding: 15px 20px;
`;
function App() {
  const navigate = useNavigate();
  return (
    <>
        <SaveButton
          onClick={() => navigate('/interview')}
        >
          면접 보러 가기
        </SaveButton>
    </>
  )
}

export default App
