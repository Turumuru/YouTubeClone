import React, { Component } from 'react';
import Youtube from "./YouTube";

class Player extends Component {

    bindYoutubeLink = (props) => {
        let video = props.video.find((video)=> {
            return video.id === parseInt(props.match.params.id, 10);
        });
        if (video !== null) {
            this.currentLink = video.youtube_link;
        } else {
            this.currentLink = '';
        }
        this.texts = video.title;
        this.description = video.description;
        this.views = video.views;
        this.release = video.release;
    }

    UNSAFE_componentWillMount() {
        this.bindYoutubeLink(this.props);
    }

    render() {
        return (
            <div className="well">
                {this.currentLink !== "" ?
                <Youtube
                    video={this.currentLink}
                    width="900"
                    height="500"
                    autoplay="1"
                    rel="1"
                    modest="1"
                    text={this.texts}
                    description={this.description}
                    views={this.views}
                    release={this.release}/>
                : '' }
            </div>
        )
    }
}

export default Player;