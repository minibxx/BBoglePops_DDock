import React, { useRef, useState } from 'react';
import styled from 'styled-components'; 
import Video from '../assets/videos/gabin.mp4';
import RandomQ from './RandomQ';
import { postMyJob } from '../apis/interview';


const Gabin = styled.video`
`;

function InterviewPage() {
  const videoRef = useRef();

  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 0.5;
  };

  const [myJobQuestion, setMyJobQuestion] = useState('');
  return (
    <>
    <div className='w-[900px] m-[auto]'>

      <div className='m-[auto] my-[30px]'>
        <Gabin
          muted
          autoPlay
          loop
          ref={videoRef}
          onCanPlay={() => setPlayBackRate()}
        >
          <source src={Video} type="video/mp4" />
        </Gabin>
      </div>
      
      { myJobQuestion &&  <RandomQ myJobQuestion={myJobQuestion}/>}
      
    </div>
    </>
  );
}

export default InterviewPage;
