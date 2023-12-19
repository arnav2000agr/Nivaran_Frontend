import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import MicOffIcon from '@mui/icons-material/MicOff';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Navbar from '../Components/NavbarComponent';

const Grievance = () => {
  const [text, setText] = useState('');
  const [isCopied, setCopied] = useState(false);
  const [submittedText, setSubmittedText] = useState('');
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

  const handleSpokenText = () => {
    setText(transcript);
  };

  const handleSubmit = () => {
    setSubmittedText(text);
  };

  return (
    <div className='m-0 p-0'>
      <div className='z-50'>
        <Navbar />
      </div>
      <div className='w-full flex flex-col font-sans text-black justify-center content-center bg-gray-100'>
        <div className='flex justify-center items-center content-center self-center'>
        </div>

        <div className='flex flex-col md:flex-row w-screen justify-center items-center content-center self-center p-10'>
          <CopyToClipboard text={text} onCopy={handleCopy}>
            <button className='text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
              <ContentCopyIcon /> {isCopied ? 'Copied!' : 'Copy to clipboard'}
            </button>
          </CopyToClipboard>

          <button
            onClick={() => {
              startListening();
              handleSpokenText(); 
            }}
            className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            <GraphicEqIcon />
            Start Recording
          </button>

          <button
            onClick={() => {
              SpeechRecognition.stopListening();
              handleSpokenText(); 
            }}
            className='text-black bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            <MicOffIcon />
            Stop Recording
          </button>

          <button
            onClick={handleReset}
            className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            <RestartAltIcon />
            Reset
          </button>

          <button
            onClick={handleSubmit}
            className='text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-br shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            Submit
          </button>
        </div>

        {submittedText && (
          <div className='text-black text-md border border-double rounded-lg border-gray-300 p-5 mt-4'>
            {submittedText}
          </div>
        )}
      </div>
    </div>
  );
};

export default Grievance;
