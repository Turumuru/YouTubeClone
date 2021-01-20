import React from "react";
import clsx from "clsx";
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@material-ui/core";
// Styled
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles} from '@material-ui/core/styles';

const drawerWidth = 215;
const useStyles = makeStyles((theme) => ({
    paperStyle: {
        background: '#4B4747',
        top: 64,
        zIndex: 0,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        background: '#4B4747',
        color: 'white',
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(7) + 1,
        },
    },
}));

const SideMenuBar = ({open}) => {
    const classes = useStyles();
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx(classes.paperStyle, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <List>
                {['Главная', 'В тренде', 'Подписки '].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{(index === 0) ?
                            <img src="https://img.icons8.com/nolan/30/school.png" alt=""/> : (index === 1) ?
                                <img src="https://img.icons8.com/nolan/30/--tinder.png" alt=""/> : (index === 2) ?
                                    <img src="https://img.icons8.com/nolan/30/likes-folder.png" alt=""/> :
                                    <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['Библиотека', 'История', 'Смотреть позже', 'Понравившиеся'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{(index === 0) ?
                            <img src="https://img.icons8.com/nolan/30/folder-invoices.png" alt=""/> : (index === 1) ?
                                <img src="https://img.icons8.com/nolan/30/rotate--v2.png" alt=""/> : (index === 2) ?
                                    <img src="https://img.icons8.com/nolan/30/timer.png" alt=""/> : (index === 3) ?
                                        <img src="https://img.icons8.com/nolan/30/thumb-up.png" alt=""/> :
                                        <HomeIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
export default SideMenuBar;