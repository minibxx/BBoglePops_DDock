import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { postEyeTrackingStop } from '../../apis/interview';

function Sight() {
  const { interviewId } = useParams();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    postEyeTrackingStop(userId, interviewId).then(data => console.log(data));
  }, []);

  return (
    <div className='text-[white]'>
      가상 면접관의 얼굴 부분을 쳐다본 횟수가 가장 많습니다. 전체적으로 시선 처리가 매우 훌륭한 편
    입니다. 다만, 배경으로 시선이 쏠리는 경우가 있어 그 부분은 앞으로 조금 더 유의하면 좋을 것 같습니다. </div>
  )
}

export default Sight