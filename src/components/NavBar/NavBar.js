import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import fureverFriendsBlue from '../../Images/fureverFriendsBlue.svg'
import "./NavBar.css"


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'primary'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Open drawer">
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <img src={fureverFriendsBlue} className="navLogo" alt="fureverFriendsLogoBlue" />
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        </div>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link color="primary" variant="body1" className="nav-link" to="/pets">Available Pets</Link>
                            </li>
                            <li className="nav-item">
                                <Link color="primary" variant="body1" className="nav-link" to="/pet-interested">Interested Pets</Link>
                            </li>
                            <li className="nav-item">
                                <Link color="primary" variant="body1" className="nav-link" to="/login">Log Out</Link>
                            </li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;