// components/TranscriptFetcher.js

import { useState } from 'react';

function TranscriptFetcher() {
  const [videoUrl, setVideoUrl] = useState('');
  const [transcript, setTranscript] = useState('');

  const fetchTranscript = async () => {
    try {
      const response = await fetch('/api/transcript', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTranscript(data.transcript);
    } catch (error) {
      console.error('An error occurred while fetching the transcript:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter video URL"
      />
      <button onClick={fetchTranscript}>Get Transcript</button>
      {transcript && (
        <div>
          <h3>Transcript:</h3>
          <p>{transcript}</p>
        </div>
      )}
    </div>
  );
}

export default TranscriptFetcher;
