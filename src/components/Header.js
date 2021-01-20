import React, {useEffect, useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, InputBase} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {fade, makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ReactDOM from "react-dom";

const HeaderMUIStyled = makeStyles((theme) => ({
    appBar: {
        color: "white",
        zIndex: 1,
        background: '#4B4747'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        paddingRight: '200px',
        flexGrow: 0.4,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    rightSideIcon: {
        display: "flex",
        alignItems: "center",
        flexGrow: "0.6",
        justifyContent: "flex-end",
        "& > *": {
            margin: theme.spacing(0, 1.3),
            cursor: "pointer",
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    inputInput: {
        color: 'white',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
    },
}));


const Header = ({leftIcon}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const classes = HeaderMUIStyled();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => leftIcon()}
                >
                    <MenuIcon/>
                </IconButton>

                <img src="https://img.icons8.com/nolan/50/youtube-play.png" alt=""/>
                <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        YouTube
                    </Typography>
                </Link>

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <input
                        style={{backgroundColor: '#4B4747', width: '650px', height: '25px'}}
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <div style={{paddingTop: '4px', paddingLeft: '5px'}}>
                        <Link to={searchTerm} style={{textDecoration: 'none', color: 'white'}}>
                            <SearchIcon/>
                        </Link>
                    </div>
                </div>

                <div className={classes.rightSideIcon}>
                    <img src="https://img.icons8.com/nolan/35/documentary.png" alt=""/>
                    <img src="https://img.icons8.com/nolan/35/alarm.png" alt=""/>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;