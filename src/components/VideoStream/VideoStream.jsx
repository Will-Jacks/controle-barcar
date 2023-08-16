import React from 'react';

const VideoStream = ()=> {
     const streamUrl = 'https://3dbc-177-193-102-234.ngrok-free.app/';
     
    return (
      <div>
        <h2>Video Stream</h2>
        <img src={streamUrl} alt="Video Stream" />
      </div>
    );
}

export default VideoStream;
