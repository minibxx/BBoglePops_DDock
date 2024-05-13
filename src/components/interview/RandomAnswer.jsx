import React, { useState } from 'react';
import { useSpeechRecognition } from "react-speech-kit";

function RandomAnswer() {
    const [value, setValue] = useState('결과');
    const [isListening, setIsListening] = useState(false);
    
    const { listen, stop } = useSpeechRecognition({
        onResult: result => {
            setValue(result);
        }
    });

    const toggleListen = () => {
        if (isListening) {
            stop();
        } else {
            listen();
        }
        setIsListening(!isListening);
    };

    return (
        <div>
            <h2>음성인식</h2>
      
            <div>{value}</div>
      
            <button onClick={toggleListen}>
      			🎤speech
			</button>

            {isListening && <div>음성인식 중</div>}

            {
                console.log(value)
            }
        </div>
    );
}

export default RandomAnswer;
