import React from 'react'
import styled from 'styled-components';
import Typo from '@components/Typography'


const QuitBox = styled.div`
  width: 714px;
  font-size: 40px;
  margin: 15% auto;
  border: 2px solid white;
  color: white;
  border-radius: 52px;
  background-color: rgb(255,255,255,0.1);
  padding: 10px;
  position: absolute;
  top: 50%; left: 50%;
  transform: translateX(-50%);
`;

function InterviewCaution() {
    return (
        <>
            <QuitBox>
                <div className='text-right pr-[25px]'>×</div>

                <div className='text-center pt-[10px] pb-[60px]'>
                    <Typo title={'정확한 결과 제공을 위해'} type={'body7'} />
                    <Typo title={'이어폰 착용을 권고드립니다.'} type={'body7'} />
                </div>
            </QuitBox>
        </>
    )
}

export default InterviewCaution