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
  padding: 0 30px;
  background-color: rgb(255,255,255,0.1);
`;

const QuitBtn = styled.div`
  text-align: center;
  width: 200px;
  height: 60px;
  margin: 20px auto 50px auto;
  border: 2px solid white;
  color: black;
  border-radius: 35px;
  padding: 10px 30px;
  background-color: rgb(255,255,255);
`;

function InterviewCaution() {
    return (
        <>
            <QuitBox>
                <div className='text-center mt-[50px]'>
                    <Typo title={'보다 정확한 결과 제공을 위해'} type={'body7'} />
                </div>
                <div className='text-center '>
                    <Typo title={'이어폰 착용을 권고드립니다.'} type={'body7'} />
                </div>
                    <QuitBtn>
                        <Typo title={'확인'} type={'body2'} />
                    </QuitBtn>
            </QuitBox>
        </>
    )
}

export default InterviewCaution