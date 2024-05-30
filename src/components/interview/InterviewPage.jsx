import React, { useState } from 'react';
import RandomQ from './RandomQ';
import { useRecoilState } from 'recoil';
import { myJobQuestionAtom, myJobQuestionIdAtom } from '@store/atom';
import InterviewVideo from './InterviewVideo';


function InterviewPage() {
  
  const [myJobQuestion, setMyJobQuestion] = useRecoilState(myJobQuestionAtom);
  const [myJobQuestionId, setMyJobQuestionId] = useRecoilState(myJobQuestionIdAtom);
  const [videoStatus, setVideoStatus] = useState('Idle');

  const onQuestionReaction = (isSpeaking, isRecorded) => {
    if (isSpeaking) {
      setVideoStatus('Speaking')
    } else if (!isSpeaking && !isRecorded) {
      setVideoStatus('Idle');
    } else if (!isSpeaking && isRecorded) {
      setVideoStatus('Nodding')
    }
  }

  return (
    <>
      <div className='w-[100%] relative'>
        <InterviewVideo videoStatus={'Speaking'} isDisplay={videoStatus === 'Speaking'}/>
        <InterviewVideo videoStatus={'Idle'} isDisplay={videoStatus === 'Idle'}/>
        <InterviewVideo videoStatus={'Nodding'} isDisplay={videoStatus === 'Nodding'}/>

        {myJobQuestion && <RandomQ myJobQuestion={myJobQuestion} myJobQuestionId={myJobQuestionId} onQuestionReaction={onQuestionReaction} />}

      </div>
    </>
  );
}

export default InterviewPage;
