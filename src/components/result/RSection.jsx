import React from 'react'
import styled from 'styled-components';
import Typo from '@components/Typography'

const Feedback = styled.div`
    width: 250px;
    font-size: 20px;
    border: 2px solid white;
    padding: 10px;
    text-align: center;
    border-radius: 35px;
    background-color: rgb(255,255,255,0.3);
`;

function RSection() {
    return (
        <>
            <div className='text-white flex gap-[10px]'>
                <Feedback>
                    <div className='mx-[20px]'>
                        <Typo title={'답변 내용 피드백'} type={'body2'} />
                    </div>
                </Feedback>
                <Feedback>
                    <div className='mx-[20px]'>
                        <Typo title={'음석 분석 피드백'} type={'body2'} />
                    </div>
                </Feedback>
                <Feedback>
                    <div className='mx-[20px]'>
                        <Typo title={'시선 분석 피드백'} type={'body2'} />
                    </div>
                </Feedback>
                <Feedback>
                    <div className='mx-[20px]'>
                        <Typo title={'자세 분석 피드백'} type={'body2'} />
                    </div>
                </Feedback>
            </div>
        </>
    )
}

export default RSection