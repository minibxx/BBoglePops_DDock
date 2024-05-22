import React, { useEffect, useState } from 'react'
import Speech from "speak-tts";
import RandomAnswer from './RandomAnswer';
import useRecord from '../../hooks/useRecord';
import useSTT from '../../hooks/useSTT';
import styled from 'styled-components';
import Mic from '/images/mic.svg'
import Send from '/images/send.svg'
import Sound from '/images/sound.svg'

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  bottom:5%; right:3%;
`;
const Btn = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100px;
  border:  3px solid ${({isRecorded}) => isRecorded ? 'red' : 'white'};
  padding: 17px;
`;
const Timer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  top: 0; left:0;
`;

const timerSecond = 6;

function RandomQ({ myJobQuestion, myJobQuestionId }) {
  const [questionCount, setQuestionCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isQuestionEnd, setIsQuestionEnd] = useState(true);
  const [timer, setTimer] = useState(timerSecond);
  const [timerInterval, setTimerInterval] = useState();
  const { onRecAudio, offRecAudio, onSubmitAudioFile } = useRecord();
  const { onSTTStart, onSTTEnd, onSubmitResult } = useSTT();
  const [isRecorded, setIsRecorded] = useState(false);

  // useEffect(() => {
  //   var voices = window.speechSynthesis.getVoices();
  //   // console.log(voices.filter(item => item.lang == 'ko-KR'))
  //   console.log(voices.filter(item => item.lang == 'ko-KR'))
  // }, [])
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
        // console.log('timer :', timer)
        if (org == 0) {
          //답변종료 -> 녹음완료, stt 완료
          clearInterval(temp);
          setQuestionCount(org => org + 1)
          setIsRecorded(false)
          return timerSecond;
        }
        return org - 1;
      })
    }, 1000);
  }

  const onAnswerStart = () => {
    onSTTStart();
    onRecAudio();
    startTimer();
    setIsRecorded(true)
  }

  const onSubmit = () => {
    console.log('onSubmit')
    onSubmitResult(myJobQuestionId);
  }

  useEffect(() => {
    if (questionCount > 0) {
      onSTTEnd();
      offRecAudio();
      speechQuestion()
    }
  }, [questionCount])

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
            <Btn className='w-[90%] fill-white' src={Sound}/>
          </div>
        }
        <div onClick={onAnswerStart} ><Btn src={Mic} isRecorded={isRecorded}/></div>
        <div onClick={onSubmit} ><Btn src={Send}/></div>
      </Btns>
      <Timer>
        <div className='w-[150px] h-[50px] bg-[lightpink]'>{timer}</div>
      </Timer>
      <div
        className='hidden whitespace-pre w-[90%] h-[260px] outline-none bg-[#ECECEC] text-[black] p-[10px]'
      >
        {myJobQuestion.map((item) => {
          return <div>{item}</div>
        })}
      </div>

    </>
  )
}

export default RandomQ