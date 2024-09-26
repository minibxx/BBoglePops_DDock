import React from 'react'
import styled from 'styled-components';
import Typo from '@components/Typography'
import { useRecoilState } from 'recoil';
import { myAnalyzeAtom } from '@store/atom';
import reactStringReplace from 'react-string-replace';

const RedSpan = styled.span`
    color: #FF5A5A;
`;

const BlueSpan = styled.span`
    color: #5A8EFF;
`;

const RectBorder2 = styled.div`
margin-bottom: 30px;
padding-left: 10px;
background-color: white;
color: black;
text-align: center;
`;
const FeedbackDetailBoxs = styled.div`
    font-size: 22px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    `;
const FeedbackBox = styled.div`
    padding: 60px ;
    border-radius: 40px;
    border: 2px solid white;
    color: white;
    margin-top: 50px;
`;
const FeedbackDetailBox = styled.div`
    box-shadow: 0 0 10px white;
    border-radius: 10px;
    padding: 30px;
    white-space: pre-wrap;
`;

function AnswerSuggestion({ answerIndex }) {
    const [analyze, setAnalyze] = useRecoilState(myAnalyzeAtom);

    const renderAnswer = () => {
        const answer = analyze.responses[answerIndex] ? analyze.responses[answerIndex].response : ''
        const inappropriate = analyze.responses[answerIndex] ? analyze.responses[answerIndex].inappropriateness.split(',').map(item => ({ type: 'inappropriate', value: item })) : [];
        const redundancies = analyze.responses[answerIndex] ? analyze.responses[answerIndex].redundancies.split(',').map(item => ({ type: 'redundancies', value: item })) : [];
        const merged = inappropriate.concat(redundancies);

        let replacedAnswer = answer;
        merged.map(item => {
            replacedAnswer = reactStringReplace(replacedAnswer, item.value, (match, i) => item.type == 'inappropriate' ? (
                <RedSpan>{match}</RedSpan>)
                : (<BlueSpan>{match}</BlueSpan>))
        })

        return replacedAnswer
    }
    return (
        <div>
            <div className='text-[24px] font-light text-left'>
                {renderAnswer()}
            </div>
            <FeedbackBox>
                <RectBorder2>
                    <Typo title={'이런 표현은 어때요?'} type={'body8'} />
                </RectBorder2>

                <FeedbackDetailBoxs>
                    {analyze.responses[answerIndex] && analyze.responses[answerIndex].corrections.slice(1, -1).split(',').map((item) => {
                        return (
                            <FeedbackDetailBox>
                                {item.replace(':', '\n⇒')}
                            </FeedbackDetailBox>
                        )
                    })}
                </FeedbackDetailBoxs>
            </FeedbackBox>
        </div>
    )
}

export default AnswerSuggestion