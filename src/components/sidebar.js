import React, {useContext, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import homeWhite from '../assets/sidebar_icons/home_white.png';
import homeBlack from '../assets/sidebar_icons/home_black.png';
import lecturesWhite from '../assets/sidebar_icons/book_white.png';
import lecturesBlack from '../assets/sidebar_icons/book_black.jpg';
import formWhite from '../assets/sidebar_icons/form_white.png';
import formBlack from '../assets/sidebar_icons/form_black.jpg';
import statisticsWhite from '../assets/sidebar_icons/statistics_white.png';
import statisticsBlack from '../assets/sidebar_icons/statistics_black.png';
import { Context } from '../pages/Context';

//css classes
const useStyles = makeStyles((theme) => ({
    sidebarIcons: {
        height: "25px",
        width: "25px",
    },
    sidebarItems: {
        backgroundColor: '#F3DD00',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '25px',
        width: '220px',
        transition: 'width',
        overflow: 'hidden'
    },
  }));

export default function Sidebar() {
    const classes = useStyles();
    const location = useLocation();

    const [isCollapsed, setIsCollapsed] = useContext(Context);

    function collapseSidebar() {
        if(!isCollapsed) {
            setIsCollapsed(!isCollapsed);
            document.getElementById('icon').style.width = '80px';
            document.getElementById('home').style.width = '80px';
            document.getElementById('lectures').style.width = '80px';
            document.getElementById('form').style.width = '80px';
            document.getElementById('statistics').style.width = '80px'; 
        }
        else {
            setIsCollapsed(!isCollapsed);
            document.getElementById('icon').style.width = '240px';
            document.getElementById('home').style.width = '220px';
            document.getElementById('lectures').style.width = '220px';
            document.getElementById('form').style.width = '220px';
            document.getElementById('statistics').style.width = '220px'; 
        }
    };

  return (
    <>
        <Grid item xs={isCollapsed ? 1 : 2} sx={{ml: 6, mt: 1}}>
            <Grid container
            direction='column'
            justfiyContent='space-evenly'
            spacing={1}
            >
                <Grid item id='icon' sx={{textAlign: 'end', width: isCollapsed ? '80px' : '240px', transition: 'width'}}>
                    <IconButton onClick={collapseSidebar}>
                        {isCollapsed ? ( 
                            <ArrowRightIcon />
                            ) : (
                            <ArrowLeftIcon />
                        )}
                    </IconButton>
                </Grid>   
                <Grid item id='home' className={location.pathname === '/' ? classes.sidebarItems : null}
                sx={{mt: 2, width: isCollapsed ? '80px' : '220px'}}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Grid container
                        direction='row'
                        justifyContent=''
                        spacing={2}
                        sx={{ml: 0, color: 'black'}}
                        >
                            <Grid item>
                                <img src={location.pathname === '/' ? homeBlack : homeWhite} className={classes.sidebarIcons}/>
                            </Grid>
                            {!isCollapsed ? ( 
                            <Grid item>
                                <Typography sx={{fontWeight: location.pathname === '/' ? 'bold' : null, lineHeight: '30px', fontSize: 15}}>Home</Typography>
                            </Grid>
                            ) : null}
                        </Grid>
                    </Link>
                </Grid>
                <Grid item id='lectures' className={location.pathname === '/lectures' ? classes.sidebarItems : null}
                sx={{mt: 2, width: isCollapsed ? '80px' : '220px'}}>
                    <Link to="/lectures" style={{ textDecoration: 'none' }} >
                        <Grid container
                        direction='row'
                        justifyContent=''
                        spacing={2}
                        sx={{ml: 0, color: 'black'}}
                        >
                            <Grid item>
                                <img src={location.pathname === '/lectures' ? lecturesBlack : lecturesWhite} className={classes.sidebarIcons}/>
                            </Grid>
                            {!isCollapsed ? (
                            <Grid item>
                                <Typography sx={{fontWeight: location.pathname === '/lectures' ? 'bold' : null, lineHeight: '30px', fontSize: 15}}>My Lectures</Typography>
                            </Grid>
                            ) : null}
                        </Grid>
                    </Link>
                </Grid>
                <Grid item id='form' className={location.pathname === '/form' ? classes.sidebarItems : null}
                sx={{mt: 2, width: isCollapsed ? '80px' : '220px'}}>
                    <Link to="/form" style={{ textDecoration: 'none' }}>
                        <Grid container
                        direction='row'
                        justifyContent=''
                        spacing={2}
                        sx={{ml: 0, color: 'black'}}
                        >
                            <Grid item>
                                <img src={location.pathname === '/form' ? formBlack : formWhite} className={classes.sidebarIcons}/>
                            </Grid>
                            {!isCollapsed ? (
                            <Grid item>
                                <Typography sx={{fontWeight: location.pathname === '/form' ? 'bold' : null, lineHeight: '30px', fontSize: 15}}>Evaluation Form</Typography>
                            </Grid>
                            ) : null}
                        </Grid>
                    </Link>
                </Grid>
                <Grid item id='statistics' className={location.pathname === '/statistics' ? classes.sidebarItems : null}
                sx={{mt: 2, width: isCollapsed ? '80px' : '220px'}}>
                    <Link to="/statistics" style={{ textDecoration: 'none' }}>
                        <Grid container
                        direction='row'
                        justifyContent=''
                        spacing={2}
                        sx={{ml: 0, color: 'black'}}
                        >
                            <Grid item>
                                <img src={location.pathname === '/statistics' ? statisticsBlack : statisticsWhite} className={classes.sidebarIcons}/>
                            </Grid>
                            {!isCollapsed ? (
                            <Grid item>
                                <Typography sx={{fontWeight: location.pathname === '/statistics' ? 'bold' : null, lineHeight: '30px', fontSize: 15,}}>TA-Bot Statistics</Typography>
                            </Grid>
                            ) : null}
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    </>
  );
}
