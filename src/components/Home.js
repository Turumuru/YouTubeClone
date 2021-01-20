import React, {useEffect, useState} from 'react';
import LayoutComponent from "./layout";
import VideoList from "./VideoList"
import axios from "axios";

const API_KEY = 'AIzaSyBHbrsn5W1stF9w_86hbCDWjDAih3XvQC8';

function Home() {

    const [appState, setAppState] = useState(
        {
            loading: false,
            videos: [],
        }
    );

    useEffect(() => {
        setAppState({loading: true})
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&chart=mostPopular&maxResults=12&key=${API_KEY}`;
        axios.get(apiUrl).then((resp) => {
            const videos = resp.data.items;
            // console.log(videos);
            setAppState({
                loading: false,
                videos: videos
            });
        });
    }, [setAppState]);

    return (
        <LayoutComponent>
            <VideoList
                isLoading={appState.loading}
                videos={appState.videos}
            />
        </LayoutComponent>
    )
}

export default Home;