import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Typo from '@components/Typography'
import AnswerFeedback from './AnswerFeedback';
import { useRecoilState } from 'recoil';
import { myAnalyzeAtom } from '@store/atom';
import AnswerContent from './AnswerContent';
import html2pdf from 'html2pdf.js';

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

const PdfContent = styled.div`
    font-size: 12px; 
    line-height: 1.5;
`;

function DownloadPDF() {
    const [analyze, setAnalyze] = useRecoilState(myAnalyzeAtom);

    const downloadPDF = () => {
        const element = document.getElementById("pdf-download"); // PDF로 변환할 요소 선택
        element.style.transform = "scale(0.65)";
        element.style.transformOrigin = "top left";
        html2pdf(element, {
            filename: "file.pdf", // default : file.pdf
            html2canvas: { scale: 2 }, // 캡처한 이미지의 크기를 조절, 값이 클수록 더 선명하다.
            jsPDF: {
                format: "a4",  // 종이 크기 형식
                orientation: "portrait", // or landscape : 가로
            },
            callback: () => {
                console.log("PDF 다운로드 완료");
            },
        });
    };
    return (
        <>
            <PdfContent id="pdf-download" className='mt-[50px]'>
            {analyze.responses.map((item, i) => {
                if (item.response) {
                    return (
                        <AnswerContent answerIndex={i} />
                    )
                }
            })}
            </PdfContent>
            <PdfBtn onClick={downloadPDF}>결과지 다운로드</PdfBtn>
        </>
    )
}

export default DownloadPDF