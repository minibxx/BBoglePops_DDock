import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { postEyeTrackingStop } from '../../apis/interview';
import SightResult from '../../../dist/images/sightResult.png'
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
function Sight() {
  const { interviewId } = useParams();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    postEyeTrackingStop(userId, interviewId).then(data => console.log(data));
  }, []);

  return (
    <>
      <img src={SightResult} className='w-[100%] p-[5%]' />

      <FeedbackBox>
        <RectBorder2>
          <Typo title={'시선 분석 총평'} type={'body8'} />
        </RectBorder2>
          <div className='text-[white] text-[25px]'>
            가상 면접관의 얼굴 부분을 쳐다본 횟수가 가장 많습니다. 전체적으로 시선 처리가 매우 훌륭한 편
            입니다. 다만, 배경으로 시선이 쏠리는 경우가 있어 그 부분은 앞으로 조금 더 유의하면 좋을 것 같습니다. </div>


      </FeedbackBox>
    </>
  )
}

export default Sight