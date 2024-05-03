import React from 'react'
import Header from '@components/Header';
import styled from 'styled-components';

const Background = styled.div`
position: fixed;
width: 100%;
height: 100vh;     
background-image: linear-gradient(#000,#002A84);
background-repeat : no-repeat;
background-size : cover;
z-index: -2;
`;

function Users() {
  return (
    <>
      <Background/>
        <Header/>
        
    </>
  )
}

export default Users