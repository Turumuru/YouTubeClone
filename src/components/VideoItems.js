import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

const API_KEY = 'AIzaSyBHbrsn5W1stF9w_86hbCDWjDAih3XvQC8';

const VideoListItem = ({video}) => {

    const [logos, Setlogos] = useState(
        {
            loading: true,
            logo: null
        }
    );

    useEffect(() => {
        Setlogos({loading: true})
        const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${Id}&maxResults=1&key=${API_KEY}`;
        axios.get(apiUrl).then((resp) => {
            const logo = resp.data.items[0].snippet.thumbnails.default.url;
            Setlogos({
                loading: false,
                logo: logo
            });
        });
    }, [Setlogos]);

    const logo = logos.logo;
    const Id = video.snippet.channelId;
    const videoId = video.id;
    const videoIdId = videoId + "/" + Id;
    // console.log(videoIdId)

    const publishedDate = () => {
        if (undefined === video) {
            return '';
        }

        let formatter = new Intl.DateTimeFormat("ru", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        return formatter.format(new Date(video.snippet.publishedAt)).toString();
    }

    if (video) return (

        <div style={{float: 'left', maxWidth: '320px', minHeight: '290px', paddingLeft: '47px', paddingBottom: '20px'}}>
            <Link to={videoIdId} style={{textDecoration: 'none', color: 'black'}}>
                <img src={video.snippet.thumbnails.medium.url} alt=""/>
            </Link>
            <div style={{display: 'flex'}}>
                <img src={logo} alt=''
                     style={{borderRadius: '50%', margin: '30px 10px 30px 0', maxHeight: '50px', maxWidth: '50px'}}/>
                <div>
                    <Link to={videoIdId} style={{textDecoration: 'none', color: 'black'}}>
                        <h4 style={{
                            margin: "8px 0",
                            minHeight: '40px',
                            overflow: 'hidden',
                            maxWidth: '30ch',
                            textOverflow: 'ellipsis',
                            overFlow: 'hidden',
                            whiteSpace: 'nowrap'
                        }}>{video.snippet.title}</h4>
                    </Link>
                    <div style={{color: "#4B4747"}}>{video.snippet.channelTitle}</div>
                    <div style={{color: "#4B4747"}}>{publishedDate()}</div>
                </div>
            </div>
        </div>
    )
    else return (<div>Loading...</div>)
}

export default VideoListItem;
