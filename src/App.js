import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import NotFound from './components/NotFound';
import VideoDet from './components/VideoDet';
import Search from './components/Search';
import VideoDetSearch from './components/VideoDetSearch';

// import ReactDOM from "react-dom";
// import {Route, Switch} from 'react-router-dom';
// import Player from './components/Player';
// import YTSearch from 'youtube-api-search';
// import SearchBar from './components/SearchBar';
// import VideoList from './components/VideoList';



class App extends React.Component {

    render() {
        return (
            <div>
                <main>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>

                            <Route exact path="/:searchTerm"
                                   render={(video) => <Search {...video}/>}/>

                            <Route exact path="/:videoId/:Id"
                                   render={(video) => <VideoDet {...video}/>}/>

                            <Route exact path="/:videoId/:Id/:sear"
                                   render={(video) => <VideoDetSearch {...video}/>}/>

                            <Route exact path="*" component={NotFound}/>
                        </Switch>
                    </BrowserRouter>
                </main>
            </div>
        );
    }
}


export default App;