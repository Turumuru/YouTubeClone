import React, {useEffect, useState} from 'react';
import LayoutComponent from "./layout";
import VideoListSearch from "./VideoListSearch"
import axios from "axios";

const API_KEY = 'AIzaSyBHbrsn5W1stF9w_86hbCDWjDAih3XvQC8';

function Search(video) {

    // console.log(video.match.params.searchTerm);

    const [appState, setAppState] = useState(
        {
            loading: false,
            videos: [],
        }
    );

    useEffect(() => {
        setAppState({loading: true})
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${video.match.params.searchTerm}&maxResults=5&key=${API_KEY}`;
        axios.get(apiUrl).then((resp) => {
            const videos = resp.data.items;
            console.log(videos);
            setAppState({
                loading: false,
                videos: videos
            });
        });
    }, [setAppState]);

    return (
        <LayoutComponent>
            <VideoListSearch
                isLoading={appState.loading}
                videos={appState.videos}
                search={video.match.params.searchTerm}
            />
        </LayoutComponent>
    )
}

export default Search;