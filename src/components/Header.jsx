import React from 'react'

function Header() {
  return (
    <>
    <div className='flex flex-row justify-between'>
        <div>Header</div>
        <ul className='flex flex-row gap-[30px]'>
            <li>면접 진행</li>
            <li>면접 결과 확인</li>
            <li>마이페이지</li>
        </ul>
        <button>로그인</button>
    </div>
    </>
  )
}

export default Header