import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { postEyeTrackingStop } from '../../apis/interview';
import SightResult from '/images/soundResultt.png'
import styled from 'styled-components';
import Typo from '@components/Typography';
import { getMySoundLog } from '../../apis/interview';

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
    marign-bottom: 30px;
`;

function Sound() {
  const { interviewId } = useParams();
  const userId = localStorage.getItem('userId');
  const [soundLog, setSoundLog] = useState({
    "pitch_graph": "",
    "intensity_graph": "",
    "pitch_summary": "",
    "intensity_summary": "",
  });

  useEffect(() => {
    getMySoundLog(userId, interviewId).then(data => setSoundLog(data));
  }, []);


  return (
    <>
      <img src={SightResult} className='w-[100%] p-[5%]' />
      {/* <div className='text-[white] text-[20px]'>마이크와의 거리에 따라 검사 결과가 상이할 수 있습니다. </div> */}
      {soundLog.intensity_graph && (
        <img
          src={`${soundLog.intensity_graph}`}
          className='w-[100%] p-[5%]'
        />
      )}
      {soundLog.pitch_graph && (
        <img
          src={`${soundLog.pitch_graph}`}
          className='w-[100%] p-[5%]'
        />
      )}
      <FeedbackBox>
        <RectBorder2>
          <Typo title={'강도 분석 평가'} type={'body8'} />
        </RectBorder2>
        <div className='text-[white] text-[25px] mb-[60px]'>
          {soundLog.intensity_summary}
          {/* 피치가 일관되게 유지되며 적절한 높낮이를 보여줍니다. */}
        </div>
        <RectBorder2>
          <Typo title={'피치 분석 평가'} type={'body8'} />
        </RectBorder2>
        <div className='text-[white] text-[25px]'>
          {soundLog.pitch_summary}
          {/* 강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다. 강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다. */}
        </div>
      </FeedbackBox>
      <div>
      </div>
    </>
  )
}

export default Sound