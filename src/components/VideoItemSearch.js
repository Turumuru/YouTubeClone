import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

const API_KEY = 'KEY';

const VideoItemSearch = ({search, video}) => {

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
    const videoId = video.id.videoId;
    const sear = search;
    const videoIdIdsear = videoId + "/" + Id + "/" + sear;

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
        <div style={{paddingBottom: '20px', display: 'flex', flexDirection: 'row'}}>
            <Link to={videoIdIdsear} style={{textDecoration: 'none', color: 'black'}}>
                <img src={video.snippet.thumbnails.medium.url} alt=""/>
            </Link>
            <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px'}}>
                <Link to={videoIdIdsear} style={{textDecoration: 'none', color: 'black'}}>
                    <h4 style={{
                        marginTop: '5px',
                        marginBottom: '5px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>{video.snippet.title}</h4>
                </Link>
                <div style={{color: "#4B4747"}}>{publishedDate()}</div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '15px', marginBottom: '15px'
                }}>
                    <img src={logo} alt=''
                         style={{
                             borderRadius: '50%',
                             maxHeight: '40px',
                             maxWidth: '40px'
                         }}/>
                    <div style={{paddingTop: '10px'}}>{video.snippet.channelTitle}</div>
                </div>
                <div style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    }}>{video.snippet.description}</div>
            </div>
        </div>
    )
    else return (<div>Loading...</div>)
}

export default VideoItemSearch;
