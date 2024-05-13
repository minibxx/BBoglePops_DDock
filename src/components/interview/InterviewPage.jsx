import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'; 
import Video from '@assets/videos/gabin.mp4';
import RandomQ from './RandomQ';
import { useRecoilState } from 'recoil';
import { myJobQuestionAtom } from '@store/atom';


function InterviewPage() {
  const videoRef = useRef();

  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 0.5;
  };
  const [myJobQuestion, setMyJobQuestion] = useRecoilState(myJobQuestionAtom);

  return (
    <>
    <div className='w-[100%]'>
      <div className=''>
        <video
          muted
          autoPlay
          loop
          ref={videoRef}
          onCanPlay={() => setPlayBackRate()}
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      
      { myJobQuestion &&  <RandomQ myJobQuestion={myJobQuestion}/>}
      
    </div>
    </>
  );
}

export default InterviewPage;
