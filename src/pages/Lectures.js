import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const theme = createTheme();
//text themes
{
    theme.typography.h1 = {
      fontSize: 40,
      // '@media (min-width:600px)': {
      //   fontSize: 60,
      // },
      [theme.breakpoints.down('sm')]: {
        fontSize: 15,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: 20,
      },
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: 25,
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: 30,
      },
      [theme.breakpoints.up('xl')]: {
        // color: 'purple',
      },
    };
    
    theme.typography.h2 = {
      fontSize: 20,
      // '@media (min-width:600px)': {
      //   fontSize: 60,
      // },
      [theme.breakpoints.down('sm')]: {
        fontSize: 10,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: 10,
      },
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: 15,
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: 15,
      },
      [theme.breakpoints.up('xl')]: {
        // color: 'purple',
      },
    };
    
    theme.typography.h3 = {
      fontSize: 15,
      fontWeight: 'normal',
      // '@media (min-width:600px)': {
      //   fontSize: 60,
      // },
      [theme.breakpoints.down('sm')]: {
        fontSize: 6,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: 10,
      },
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: 12,
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: 15,
      },
      [theme.breakpoints.up('xl')]: {
        // color: 'purple',
      },
    };
}

//css classes
const useStyles = makeStyles((theme) => ({
    
}));

export default function Lectures() {
    const classes = useStyles();

  return (
    <>
    <ThemeProvider theme={theme}>
        <Header />
        <Grid container
        direction='row'
        justfiyContent='space-evenly'
        sx={{mt: 8, mb: 15, height: '800px'}}
        >
            <Navbar />

            <Grid item>

            </Grid>

        </Grid>
        <Footer />
    </ThemeProvider>
    </>
  );
}
