import React from 'react'
import Typo from '@components/Typography'
import { styled } from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const LoginBtn = styled.button`
  border: 2px solid white;
  color: white;
  border-radius: 15px;
  padding: 2px 15px;
  &:hover{
    background-color: rgb(255,255,255,0.3);
  }
`;
const Container = styled.div`
  position: relative;
  height: 3.125rem;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #000;
  
  .inactive {
    opacity: 0.7;
  }

  .active {
    opacity: 1;
  }
`;
function Header() {
  const location = useLocation();

  return (
    <>
      <Container className='flex fixed flex-row justify-between text-white'>
       
        <NavLink
            to={`/`}
            className={({ isActive }) =>
              isActive || location.pathname === `/` 
            }
          >
             <div>Header</div>
          </NavLink>
        <ul className='flex flex-row gap-[30px]'>
          <NavLink
            to={`/interview`}
            className={({ isActive }) =>
              isActive || location.pathname === `/interview` ? 'active' : 'inactive'
            }
          >
            <li><Typo title={'면접 연습'} type={'heading1'} /></li>
          </NavLink>

          <NavLink
            to={`/criterion`}
            className={({ isActive }) =>
              isActive || location.pathname === `/criterion` ? 'active' : 'inactive'
            }
          >
            <li><Typo title={'평가 기준'} type={'heading1'} /></li>
          </NavLink>
          
          <NavLink
            to={`/result`}
            className={({ isActive }) =>
              isActive || location.pathname === `/result` ? 'active' : 'inactive'
            }
          >
            <li><Typo title={'면접 기록'} type={'heading1'} /></li>
          </NavLink>

          <NavLink
            to={`/about`}
            className={({ isActive }) =>
              isActive || location.pathname === `/about` ? 'active' : 'inactive'
            }
          >
            <li><Typo title={'팀원 소개'} type={'heading1'} /></li>
          </NavLink>
        </ul>
        <LoginBtn><Typo title={'로그인'} type={'heading1'} /></LoginBtn>
      </Container>
    </>
  )
}

export default Header