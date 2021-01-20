import React from 'react';
import VideoItemSearch from './VideoItemSearch'


function VideoListSearch({isLoading, videos = [], search}) {

    console.log(videos);

    const VideoItemsSearchs = videos.map((video) =>
        <VideoItemSearch
            search={search}
            key={video.id}
            video={video} />
    );

    if (!isLoading) return (
        <div style={{paddingTop: "110px", paddingLeft: "130px"}}>
            {VideoItemsSearchs}
        </div>
    )
    else return (<div>Loading...</div>)
}


export default VideoListSearch;
