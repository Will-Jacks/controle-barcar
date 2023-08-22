import React from 'react';
const VideoStream = ()=> {
     const streamUrl = 'http://10.0.0.138/';
     
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
