import React from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        display: "block",
        marginTop: 75,
        marginRight: 30,
        marginLeft: 30,
    },
    paper: {
        marginBottom: 27,
    },
});

function MediaCard(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{display: "flex",}}>
                <Grid item xs>
                    <Link to="/video/1" style={{textDecoration: 'none', color: 'black'}}>
                        < Paper className={classes.paper}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    marginLeft="100px"
                                    width="280"
                                    height="157.5"
                                    src="https://i.ytimg.com/vi/T2RmycjaH8Y/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDxGgBS6IZRmcXfSF30EWf-tnXanw"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h8" component="h2">
                                        [MyGap] Почему регионы такие бедные
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        MyGap
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        390 375 просмотров
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        25 окт. 2020 г.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link to="/video/2" style={{textDecoration: 'none', color: 'black'}}>
                        <Paper className={classes.paper}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    width="280"
                                    height="157.5"
                                    src="https://i.ytimg.com/vi/Ylf-7hNNdHs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLB1SrveBSsd19LzCxBBNBPC6qzWeA"
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h8" component="h2">
                                        КОНЕЧНАЯ !(DOOM ETERNAL DLC ) #6
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Wycc220
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        64 тыс.просмотров
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        1 неделю назад
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link to="/video/3" style={{textDecoration: 'none', color: 'black'}}>
                        <Paper className={classes.paper}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    width="280"
                                    height="157.5"
                                    src="https://i.ytimg.com/vi/okgPs7p-I44/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCplNacFCnZ2_rtvCeqOBGSA16Qbw"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h8" component="h2">
                                        "Я-невротик?" Проверь, есть ли у тебя невроз
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Евгения Стрелецкая
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        880 077 просмотров
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        13 февр. 2019 г.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link to="/video/4" style={{textDecoration: 'none', color: 'black'}}>
                        < Paper className={classes.paper}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    marginLeft="100px"
                                    width="280"
                                    height="157.5"
                                    src="https://i.ytimg.com/vi/dV_IFO1LPoo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAAUl82I4YdaeihwYj-MJNf3LNAUw"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h8" component="h2">
                                        Void Bastards (БЭУС...?) #6
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Wycc220
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        72 тыс. просмотров
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        1 год назад
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Link to="/video/5" style={{textDecoration: 'none', color: 'black'}}>
                        <Paper className={classes.paper}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    width="280"
                                    height="157.5"
                                    src="https://i.ytimg.com/vi/fpcAvRw0Q-Y/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBCvQwoRu_iApWgBPZyk718YV6zPQ"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h8" component="h2">
                                        30 minutes of kirby music to make you feel better
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Tenpers Universe
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        1 109 443 просмотра
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        13 янв. 2020 г.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link to="/video/6" style={{textDecoration: 'none', color: 'black'}}>
                        <Paper className={classes.paper}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    width="280"
                                    height="157.5"
                                    src="https://i.ytimg.com/vi/v3mc5WovA5o/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBmA6dbsH_zTN0wVVKBVa9tNZIvSA"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h8" component="h2">
                                        Stand Up: Стас Старовойтов отпраздновал юбилей гуся
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Телеканал ТНТ
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        1 485 423 просмотра
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        28 окт. 2020 г.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link to="/video/7" style={{textDecoration: 'none', color: 'black'}}>
                        <Paper className={classes.paper}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    width="280"
                                    height="157.5"
                                    src="https://i.ytimg.com/vi/-wpTY3LM5bc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDeyi0YHjeo4_KOC25c5jmb3LX_JA"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h8" component="h2">
                                        MMV - KEAN DYSSO - Plain Jane
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Hilzu
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        1 456 571 просмотр
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Дата премьеры: 23 окт. 2020 г.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link to="/video/8" style={{textDecoration: 'none', color: 'black'}}>
                        <Paper className={classes.paper}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    width="280"
                                    height="157.5"
                                    src="https://i.ytimg.com/vi/N7kuQKwzz2I/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLApoN55PHvkEwlUM_uZTkM-fZME2Q"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h8" component="h2">
                                        Коррупция Как Она Есть •
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        MyGap
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        1,5 млн просмотров
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        2 года назад
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MediaCard);