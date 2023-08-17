import React from 'react';
const VideoStream = ()=> {
     const streamUrl = 'https://2f19-177-193-102-234.ngrok-free.app/';
     
    return (
      <div>
        <h2>Video Stream</h2>
        <iframe 
          src={streamUrl}
          alt="Video Stream"
          width="320"
          height="240"
        ></iframe>
      </div>
    );
}

export default VideoStream;
