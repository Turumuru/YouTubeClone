import React from 'react'
import {makeStyles} from "@material-ui/core/styles";

const NotFoundStyled = makeStyles(() => ({
    mainCon: {
        backgroundImage: "linear-gradient(to right, #e669ec, #1373de)",
        color: "white",
        blockSize: "757px"
    },
    divImg: {
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 150,
        width: 300,
        textAlign: "center"
    },
}));

const NotFound = () => {
    const classes = NotFoundStyled();
    return (
        <main className={classes.mainCon}>
            <div className={classes.divImg}>
                <img src={"https://i.gifer.com/6mz.gif"} style={{height: 230, width: 230,}}/>
                <h3>404</h3>
                <h3>Этой странички нет</h3>
                <p>Но вы можете посмотреть на котика.</p>
            </div>
        </main>
    );
};

export default NotFound