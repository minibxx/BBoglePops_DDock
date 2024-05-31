import React from 'react'
import Header from '@components/Header';
import styled from 'styled-components';
import Typo from '@components/Typography'
import ListBg from '/images/listBg2.png'
import Robot1 from '/images/listRobot1.svg'
import Robot2 from '/images/listRobot2.svg'
import Robot3 from '/images/listRobot3.svg'
import Robot4 from '/images/listRobot4.svg'
import Robot5 from '/images/listRobot5.svg'
import Robot6 from '/images/listRobot6.svg'

const Background = styled.div`
position: fixed;
width: 100%;
height: 100vh;     
background-image: linear-gradient(#000,#002A84);
background-repeat : no-repeat;
background-size : cover;
z-index: -2;
`;

const BackgroundImage = styled.div`
position: fixed;
width: 100%;
z-index: -1;
`;

const InterviewContent = styled.div`
width:390px;
height: 170px;
font-size: 40px;
margin: 0 auto;
border: 2px solid white;
color: white;
border-radius: 25px;
padding: 10px 30px;
display: flex;
justify-content: space-evenly;
align-items: center;
&:hover{
  background-color: rgb(255,255,255,0.3);
}
`;

const InterviewContents = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.1fr);
    grid-gap: 20px;
    width: 1214px;
    margin: 0 auto;
    `;

function ResultList() {
    return (
        <>
            <Background />
            <Header />

                <BackgroundImage className=''>
                    <img src={ListBg} className='w-[100%] ' />
                </BackgroundImage>
                <div className='text-white w-[1214px] mx-[auto] border-b-2 pb-[20px] mb-[80px]'>
                    <div className='mt-[50px]'><Typo title={'내 면접 기록'} type={'body4'} /></div>
                </div>
            <InterviewContents>
                <InterviewContent >
                    <img src={Robot1} className='w-[100px]' />
                    <div className='flex gap-[20px] flex-col'>
                        <Typo title={'2024.04.12'} type={'body8'} />
                        <Typo title={'11:22:33'} type={'small2'} />
                    </div>
                </InterviewContent>
                <InterviewContent >
                    <img src={Robot1} className='w-[100px]' />
                    <div className='flex gap-[20px] flex-col'>
                        <Typo title={'2024.04.12'} type={'body8'} />
                        <Typo title={'11:22:33'} type={'small2'} />
                    </div>
                </InterviewContent>
                <InterviewContent >
                    <img src={Robot1} className='w-[100px]' />
                    <div className='flex gap-[20px] flex-col'>
                        <Typo title={'2024.04.12'} type={'body8'} />
                        <Typo title={'11:22:33'} type={'small2'} />
                    </div>
                </InterviewContent>
                <InterviewContent >
                    <img src={Robot1} className='w-[100px]' />
                    <div className='flex gap-[20px] flex-col'>
                        <Typo title={'2024.04.12'} type={'body8'} />
                        <Typo title={'11:22:33'} type={'small2'} />
                    </div>
                </InterviewContent>
            </InterviewContents>
        </>
    )
}

export default ResultList

