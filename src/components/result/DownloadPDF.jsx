import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typo from '@components/Typography'
import { useRecoilState } from 'recoil';
import { myAnalyzeAtom } from '@store/atom';
import AnswerContent from './AnswerContent';
import html2pdf from 'html2pdf.js';
import { useParams } from 'react-router-dom';
import { getMySoundLog } from '../../apis/interview';
import { getMyAnalyze } from '../../apis/interview';

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
const RectBorder2 = styled.div`
    width: 270px;
    margin-bottom: 30px;
    padding-left: 5px;
`;
const testData = {
  "id": 1,
  "question_list_id": 5,
  "pitch_graph": "https://ddok-2.duckdns.org/static/pitch_graph_1.png",
  "intensity_graph": "https://ddok-2.duckdns.org/static/intensity_graph_1.png",
  "pitch_summary": "피치가 일관되게 유지되며 적절한 높낮이를 보여줍니다.",
  "intensity_summary": "강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다. 강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다. 강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다.",
  "created_at": "2024-08-15T09:00:00Z"
}
function DownloadPDF() {
    const [analyze, setAnalyze] = useRecoilState(myAnalyzeAtom);
    const { interviewId } = useParams();
    const userId = localStorage.getItem('userId');
    const [soundLog, setSoundLog] = useState(testData);
    const [analyzeLog, setAnalyzeLog] = useState('');

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
    

    useEffect(() => {
        getMySoundLog(userId, interviewId).then(data => setSoundLog(data));
        getMyAnalyze(userId, interviewId).then(data => setAnalyzeLog(data));
        console.log(analyzeLog);
    }, []);
    return (
        <>
            <div id="pdf-download" className='mt-[50px] bg-[white] rounded-[30px]'>
                <div className='pl-[90px] pt-[50px]'>

                    <Typo title={'[ 내 답변 분석 ]'} type={'body4'} />
                </div>
                {/* {analyzeLog.responses.map((item, i) => {
                    if (item.response) {
                        return (
                            <AnswerContent answerIndex={i} />
                        )
                    }
                })} */}
                {analyzeLog.responses}
                <div className='pl-[90px] py-[50px]'>

                    <Typo title={'[ 내 음성 분석 ]'} type={'body4'} />
                </div>
                <div className='px-[90px]'>

                <RectBorder2>
                    <Typo title={'강도 분석 평가'} type={'body8'} />
                </RectBorder2>
                <div className='text-[25px] mb-[60px]'>
                    {soundLog.intensity_summary}
                </div>
                <RectBorder2>
                    <Typo title={'피치 분석 평가'} type={'body8'} />
                </RectBorder2>
                <div className='text-[25px]'>
                    {soundLog.pitch_summary}
                </div>
                </div>
            </div>
            <PdfBtn onClick={downloadPDF}>결과지 다운로드</PdfBtn>
        </>
    )
}

export default DownloadPDF