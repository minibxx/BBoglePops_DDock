import { useEffect, useRef, useCallback } from 'react';
import { getSignedUrl, postMyAnswerVideo, putInterviewVideo } from '../apis/interview';

const useVideoRecord = () => {
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

      // const audioStream = await navigator.mediaDevices.getUserMedia(
      //     audioConstraints
      // );
      const videoStream = await navigator.mediaDevices.getUserMedia(
          videoConstraints
      );

      if (videoRef.current) {
          videoRef.current.srcObject = videoStream;
      }
      

      // MediaRecorder 추가
      const combinedStream = new MediaStream([
          ...videoStream.getVideoTracks(),
        // ...audioStream.getAudioTracks(),
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

  const startRecording = () => {
      mediaRecorder.current?.start();
  }

  const stopRecording = () => {
      mediaRecorder.current?.stop();
  }

  useEffect(() => {
    getMediaPermission();
  }, []);

  const onSubmitVideo = (questionId, interviewId, userId) => {
    const videoBlob = new Blob(videoChunks.current, { type: 'video/webm' });
    const videoUrl = URL.createObjectURL(videoBlob);
    const videoFile = new File([videoUrl], 'input.webm');
    let formData = new FormData();
    formData.append('file', videoFile);
    formData.append('user_id', userId);
    formData.append('question_id', questionId);
    formData.append('interviewId', interviewId);
    // postMyAnswerVideo(formData).then(data => console.log(data));
    getSignedUrl(userId, interviewId, `${interviewId}.webm`, 'video/webm')
    .then(data => {
      console.log(data)
      const { signed_url } = data;
      putInterviewVideo(signed_url, videoFile);
    });
    
    const link = document.createElement('a');
    link.download = `My video - .webm`;
    link.href = videoUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { videoRef, startRecording, stopRecording, onSubmitVideo }
}

export default useVideoRecord