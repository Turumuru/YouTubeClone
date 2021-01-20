import React from 'react';
import CommentItem from './CommentItems'


function CommentList({videos = []}) {

    const CommentItems = videos.map((video) =>
        <CommentItem
            key={video.id}
            video={video} />
    );

    if (videos) return (
        <div style={{paddingLeft: '150px', paddingTop: '15px'}}>
            {CommentItems}
        </div>
    )
    else return (<div>Loading...</div>)
}


export default CommentList;