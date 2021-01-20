import React, {useEffect, useState} from 'react';
import LayoutComponent from "./layout";
import VideoList from "./VideoList"
import CommentList from './CommentList'
import VideoDetail from './VideoDetail';
import axios from "axios";

const API_KEY = 'KEY';

function VideoDet(video) {

    const videoId = (video.match.url).split('/');

    const [Video, SetVideoDetail] = useState(
        {
            loading: false,
            videoDet: null
        }
    )

    const [logos, Setlogos] = useState(
        {
            loading: false,
            logo: null
        }
    )

    const [appState, setAppState] = useState(
        {
            loading: false,
            videos: null,
        }
    );

    const [comments, setComments] = useState(
        {
            loading: false,
            comment: null,
        }
    );

    useEffect(() => {
        SetVideoDetail({loading: true})
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&id=${videoId[1]}&maxResults=1&key=${API_KEY}`).then((resp) => {
            const video = resp.data.items[0];
            // console.log(video);
            SetVideoDetail({
                loading: false,
                videoDet: video
            });
        });
        Setlogos({loading: true})
        axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${videoId[2]}&part=snippet&key=${API_KEY}`).then((resp) => {
            const logo = resp.data.items[0].snippet.thumbnails.default.url;
            // console.log(logo);
            Setlogos({
                loading: false,
                logo: logo
            });
        });
        setAppState({loading: true})
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&chart=mostPopular&maxResults=4&key=${API_KEY}`).then((resp) => {
            const videos = resp.data.items;
            // console.log(videos);
            setAppState({
                loading: false,
                videos: videos
            });
        });
        setComments({loading: true})
        const apiUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId[1]}&maxResults=3&key=${API_KEY}`;
        axios.get(apiUrl).then((resp) => {
            const comm = resp.data.items;
            // console.log(comm);
            setComments({
                loading: false,
                comment: comm
            });
        });
    }, [setAppState]);


    const VideoD = Video.videoDet;

    if (VideoD) {
        return (
            <LayoutComponent>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{height: '100%', display: 'flex', flexDirection: 'column', float: 'right'}}>
                        <VideoDetail
                            logos={logos.logo}
                            video={Video.videoDet}
                        />
                        <CommentList
                            videos={comments.comment}
                        />
                    </div>
                    <div>
                        <VideoList
                            isLoading={appState.loading}
                            videos={appState.videos}
                        />
                    </div>
                </div>
            </LayoutComponent>
        )
    } else {
        return (<div>Loading...</div>)
    }
}

export default VideoDet;
