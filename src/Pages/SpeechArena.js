import React, { useState } from 'react';
import Navbar from '../Components/NavbarComponent';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import MicOffIcon from '@mui/icons-material/MicOff';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const SpeechArena= () => {
  const [text, setText] = useState('');
  const [isCopied, setCopied] = useState(false);

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const handleCopy = () => {
    setText(transcript);
    setCopied(true);
  };

  const handleReset = () => {
    resetTranscript();
    setCopied(false); 
  };

  return (
    <>
      <Navbar/> 
      <div className='h-screen flex flex-col justify-center bg-gray-100 '>
        <div className='w-full flex justify-center'>
          <p onClick={() => setText(transcript)} className='p-5 h-auto w-1/2 m-0 mb-10 text-green-800 text-md font-semibold border-2 border-double rounded-lg  border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            {transcript}
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center content-center self-center p-10'>
          <CopyToClipboard text={text} onCopy={handleCopy}>
              <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  shadow-cyan-500/50   dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm py-2.5 text-center me-2 mb-2 px-5'>
              <ContentCopyIcon/>
              {isCopied ? 'Copied!' : 'Copy to clipboard'}
            </button>
          </CopyToClipboard>

          <button onClick={startListening} className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br    dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm py-2.5 text-center me-2 mb-2 px-5'>
            <GraphicEqIcon/>
            Start Recording
          </button>

          <button onClick={SpeechRecognition.stopListening} className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl `font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            <MicOffIcon/>
            Stop Recording
          </button>

          <button onClick={handleReset} className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>
            <RestartAltIcon/>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default SpeechArena;