import React, { useEffect, useState } from 'react'
import Speech from "speak-tts";
import RandomAnswer from './RandomAnswer';
import useRecord from '../../hooks/useRecord';

const timerSecond = 6;

function RandomQ({ myJobQuestion, myJobQuestionId }) {
  const [questionCount, setQuestionCount]  = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isQuestionEnd, setIsQuestionEnd] = useState(true);
  const [timer, setTimer] = useState(timerSecond);
  const [timerInterval, setTimerInterval] = useState();
  const { onRecAudio, offRecAudio, onSubmitAudioFile } = useRecord();


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
            onend: () => {}
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
          return timerSecond;
        }
        return org - 1;
      })
    }, 1000);
  }

  const onAnswerStart = () => {
    onRecAudio();
    startTimer();
  }

  const onSubmit = () => {
    onSubmitAudioFile(myJobQuestionId);
  }

  useEffect(() => {
    if (questionCount > 0) {
      offRecAudio();
      speechQuestion()
    }
  }, [questionCount])

  return (
    <>
      <div className='flex flex-col gap-[15px] mt-[15px] ml-[10px] '>
        <button className='w-[150px] h-[100px] bg-[lightblue]' onClick={speechQuestion}>면접 시작하기</button>
        <button className='w-[150px] h-[100px] bg-[yellowgreen]' onClick={onAnswerStart} >답변 시작하기</button>
        <button className='w-[150px] h-[100px] bg-[orange]' onClick={onSubmit} >제출하기</button>
        <div className='w-[150px] h-[50px] bg-[lightpink]'>{timer}</div>
        <div>질문 리스트</div>
        <div
          className=' whitespace-pre w-[90%] h-[260px] outline-none bg-[#ECECEC] text-[black] p-[10px]'
        >
          {myJobQuestion.map((item) => {
            return <div>{item}</div>
          })}
        </div>
      </div>
      
      <RandomAnswer/>
    </>
  )
}

export default RandomQ