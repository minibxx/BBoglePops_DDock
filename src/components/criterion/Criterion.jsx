import React from 'react'
import Header from '@components/Header';
import styled from 'styled-components';
import Typo from '@components/Typography'
import ComputerChat from './ComputerChat';
import UserChat from './UserChat';
import AnswerChat from './AnswerChat';
import SoundChat from './SoundChat';

const Background = styled.div`
position: fixed;
width: 100%;
height: 100vh;     
background-image: linear-gradient(#000,#002A84);
background-repeat : no-repeat;
background-size : cover;
z-index: -2;
`;
function Criterion() {
    return (
        <>
            <Background />
            <Header />
            <div className=' w-[1214px] m-[auto]'>
            <ComputerChat />
            <UserChat />
            <AnswerChat/>
            <SoundChat/>
            </div>
        </>
    )
}

export default Criterion