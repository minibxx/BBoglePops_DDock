import React from 'react'

function RandomQ({myJobQuestion}) {
  return (
    <>
      <div className='flex flex-row gap-[15px] mt-[15px] ml-[10px] h-[30px]'>
        <div>질문 리스트</div>
        <div 
          className=' w-[85%] h-[200px] outline-none bg-[#ECECEC] text-[black]' 
        >
          {myJobQuestion}
        </div>
      </div>
    </>
  )
}

      export default RandomQ