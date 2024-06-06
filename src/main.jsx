import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import Result from '@components/result/Result';
import Login from '@components/users/Login';
import SignUp from '@components/users/SignUp';
import InterviewSetting from '@components/interview/InterviewSetting';
import Criterion from '@components/criterion/Criterion';
import About from '@components/about/About';
import InterviewPage from '@components/interview/InterviewPage';
import ResultList from '@components/resultList/ResultList';
import InterviewRecord from '@components/interview/InterviewRecord';
import App from './App';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   }
// ], {basename: import.meta.env.BASE_URL});

// console.log('router created: ', router)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/criterion' element={<Criterion/>} />
          <Route path='/interview' element={<InterviewSetting />} />
          <Route path='/result/:interviewId' element={<Result />} />
          <Route path='/list' element={<ResultList />} />
          <Route path='/users' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<About/>} />
          <Route path='/interview/start' element={<InterviewPage />} />
          <Route path='/interview/record' element={<InterviewRecord />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

console.log('App rendered:', import.meta.env.BASE_URL);
