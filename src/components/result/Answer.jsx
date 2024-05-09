import React from 'react'
import styled from 'styled-components';
import Typo from '@components/Typography'

const RectBorder = styled.div`
    border: 2px solid black;
    margin: 20px 0;
    width: 110px;
    padding-left: 10px;
`;

function Answer() {
  return (
    <>
        <div className='p-[50px] bg-white rounded-[40px]'>
            <div>
                <Typo title={'Q. 1번 질문 내용'} type={'body7'} />

            </div>
            <RectBorder>
                <Typo title={'답변 내용'} type={'body8'} />
            </RectBorder>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis<br/>
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br/>
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br/>
            officia deserunt mollit anim id est laborum.
            </div>
        </div>
    </>
  )
}

export default Answer