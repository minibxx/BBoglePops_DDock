import './App.css'
import React, { useRef, useState } from 'react';
import axios from 'axios';
import Main from '@components/main/Main.jsx'
import Users from './components/users/Login';

function App() {
  const worker = new Worker(new URL('./worker.js', import.meta.url))
  return (
    <>
      <Main/>
    </>
  )
}

export default App
