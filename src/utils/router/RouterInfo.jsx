/* 기본(베이스) 레이아웃 */
import App from '../../App';

/* 로그인 */

/* 서비스 */
import InterviewPage from '@components/interview/InterviewPage';
import Mypage from '@components/mypage/Mypage';
import Result from '@components/result/Result';
import Users from '@components/users/Users';


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
        path: 'mypage',
        element: <Mypage />,
      },
      {
        path: 'users',
        element: <Users />,
      }
    ],
  },
];