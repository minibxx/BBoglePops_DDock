import React from 'react'
import Header from '@components/Header';
import styled from 'styled-components';
import Typo from '@components/Typography'
import RandomAnswer from '../interview/RandomAnswer';

const Background = styled.div`
position: fixed;
width: 100%;
height: 100vh;     
background-image: linear-gradient(#000,#002A84);
background-repeat : no-repeat;
background-size : cover;
z-index: -2;
`;

function About() {
    return (
        <>
            <Background />
            <Header />
            <RandomAnswer/>
        </>
    )
}

export default About