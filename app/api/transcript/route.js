// app/api/transcript/route.js
// ------------------------------------

import { NextResponse } from 'next/server';
// Using the original youtube-transcript package
import { YoutubeTranscript } from 'youtube-transcript';

export async function POST(request) {
  try {
    const { videoUrl } = await request.json();
    
    // Extract the video ID from the URL
    const videoIdMatch = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?\/]+)/);
    if (!videoIdMatch) {
      return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
    }
    
    const videoId = videoIdMatch[1];
    console.log("Fetching transcript for video ID:", videoId);
    
    try {
      const transcript = await YoutubeTranscript.fetchTranscript(videoId);
      
      // Basic validation of transcript data
      if (!transcript || !Array.isArray(transcript) || transcript.length === 0) {
        throw new Error('No transcript data received');
      }
      
      // Process the transcript to ensure valid timestamps (this is key)
      let lastTime = 0;
      const processedTranscript = transcript.map((item, index) => {
        // Make sure timestamps are valid
        const start = typeof item.start === 'number' && !isNaN(item.start) ? item.start : 
                     (index === 0 ? 0 : lastTime);
                     
        // Update running timestamp
        lastTime = start + (typeof item.duration === 'number' ? item.duration : 0);
        
        return {
          ...item,
          start: start
        };
      }).sort((a, b) => a.start - b.start);
      
      return NextResponse.json({ transcript: processedTranscript });
    } catch (error) {
      console.error('Error fetching transcript:', error);
      return NextResponse.json({ 
        error: 'Transcript not available for this video. Make sure the video has captions enabled.'
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}