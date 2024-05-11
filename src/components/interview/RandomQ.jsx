import React from 'react'

function RandomQ({myJobQuestion}) {
  return (
    <>
      <div className='flex flex-row gap-[15px] mt-[15px] ml-[10px] h-[30px]'>
        <div>질문 리스트</div>
        <div 
          className=' whitespace-pre w-[90%] h-[260px] outline-none bg-[#ECECEC] text-[black] p-[10px]' 
        >
          {myJobQuestion.map((item)=>{
            return <div>{item}</div>
          })}
        </div>
      </div>
    </>
  )
}

      export default RandomQ