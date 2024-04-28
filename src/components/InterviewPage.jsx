import React, { useRef, useState } from 'react';
import styled from 'styled-components'; 
import Video from '../assets/videos/gabin.mp4';
import RandomQ from './RandomQ';
import { postMyJob } from '../apis/interview';

const SaveButton = styled.button`
  border-radius: 50px;
  display: flex;
  border: 1px solid white;
  font-size: 15px;
  gap: 10px;
  height: 30px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-left: 35px;
`;
const Gabin = styled.video`
`;

function InterviewPage() {
  const videoRef = useRef();

  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 0.5;
  };

  const [myPart, setMyPart] = useState('');
  const [myJob, setMyJob] = useState('');
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
      <div className='flex flex-row gap-[10px] mt-[10px] ml-[10px] h-[30px]'>
        <div>희망 분야</div>
        <input value={myPart} 
          onChange={(e)=>{
            setMyPart(e.target.value);
          }} 
          className='h-[30px] outline-none mr-[20px] ml-[18px]'/>
        <div>담당 직무</div>
        <input value={myJob} 
          onChange={(e)=>{
            setMyJob(e.target.value);
          }} className='h-[30px] outline-none  ml-[18px]'/>
        <SaveButton
          onClick={() => 
            postMyJob(myPart, myJob).then(data => {
              setMyJobQuestion(data.choices[0].message.content)
            })
          }
        >
          전송</SaveButton>
      </div>
      { myJobQuestion &&  <RandomQ myJobQuestion={myJobQuestion}/>}
      
    </div>
    </>
  );
}

export default InterviewPage;
