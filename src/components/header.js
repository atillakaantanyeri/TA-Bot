import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import LogoutIcon from '@mui/icons-material/Logout';
import tabotIcon from '../assets/tabot.jpg';

//css classes
const useStyles = makeStyles((theme) => ({
    icon: {
        objectFit: "cover",
        height: "80px",
        width: "80px",
    },
  }));

export default function Header() {
    
    const classes = useStyles();

  return (
    <>
        <Grid container
        direction='row'
        justifyContent='space-between'
        sx={{height: '80px', lineHeight: '80px'}}
        >
            <Grid item xs={9}>
                    <Grid container
                    direction='row'
                    justifyContent=''
                    sx={{ml: 3}}
                    >
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            <Grid item>
                                <img src={tabotIcon} alt="tabotIcon" className={classes.icon}/>
                            </Grid>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            <Grid item>
                                <Typography variant='h2'>TA-Bot</Typography>
                            </Grid>
                        </Link>
                    </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container
                direction='row'
                justifyContent='center'
                >
                    <Grid item sx={{mt: "20px", mr: 2}}>
                        <Avatar alt="user" src="" sx={{height: "40px", width: "40px", color: '#F3DD00', backgroundColor: '#F3DD00', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',}} />
                    </Grid>
                    <Grid item>
                        <Typography variant='h2' sx={{display: 'inline-block', fontWeight: 'normal'}}>Atilla Kaan Tanyeri</Typography>
                    </Grid>
                    <Grid item sx={{mt: "7px", ml: 10}}>
                        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                            <LogoutIcon />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
  );
}
