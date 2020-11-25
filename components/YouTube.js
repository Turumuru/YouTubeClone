import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import LayoutComponent from "./layout";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexGrow: 1,
        marginTop: 85,
    },
    le: {
        width: 900, /* Ширина слоя */
        marginLeft: 50, /* Внутренние поля вокруг содержимого */
    },
    ri: {
        width: 400, /* Ширина слоя */
        marginLeft: 50, /* Внутренние поля вокруг содержимого */

    },
    text: {
        float: "left",
        marginRight: 10,
        marginBottom: 20,
        width: 250,
        height: 150

    },
    car: {
        width: 400,
        height: 150,
        marginBottom: 20,
    }

});

function Youtube(props) {
    const classes = useStyles();

    const videoSrc = "https://www.youtube.com/embed/" + props.video +
        "?autoplay=" + props.autoplay +
        "&modestbranding=" + props.modest +
        "&fs=1";

    const stylePlayer = {width: props.width, height: props.height};

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <LayoutComponent>
            <div className={classes.root}>
                <div className={classes.le}>
                    <iframe
                        style={stylePlayer}
                        type="text/html"
                        width={props.width}
                        height={props.height}
                        src={videoSrc}
                        title={props.video}
                        frameBorder="0"
                        allowFullScreen="1"/>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <div style={{display: "block"}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.text}
                                </Typography>
                                <Typography gutterBottom variant="h8" component="p">
                                    {props.views}
                                </Typography>
                                <Typography gutterBottom variant="h8" component="p">
                                    {props.release}
                                </Typography>
                            </div>
                            <div style={{paddingLeft: 260}}>
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
                                            {videoSrc}
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

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Оставьте комментарий"/>
                    </form>
                </div>
                <div className={classes.ri}>
                    <Link to="/video/9" style={{textDecoration: 'none', color: 'black'}}>
                        <div className={classes.car}>
                            <p>
                                <img
                                    src="https://i.ytimg.com/vi/WBqyfOHNshE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDshxWmYQzMIKqjVfpu8pUGEi7cQw"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen className={classes.text}/>
                                Stand Up. Алексей Щербаков - Зачем нужно учить китайский
                            </p>
                        </div>
                    </Link>
                    <Link to="/*" style={{textDecoration: 'none', color: 'black'}}>
                        <div className={classes.car}>
                            <p>
                                <img
                                    src="https://i.ytimg.com/vi/5g6cyyPjw_g/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCcnhfcLla4eT2L68ay-T8J9ed8Vw"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    className={classes.text}/>
                                Вечная проблема России: КОПИТЬ ИЛИ ЖИТЬ? - ТОПЛЕС
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </LayoutComponent>


    )
}

export default Youtube;