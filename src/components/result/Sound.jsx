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
// const testData = {
//   "id": 1,
//   "question_list_id": 5,
//   "pitch_graph": "https://ddok-2.duckdns.org/static/pitch_graph_1.png",
//   "intensity_graph": "https://ddok-2.duckdns.org/static/intensity_graph_1.png",
//   "pitch_summary": "피치가 일관되게 유지되며 적절한 높낮이를 보여줍니다.",
//   "intensity_summary": "강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다. 강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다. 강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다.",
//   "created_at": "2024-08-15T09:00:00Z"
// }

function Sound() {
  const { interviewId } = useParams();
  const userId = localStorage.getItem('userId');
  const [soundLog, setSoundLog] = useState('');

  useEffect(() => {
    getMySoundLog(userId, interviewId).then(data => setSoundLog(data));
  }, []);


  return (
    <>
      <img src={SightResult} className='w-[100%] p-[5%]' />
      {/* <div className='text-[white] text-[20px]'>마이크와의 거리에 따라 검사 결과가 상이할 수 있습니다. </div> */}

      <FeedbackBox>
        <RectBorder2>
          <Typo title={'강도 분석 평가'} type={'body8'} />
        </RectBorder2>
        <div className='text-[white] text-[25px] mb-[60px]'>
          {/* 면접자의 음성 분석 결과, 말 빠르기는 적당하여 듣기에 무리가 없었습니다. 목소리가 다소 큰 편입니다. 조금만 더 부드럽고 차분하게 말하면 좋을 것 같습니다. 면접관에게 강한 인상을 주는 것도 좋지만, 너무 큰 목소리는 오히려 부담을 줄 수 있습니다. 말씀하시는 속도가 조금 빠른 편입니다. 천천히 말하면 면접관이 더 잘 이해할 수 있고, 자신감 있는 모습을 보일 수 있습니다. 천천히 말하는 연습을 통해 전달력을 높여 보세요.  */}
          {soundLog.intensity_summary}
        </div>
        <RectBorder2>
          <Typo title={'피치 분석 평가'} type={'body8'} />
        </RectBorder2>
        <div className='text-[white] text-[25px]'>
          {soundLog.pitch_summary}
        </div>
      </FeedbackBox>
      <div>
      </div>
    </>
  )
}

export default Sound