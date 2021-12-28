import React, {useContext} from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
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
  botMsgBox: {
    backgroundColor: '#F3DD00',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    textAlign: 'start',
  },
  botMsgTitle: {
    fontWeight: 'bold',
    paddingLeft: '30px', 
    paddingTop: '15px',
    fontSize: 16,
  },
  botMsgContent: {
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: '30px',
    paddingRight: '15px',
    fontSize: 14,
  },
  userMsgBox: {
    backgroundColor: 'black',
    color: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    textAlign: 'start',
  },
  userMsgTitle: {
    fontWeight: 'bold',
    paddingRight: '30px', 
    paddingTop: '10px',
    fontSize: 16,
  },
  userMsgContent: {
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingRight: '15px',
    paddingLeft: '30px',
    fontSize: 14,
  },
}));

export default function Chat() {
    const classes = useStyles();

    const {value1, value2, value3} = useContext(Context);
    const [isCollapsed, setIsCollapsed] = value1;
    const [myLectures, setMyLectures] = value2;
    const [selectedLecture, setSelectedLecture] = value3;

  return (
    <>
    <ThemeProvider theme={theme}>
        <Header />
        <Grid container
        direction='row'
        justfiyContent='space-evenly'
        sx={{height: '800px'}}
        >
            <Sidebar />

            <Grid item xs={isCollapsed ? 10 : 9} sx={
              {mt: 4, mb: 10, mx: 'auto',
              backgroundColor: 'rgba(196, 196, 196, 0.10)',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: 15,}}>
                <Grid container
                direction='row'
                justifyContent='center'
                sx={{mb: 2}}
                >
                  <Grid item xs={10} sx={{fontWeight: 'bold', fontSize: 20, mt: 4, textAlign: 'center'}}>
                    {selectedLecture.code} - {selectedLecture.name}
                    <hr />
                  </Grid>
                </Grid>
                {/* BOT MSG */}
                <Grid container
                direction='row'
                justifyContent='start'
                sx={{}}
                >
                  <Grid item xs={5} sx={{mt: 1, ml: 3}} className={classes.botMsgBox}>
                    <Grid container
                    direction='column'
                    >
                      {/* <Grid item className={classes.botMsgTitle}>
                        Teaching Assistant Bot (TA-Bot)
                      </Grid> */}
                      <Grid item className={classes.botMsgContent}>
                        Hi there Atilla Kaan Tanyeri, I am TA-Bot! You can ask anything about '{selectedLecture.name}'.
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* USER MSG */}
                <Grid container
                direction='row'
                justifyContent='end'
                sx={{}}
                >
                  <Grid item xs={5} sx={{mt: 1, mr: 3}} className={classes.userMsgBox}>
                    {/* <Grid item className={classes.userMsgTitle}>
                        Atilla Kaan Tanyeri
                      </Grid> */}
                      <Grid item className={classes.userMsgContent}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      </Grid>
                  </Grid>
                </Grid>
            </Grid>

        </Grid>
        <Footer />
    </ThemeProvider>
    </>
  );
}
