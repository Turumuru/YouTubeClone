import React from 'react';
import VideoItem from './VideoItems'


function VideoList({isLoading, videos = []}) {

    const VideoItems = videos.map((video) =>
        <VideoItem
            key={video.id}
            video={video} />
    );

    if (!isLoading) return (
        <div style={{display: 'block', paddingTop: "90px", paddingLeft: "60px"}}>
            {VideoItems}
        </div>
    )
    else return (<div>Loading...</div>)
}


export default VideoList;
