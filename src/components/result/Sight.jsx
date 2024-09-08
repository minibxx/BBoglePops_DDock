import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { postEyeTrackingStop } from '../../apis/interview';
import SightResult from '../../../dist/images/sightResultt.png'
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
          면접자의 시선 분석 결과, 면접관을 잘 응시하며 대화에 집중하는 모습을 보였습니다. 시선 교환이 자연스러워 면접관에게 자신감 있는 인상을 주었습니다. 그러나 일부 순간에는 시선이 허공을 향하거나 집중력이 분산되는 경향이 관찰되었습니다. 이로 인해 긴장하거나 생각에 잠기는 모습으로 비칠 수 있어 주의가 필요합니다. 면접 중에는 시선을 유지하며 적극적인 태도를 지속하는 연습이 도움이 될 것입니다. </div>


      </FeedbackBox>
    </>
  )
}

export default Sight