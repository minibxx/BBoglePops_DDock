import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { postEyeTrackingStop } from '../../apis/interview';
import SightResult from '../../../dist/images/soundResult.png'
import styled from 'styled-components';
import Typo from '@components/Typography';

const RectBorder2 = styled.div`
    width: 270px;
    margin-bottom: 30px;
    padding-left: 5px;
    color: white;
`;
const FeedbackBox = styled.div`
    padding: 60px ;
    border-radius: 40px;
    border: 2px solid white;
    color: white;
`;

function Sound() {
  return (
    <>
      <img src={SightResult} className='w-[100%] p-[5%]' />
      {/* <div className='text-[white] text-[20px]'>마이크와의 거리에 따라 검사 결과가 상이할 수 있습니다. </div> */}

      <FeedbackBox>
        <RectBorder2>
          <Typo title={'시선 분석 총평'} type={'body8'} />
        </RectBorder2>
        <div className='text-[white] text-[25px]'>
          어디서 어디까지는 말이 빠르고 목소리 크기가 큽니다. 또 어디서 어디까지는 말이 상대적으로 느리며
          목소리 크기가 작습니다. 전반적으로 목소리 크기가 살짝 작습니다. 발음이 부정확한 부분은 어디어디
          이며 발음을 정확하게 개선해야 할 필요가 있어보입니다.  </div>


      </FeedbackBox>
    </>
  )
}

export default Sound