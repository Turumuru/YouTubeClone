import React from 'react';

const API_KEY = 'KEY';

const CommentItem = ({video}) => {

    const logo = video.snippet.topLevelComment.snippet.authorProfileImageUrl;
    const comm = video.snippet.topLevelComment.snippet.textOriginal;
    const name = video.snippet.topLevelComment.snippet.authorDisplayName;
    const like = video.snippet.topLevelComment.snippet.likeCount;

    const publishedDate = () => {
        if (undefined === video) {
            return '';
        }

        let formatter = new Intl.DateTimeFormat("ru", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        return formatter.format(new Date(video.snippet.topLevelComment.snippet.publishedAt)).toString();
    }

    if (video) return (
        <div style={{display: 'flex'}}>
            <img src={logo} alt=''
                 style={{borderRadius: '50%', margin: '30px 10px 30px 0', maxHeight: '50px', maxWidth: '50px'}}/>
            <div>
                <div style={{color: "#4B4747"}}>{name} • {publishedDate()}</div>
                <div style={{paddingTop: '10px'}}>{comm}</div>
                <div style={{display: 'flex', fontSize: '20px'}}>{like}<img src="https://img.icons8.com/nolan/30/thumb-up.png" alt=""/></div>
            </div>
        </div>
    )
    else return (<div>Loading...</div>)
}

export default CommentItem;
