/* 기본(베이스) 레이아웃 */
import App from '../../App';

/* 로그인 */

/* 서비스 */
import InterviewPage from '@components/interview/InterviewPage';
import Result from '@components/result/Result';
import Login from '@components/users/Login';


export const RouterInfo = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App/>,
      },
      {
        path: 'Interview',
        element: <InterviewPage />,
      },
      {
        path: 'result',
        element: <Result />,
      },
      {
        path: 'users',
        element: <Login />,
      }
    ],
  },
];