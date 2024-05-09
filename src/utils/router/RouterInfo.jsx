/* 기본(베이스) 레이아웃 */
import App from '../../App';

/* 로그인 */

/* 서비스 */
import Result from '@components/result/Result';
import Login from '@components/users/Login';
import SignUp from '../../components/users/SignUp';
import InterviewSetting from '../../components/interview/InterviewSetting';
import Criterion from '../../components/criterion/Criterion';
import About from '../../components/About/About';


export const RouterInfo = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App/>,
      },
      {
        path: 'criterion',
        element: <Criterion/>,
      },
      {
        path: 'interview',
        element: <InterviewSetting />,
      },
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: 'users',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'about',
        element: <About/>,
      }
    ],
  },
];