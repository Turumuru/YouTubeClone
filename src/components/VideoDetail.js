import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
// import {Link} from 'react-router-dom';

const API_KEY = 'AIzaSyBHbrsn5W1stF9w_86hbCDWjDAih3XvQC8';

const VideoDetail = ({logos, video}) => {

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


    const url = `https://www.youtube.com/embed/${video.id}`;

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className="video-detail col-md-8"
             style={{ width: '965px', paddingTop: '105px', paddingLeft: '150px'}}>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} style={{height: '560px', width: '940px'}}/>
            </div>
            <div className="details">
                <h3>{video.snippet.title}</h3>
                <div style={{
                    color: "#4B4747",
                    float: 'left',
                    paddingRight: '250px'
                }}>{Math.floor((video.statistics.viewCount) / 1000)} тыс.
                    просмотров
                    • {publishedDate()}</div>
                <div style={{float: 'left', display: 'flex', fontSize: '20px', paddingRight: '10px'}}><img
                    src="https://img.icons8.com/nolan/40/thumb-up.png" alt=""/>
                    {video.statistics.likeCount}</div>
                <div style={{float: 'left', paddingRight: '60px', display: 'flex', fontSize: '20px'}}><img
                    src="https://img.icons8.com/nolan/40/thumbs-down.png" alt=""/>
                    {video.statistics.dislikeCount}</div>
                <div>
                    <Button style={{
                        backgroundImage: "linear-gradient(to right, #e669ec, #1373de)",
                        color: "white"
                    }} variant="outlined" onClick={handleClickOpen}>
                        Поделиться
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle style={{background: '#4B4747', color: "white"}}
                                     id="alert-dialog-title">{"Скопируйте эту ссылку, если хотите поделиться"}</DialogTitle>
                        <DialogContent style={{background: '#4B4747', color: "white"}}>
                            <DialogContentText id="alert-dialog-description" style={{color: "white"}}>
                                {url}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions style={{background: '#4B4747'}}>
                            <Button style={{
                                backgroundImage: "linear-gradient(to right, #e669ec, #1373de)",
                                color: "white", height: 50,
                            }} onClick={handleClose} color="primary" autoFocus>
                                <h3>Закрыть</h3>
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <hr/>
                <div style={{fontSize: '20px', height: '80px'}}>
                    <img src={logos}
                         style={{
                             borderRadius: '50%',
                             margin: '10px 20px 0 0',
                             maxHeight: '50px',
                             maxWidth: '50px',
                             float: 'left'
                         }}
                         alt=""/>
                    {video.snippet.channelTitle}</div>
                <div className="desc-video">{video.snippet.description}</div>
                <hr/>
                <div style={{fontSize: '20px'}}>{video.statistics.commentCount} комментариев</div>
            </div>
        </div>
    )
};

export default VideoDetail;
