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
import SoundResult from '/images/soundResultt.png';
import SightResult from '/images/sightResultt.png';

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

const DivFlex = styled.div`
    display: flex;
`;

const RectBorder2 = styled.div`
    width: 270px;
    margin-bottom: 30px;
`;
// const testData = {
//     "id": 1,
//     "question_list_id": 5,
//     "pitch_graph": "https://ddok-2.duckdns.org/static/pitch_graph_1.png",
//     "intensity_graph": "https://ddok-2.duckdns.org/static/intensity_graph_1.png",
//     "pitch_summary": "피치가 일관되게 유지되며 적절한 높낮이를 보여줍니다.",
//     "intensity_summary": "강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다. 강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다. 강도가 일부 섹션에서 불규칙함을 보이나 전반적으로 안정적입니다.",
//     "created_at": "2024-08-15T09:00:00Z"
// }
function DownloadPDF() {
    const [analyze, setAnalyze] = useRecoilState(myAnalyzeAtom);
    const { interviewId } = useParams();
    const userId = localStorage.getItem('userId');
    const myJobQuestionAtom = localStorage.getItem('myJobQuestionAtom');
    const [soundLog, setSoundLog] = useState('');
    const [analyzeLog, setAnalyzeLog] = useState('');

    const downloadPDF = () => {
        const element = document.getElementById("pdf-download"); // PDF로 변환할 요소 선택
        // element.style.transform = "scale(0.65)";
        element.style.transformOrigin = "top left";
        html2pdf(element, {
            filename: "file.pdf", // default : file.pdf
            html2canvas: { scale: 2, useCORS: true }, // 캡처한 이미지의 크기를 조절, 값이 클수록 더 선명하다.
            image: { type: 'jpeg', quality: 0.50 },
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

    useEffect(() => {
        console.log(analyzeLog);
    }, [analyzeLog]);
    return (
        <>
            <div className='h-[40px] bg-[white] mt-[50px]'></div>
            <div id="pdf-download" className=' bg-[white] '>
                <div className='pl-[40px] '>
                    <Typo title={'[ 내 답변 분석 ]'} type={'body8'} />
                </div>
                {analyzeLog && analyzeLog.responses.map((item, i) => {
                    if (item.response) {
                        return (
                            <>
                                <div key={i} className='text-[18px] mt-[30px] mb-[30px] px-[40px]'>
                                    <Typo title={`${i + 1}번째 질문`} type={'small2'} />
                                    <p className='mt-[10px]'>{item.response}</p>
                                </div>
                            </>
                        )
                    }
                })}
                <div className='pl-[40px] pt-[30px]'>
                    <Typo title={'[ 내 음성 분석 ]'} type={'body8'} />
                </div>
                <DivFlex>
                    {soundLog.intensity_graph && (
                        <img
                            src={`http://127.0.0.1:8000${soundLog.intensity_graph}`}
                            className='w-[48%] py-[5%]'
                        />
                    )}
                    {soundLog.pitch_graph && (
                        <img
                            src={`http://127.0.0.1:8000${soundLog.pitch_graph}`}
                            className='w-[48%] py-[5%]'
                        />
                    )}
                </DivFlex>
                <DivFlex>

                    <div className='px-[40px]'>
                        <RectBorder2>
                            <Typo title={'강도 분석 평가'} type={'small2'} />
                        </RectBorder2>
                        <div className='text-[15px] mb-[60px]'>
                            {soundLog.intensity_summary}
                        </div>
                    </div>
                    <div className='pr-[40px]'>
                        <RectBorder2>
                            <Typo title={'피치 분석 평가'} type={'small2'} />
                        </RectBorder2>
                        <div className='text-[15px]'>
                            {soundLog.pitch_summary}
                        </div>
                    </div>
                </DivFlex>
                <div className='pl-[40px] py-[30px]'>
                    <Typo title={'[ 내 시선 분석 ]'} type={'body8'} />
                </div>
                <DivFlex>
                    <img src={SightResult} className='w-[40%] pl-[5%]' />
                    <div className='px-[40px] py-[20px]'>
                        <RectBorder2>
                            <Typo title={'시선 분석 평가'} type={'small2'} />
                        </RectBorder2>
                        <div className='text-[15px] mb-[60px]'>
                            {soundLog.intensity_summary}
                            가상 면접관의 얼굴을 쳐다본 횟수가 가장 많습니다. 전체적으로 시선 처리가 매우 훌륭한 편
                            입니다. 다만, 면접관 주변의 배경으로 시선이 분산되는 경우가 있습니다. 이 부분은 앞으로 조금 더
                            유의하면 좋을 것 같습니다.
                        </div>

                    </div>
                </DivFlex>

            </div>
            <div className='h-[40px] bg-[white]'></div>
            <PdfBtn onClick={downloadPDF}>결과지 다운로드</PdfBtn>
        </>
    )
}

export default DownloadPDF