/* 기본(베이스) 레이아웃 */
import App from '../../App';

/* 로그인 */

/* 서비스 */
import InterviewPage from '../../components/InterviewPage';


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
      }
    ],
  },
];