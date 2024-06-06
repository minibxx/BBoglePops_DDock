import React from 'react'
import { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
    transform: scaleX(-1);
`

function InterviewRecord() {
    const videoRef = useRef(null);
    const mediaRecorder = useRef(null);
    const canvas = useRef(null);
    const videoChunks = useRef([]);
  
    const getMediaPermission = useCallback(async () => {
      try {
        const audioConstraints = { audio: true };
        const videoConstraints = {
          audio: false,
          video: true,
        };
  
        const audioStream = await navigator.mediaDevices.getUserMedia(
            audioConstraints
        );
        const videoStream = await navigator.mediaDevices.getUserMedia(
            videoConstraints
        );
  
        if (videoRef.current) {
            videoRef.current.srcObject = videoStream;
        }
        
  
        // MediaRecorder 추가
        const combinedStream = new MediaStream([
            ...videoStream.getVideoTracks(),
          ...audioStream.getAudioTracks(),
        ]);
  
        const recorder = new MediaRecorder(combinedStream, {
            mimeType: 'video/webm',
        });
  
        recorder.ondataavailable = (e) => {
            if (typeof e.data === 'undefined') return;
          if (e.data.size === 0) return;
          videoChunks.current.push(e.data);
        };
  
        mediaRecorder.current = recorder;
      } catch (err) {
        console.log(err);
      }
    }, []);
  
    useEffect(() => {
      getMediaPermission();
    }, []);
  
    const downloadVideo = () => {
    //   const videoBlob = await EncodingWebmToMp4(new Blob(videoChunks.current, { type: 'video/webm' }), '123123123');
      const videoBlob = new Blob(videoChunks.current, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(videoBlob);
      const link = document.createElement('a');
      link.download = `My video - .webm`;
      link.href = videoUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div>
        <StyledVideo ref={videoRef} autoPlay />
        <canvas ref={canvas} style={{display: 'none'}}/>
        <button
          onClick={() => mediaRecorder.current?.start()}
        >
          Start Recording
        </button>
        <button
          onClick={() => mediaRecorder.current?.stop()}
        >
          Stop Recording
        </button>
        <button onClick={downloadVideo}>Download</button>
      </div>
    );
  }

export default InterviewRecord