import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Video from '@assets/videos/2_2.mp4';
import RandomQ from './RandomQ';
import { useRecoilState } from 'recoil';
import { myJobQuestionAtom, myJobQuestionIdAtom } from '@store/atom';


function InterviewPage() {
  const videoRef = useRef();

  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 0.5;
  };
  const [myJobQuestion, setMyJobQuestion] = useRecoilState(myJobQuestionAtom);
  const [myJobQuestionId, setMyJobQuestionId] = useRecoilState(myJobQuestionIdAtom);

  return (
    <>
      <div className='w-[100%] relative'>
        <video
          muted
          autoPlay
          loop
          ref={videoRef}
          onCanPlay={() => setPlayBackRate()}
          className='w-[100vw]'
        >
          <source src={Video} type="video/mp4" />
        </video>

        {myJobQuestion && <RandomQ myJobQuestion={myJobQuestion} myJobQuestionId={myJobQuestionId} />}

      </div>
    </>
  );
}

export default InterviewPage;
