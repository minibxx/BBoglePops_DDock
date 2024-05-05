import React from 'react'
import Header from '@components/Header';
import styled from 'styled-components';
import Typo from '@components/Typography'

const Background = styled.div`
position: fixed;
width: 100%;
height: 100vh;     
background-image: linear-gradient(#000,#002A84);
background-repeat : no-repeat;
background-size : cover;
z-index: -2;
`;

const Insert = styled.input`
  width: 362px;
  padding: 20px;
  font-size: 20px;
  height: 60px;
  border: 2px solid white;
  border-radius: 35px;
  background-color: rgb(255,255,255,0.3);
  &::placeholder{
    color:rgb(255,255,255,0.3);
    font-size: 20px;
  }
`;

const AbilityBtn = styled.button`
  text-align: center;
  height: 60px;
  margin: 50px auto 20px auto;
  border: 2px solid white;
  color: white;
  border-radius: 35px;
  padding: 10px 30px;
  &:hover{
    background-color: rgb(255,255,255,0.3);
  }
`;
function InterviewSetting() {
    return (
        <>
            <Background />
            <Header />
            <div className='flex justify-between'>
                <Insert placeholder='희망 분야를 선택해주세요' />
                <Insert placeholder='직무를 선택해주세요' />
            </div>

            <div className='mt-[214px]'>

            </div>
            <div className='mt-[190px] flex justify-between'>
                <AbilityBtn>
                    <Typo title={'문제 해결 능력'} type={'body2'} />
                </AbilityBtn>
                <AbilityBtn>
                    <Typo title={'의사소통 능력'} type={'body2'} />
                </AbilityBtn>
                <AbilityBtn>
                    <Typo title={'성장 가능성 및 개인 발전 의지'} type={'body2'} />
                </AbilityBtn>
                <AbilityBtn>
                    <Typo title={'인성'} type={'body2'} />
                </AbilityBtn>
            </div>
            <label className='item-start text-[white] text-[20px] m-[auto]'>
                <input
                    className='m-[auto] '
                    type="checkbox"
                    // disabled={disabled}
                    // checked={checked}
                    // onChange={({ target: { checked } }) => onChange(checked)}
                />면접 시간 중 녹화된 영상 제공을 희망하십니까?
            </label>
        </>
    )
}

export default InterviewSetting