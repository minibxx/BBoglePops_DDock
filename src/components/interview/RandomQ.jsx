import React, { useEffect } from 'react'
import Speech from "speak-tts";
import RandomAnswer from './RandomAnswer';

function RandomQ({ myJobQuestion }) {
  useEffect(() => {
    var voices = window.speechSynthesis.getVoices();
    // console.log(voices.filter(item => item.lang == 'ko-KR'))
    console.log(voices.filter(item => item.lang == 'ko-KR'))
  }, [])
  const speech = new Speech();
  speech
    .init({
      lang: "ko-KR",
      voice: 'Google 한국의',
      pitch: 0
    })
    .then((data) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log("Speech is ready, voices are available", data);
    })
    .catch((e) => {
      console.error("An error occured while initializing : ", e);
    });

  const handleClick = () => {
    speech
      .speak({
        text: myJobQuestion[0]
      })
      .then(() => {
        console.log("Success !");
      })
      .catch((e) => {
        console.error("An error occurred :", e);
      });
  };

  return (
    <>
      <div className='flex flex-row gap-[15px] mt-[15px] ml-[10px] h-[30px] '>
        <div>질문 리스트</div>
        <div
          className=' whitespace-pre w-[90%] h-[260px] outline-none bg-[#ECECEC] text-[black] p-[10px]'
        >
          {myJobQuestion.map((item) => {
            return <div>{item}</div>
          })}
        </div>
      </div>
      <button onClick={handleClick}>질문듣기</button>
      <RandomAnswer/>
    </>
  )
}

export default RandomQ