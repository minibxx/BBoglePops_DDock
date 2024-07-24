import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Typo from '@components/Typography'
import AnswerFeedback from './AnswerFeedback';
import { useRecoilState } from 'recoil';
import { myAnalyzeAtom } from '@store/atom';
import reactStringReplace from 'react-string-replace';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './swiperstyle.css';
import AnswerContent from './AnswerContent';
import html2pdf from 'html2pdf.js';

const RectBorder = styled.div`
    border: 2px solid black;
    margin: 20px 0;
    width: 110px;
    padding-left: 10px;
`;

const RedSpan = styled.span`
    color: #FF5A5A;
`;

const BlueSpan = styled.span`
    color: #5A8EFF;
`;

const RectBorder2 = styled.div`
    width: 210px;
    margin-bottom: 30px;
    padding-left: 10px;
    background-color: white;
    color: black;
`;
const FeedbackDetailBoxs = styled.div`
    font-size: 22px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    `;
const FeedbackBox = styled.div`
    padding: 60px ;
    border-radius: 40px;
    border: 2px solid white;
    color: white;
    margin-top: 50px;
`;
const FeedbackDetailBox = styled.div`
    box-shadow: 0 0 10px white;
    border-radius: 10px;
    padding: 30px;
    white-space: pre-wrap;
`;
const PdfBtn = styled.div`
    width: 250px;
    font-size: 20px;
    font-weight: 700;
    border: 2px solid white;
    padding: 5px;
    text-align: center;
    border-radius: 35px;
    background-color: #fff;
    cursor: pointer;
    margin: 50px auto;
`;
function Answer({}) {
    const [analyze, setAnalyze] = useRecoilState(myAnalyzeAtom);
    const downloadPDF = () => {
        const element = document.getElementById("pdf-download"); // PDF로 변환할 요소 선택
        html2pdf(element, {
          filename: "file.pdf", // default : file.pdf
          html2canvas: { scale: 2 }, // 캡처한 이미지의 크기를 조절, 값이 클수록 더 선명하다.
          jsPDF: { 
            format: "b4",  // 종이 크기 형식
            orientation: "portrait", // or landscape : 가로
          },
          callback: () => {
            console.log("PDF 다운로드 완료");
          },
        });
      };
    return (
        <>
            <Swiper 
                id="pdf-download" 
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {analyze.responses.map((item, i) => {
                    if (item.response) {
                        return (
                            <SwiperSlide key={i}>
                                <AnswerContent answerIndex={i} />
                            </SwiperSlide>
                        )
                    }
                })}

            </Swiper>
            <AnswerFeedback />
            <PdfBtn onClick={downloadPDF}>결과지 다운로드</PdfBtn>
        </>
    )
}

export default Answer