import React, { useEffect, useState } from 'react'
import Speech from "speak-tts";
import RandomAnswer from './RandomAnswer';
import useRecord from '../../hooks/useRecord';
import useSTT from '../../hooks/useSTT';
import styled from 'styled-components';
import Mic from '/images/mic.svg'
import Send from '/images/send.svg'
import Sound from '/images/sound.svg'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  bottom: 5%;
  right: 3%;
`;
const Btn = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100px;
  border: 5px solid ${({ isRecorded }) => isRecorded ? '#F43F3F' : 'white'};
  padding: 17px;
`;
const Timer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  top: 0;
  left: 0;
`;
const TimerText = styled.div`
  color: ${({ timerTextColor })=>timerTextColor};
`

const timerSecond = 60;

function RandomQ({ myJobQuestion, myJobQuestionId, onQuestionReaction }) {
  const [questionCount, setQuestionCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isQuestionEnd, setIsQuestionEnd] = useState(true);
  const [timer, setTimer] = useState(timerSecond);
  const [timerInterval, setTimerInterval] = useState();
  const { onRecAudio, offRecAudio, onSubmitAudioFile } = useRecord();
  const { onSTTStart, onSTTEnd, onSubmitResult } = useSTT();
  const [isRecorded, setIsRecorded] = useState(false);

  const speech = new Speech();

  const speechQuestion = () => {
    speech
      .init({
        lang: "ko-KR",
        voice: 'Google 한국의',
        pitch: 0
      })
      .then((data) => {
        speech
          .speak({
            text: myJobQuestion[questionCount],
            listeners: {
              onend: () => { }
            }
          })
          .then(() => {
            console.log("Success !");
            setIsQuestionEnd(true);
          })
          .catch((e) => {
            console.error("An error occurred :", e);
          });
      })
      .catch((e) => {
        // console.error("An error occured while initializing : ", e);
      });

    setIsQuestionEnd(false);
  };

  const startTimer = () => {
    const temp = setInterval(() => {
      setTimer(org => {
        if (org == 0) {
          setIsRecorded(false);
          clearInterval(temp);
          setQuestionCount(org => org + 1);
          return timerSecond;
        }
        return org - 1;
      });
    }, 1000);
    setTimerInterval(temp);
  };

  const onAnswerStart = () => {
    onSTTStart();
    onRecAudio();
    // startTimer();
    setIsRecorded(true);
  };

  const onSubmit = () => {
    console.log('onSubmit');
    onSubmitResult(myJobQuestionId);
  };

  useEffect(() => {
    if (questionCount > 0) {
      onSTTEnd();
      offRecAudio();
      speechQuestion();
    }
  }, [questionCount]);

  useEffect(() => {
    onQuestionReaction(!isQuestionEnd, isRecorded);
  }, [isQuestionEnd, isRecorded])

  return (
    <>
      <Btns>
        {!isStarted &&
          <div
            onClick={() => {
              speechQuestion();
              setIsStarted(true);
            }}
          >
            <Btn className='w-[90%] fill-white' src={Sound} />
          </div>
        }
        <div onClick={onAnswerStart}><Btn src={Mic} isRecorded={isRecorded} /></div>
        <div onClick={onSubmit}><Btn src={Send} /></div>
      </Btns>
      <Timer>
        <div className='m-[35px] text-[40px] text-[white] font-bold'>
          <CountdownCircleTimer
            isPlaying={isRecorded}
            duration={timerSecond}
            colors={['#FFFFFF','#FFFFFF', '#F7B801', '#FFA500', '#F43F3F', '#FFFFFF']}
            colorsTime={[60, 40, 30, 15, 1, 0]}
            key={questionCount}
            strokeWidth={8}
            size={140}
            isSmoothColorTransition={true}
            onComplete={() => {
              setIsRecorded(false);
              setQuestionCount(org => org + 1);
            }}
          >
            {({ remainingTime, color }) => 
              <TimerText timerTextColor={color}>
                {remainingTime}
              </TimerText>
            }
          </CountdownCircleTimer>
        </div>
      </Timer>
      <div
        className='hidden whitespace-pre w-[90%] h-[260px] outline-none bg-[#ECECEC] text-[black] p-[10px]'
      >
        {myJobQuestion.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
}

export default RandomQ;
