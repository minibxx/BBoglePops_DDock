import React from 'react'
import styled from 'styled-components';
import Typo from '@components/Typography'


const RectBorder = styled.div`
    width: 210px;
    margin-bottom: 30px;
    padding-left: 10px;
    background-color: white;
    color: black;
`;

const RectBorder2 = styled.div`
    width: 155px;
    margin-bottom: 30px;
    padding-left: 10px;
    background-color: white;
    color: black;
`;

const FeedbackBox = styled.div`
    padding: 50px ;
    border-radius: 40px;
    border: 2px solid white;
    color: white;
    margin-top: 50px;
`;

const FeedbackDetailBoxs = styled.div`
    font-size: 22px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    `;

const FeedbackDetailBox = styled.div`
    text-align: center;
    box-shadow: 0 0 10px white;
    border-radius: 10px;
    padding: 20px;
`;

function AnswerFeedback() {
    return (
        <>
            <FeedbackBox>
                <RectBorder>
                    <Typo title={'이런 표현은 어때요?'} type={'body8'} />
                </RectBorder>
                <FeedbackDetailBoxs>
                    <FeedbackDetailBox>부적절 - 적절</FeedbackDetailBox>
                    <FeedbackDetailBox>부적절 - 적절</FeedbackDetailBox>
                    <FeedbackDetailBox>부적절 - 적절</FeedbackDetailBox>
                    <FeedbackDetailBox>부적절 - 적절</FeedbackDetailBox>
                    <FeedbackDetailBox>부적절 - 적절</FeedbackDetailBox>
                    <FeedbackDetailBox>부적절 - 적절</FeedbackDetailBox>
                    <FeedbackDetailBox>부적절 - 적절</FeedbackDetailBox>
                    <FeedbackDetailBox>부적절 - 적절</FeedbackDetailBox>
                </FeedbackDetailBoxs>
            </FeedbackBox>

            <FeedbackBox>
                <RectBorder2>
                    <Typo title={'답변 내용 총평'} type={'body8'} />
                </RectBorder2>
                <div className='text-[28px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis<br />
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br />
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br />
                    officia deserunt mollit anim id est laborum.
                </div>
            </FeedbackBox>
        </>
    )
}

export default AnswerFeedback