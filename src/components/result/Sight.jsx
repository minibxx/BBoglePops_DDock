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
    <div className='text-[white]'>Sight</div>
  )
}

export default Sight