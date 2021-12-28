import React, {useContext} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import registerImg from '../assets/register.png';
import loginImg from '../assets/login.png';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Context } from './Context';

const theme = createTheme();

//button
const theme2 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(0, 0, 0, 0.54)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 12,
          borderRadius: 15,
          height: '40px',
          backgroundColor: '#F3DD00',
          '&:hover': {
            backgroundColor: '#FFE800',
          },
        },
      }
    }
  }
});

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
    textBox: { 
      backgroundColor: 'rgba(196, 196, 196, 0.10)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 15,
    },
    img: {
      objectFit: "cover",
      height: "100%",
      width: "100%",
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
    },
}));


export default function Home() {
  const classes = useStyles();
  let navigate = useNavigate();

  const {value1, value2} = useContext(Context);
  const [isCollapsed, setIsCollapsed] = value1;

  const dummyTxt = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"+ 
  "industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry...";

  function getStarted() {
    navigate('/lectures');
  };

  return (
    <>
    <ThemeProvider theme={theme}>
        <Header />
        <Grid container
        direction='row'
        justfiyContent='space-evenly'
        sx={{height: '100%'}}
        >
            <Sidebar />
            <Grid item xs={isCollapsed ? 10 : 9} sx={{mt: 4, mx: 'auto', mb: 10}}>
                <Grid container
                direction='row'
                justifyContent=''
                className={classes.textBox}
                sx={{mt: 1}}
                >
                  <Grid item lg={3} xl={2} sx={{height: '250px'}}>
                    <img src={registerImg} alt="registerImg" className={classes.img}/>
                  </Grid>
                  <Grid item xs={9} sx={{padding: 5}}>
                      <Typography sx={{fontSize: 25, fontWeight: 'bold'}}>Welcome to TA-Bot</Typography>
                      <Typography variant='h3' sx={{paddingTop: 3}}>{dummyTxt}</Typography>
                  </Grid>
                </Grid>
                <Grid container
                direction='row'
                justifyContent='space-between'
                sx={{mt:8}}
                >
                  <Grid item xs={7}>
                    <Grid container
                    direction='column'
                    >
                      <Grid item sx={{height: '200px', padding: 3}} className={classes.textBox}>
                          <Typography sx={{fontSize: 25, fontWeight: 'bold'}}>Our Vision</Typography>
                          <Typography variant='h3' sx={{paddingTop: 3}}>{dummyTxt}</Typography>
                      </Grid>
                      <Grid item sx={{height: '200px', padding: 3, mt: 5}} className={classes.textBox}>
                          <Typography sx={{fontSize: 25, fontWeight: 'bold'}}>Our Mission</Typography>
                          <Typography variant='h3' sx={{paddingTop: 3}}>{dummyTxt}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} sx={{height: '440px'}} className={classes.textBox}>
                    <img src={loginImg} alt="loginImg" style={{ borderRadius: 15 }} className={classes.img}/>
                  </Grid>
                </Grid>
                <Grid container
                direction='row'
                justifyContent=''
                sx={{mt: 4}}
                >
                  <Grid item>
                    <ThemeProvider theme={theme2}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={getStarted}
                      >
                        Get started <ArrowForwardIcon sx={{ml: 1, width: 18, height: 18}}/>
                      </Button>
                    </ThemeProvider>
                  </Grid>             
                </Grid>
            </Grid>
        </Grid>
        <Footer />
    </ThemeProvider>
    </>
  );
}
