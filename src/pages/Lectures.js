import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const theme = createTheme();

//button
const theme2 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(0, 0, 0, 0.54)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 11,
          borderRadius: 15,
          height: '56px',
          marginTop: '',
          backgroundColor: 'black',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
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
    textAlign: 'center',
    height: '200px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F3DD00',
    },
  },
  textField: {
    backgroundColor: 'rgba(196, 196, 196, 0.10)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 15,
    '& label.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.54)',
      fontWeight: 'bold',
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'red',
    // },
    '& .MuiOutlinedInput-root': {
      borderRadius: 15,
      '& fieldset': {
        // borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.54)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.54)',
      },
    },
  },
}));

export default function Lectures() {
    const classes = useStyles();

    const dummyTxt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...';

    const [values, setValues] = React.useState({
      semester: '',
      lecture: '',
      checked: false,
      isAddLectureHidden: true,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    function showHideAddLecture() {
      setValues({
        ...values,
        semester: '',
        lecture: '',
        isAddLectureHidden: !values.isAddLectureHidden,
      });
    }

  return (
    <>
    <ThemeProvider theme={theme}>
        <Header />
        <Grid container
        direction='row'
        justfiyContent='space-evenly'
        sx={{mt: 8, mb: 30}}
        >
            <Navbar />

            <Grid item xs={9} sx={{ml: 7}}>
                  <Grid container
                  direction='column'
                  justifyContent=''
                  sx={{pl: 3}}
                  >
                    <Grid item>
                      <Typography sx={{fontSize: 25, fontWeight: 'bold', mb: 8}}>MY LECTURES</Typography>
                    </Grid>
                    {values.isAddLectureHidden ? (
                      <Grid item>
                        <Grid container
                        direction='row'
                        >
                          <Grid item xs={3} sx={{mb: 5}}>
                          <ThemeProvider theme={theme2}>
                              <Button
                                variant="contained"
                                fullWidth
                                onClick={showHideAddLecture}
                                sx={{lineHeight: '40px'}}
                                >
                                  Add New Lecture
                              </Button>
                            </ThemeProvider>
                          </Grid>
                        </Grid>
                      </Grid>
                    ): null}
                  </Grid>
                  {values.isAddLectureHidden ? null : (
                  <>
                  <Grid container
                  direction='column'
                  justifyContent=''
                  sx={{pl: 3}}
                  spacing={3}
                  >
                    <Grid item>
                      <Grid container
                      direction='row'
                      sx={{}}
                      >
                        <Grid item xs={2}>
                          <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Add New Lecture</Typography>
                          <hr />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container
                      direction='row'
                      sx={{}}
                      >
                        <Grid item xs={5} xl={4}>
                          <FormControl className={classes.textField} fullWidth>
                            <InputLabel>Semester</InputLabel>
                            <Select label="Semester"
                                value={values.semester}
                                onChange={handleChange('semester')}
                            >
                              <MenuItem value={1}>Fall Semester</MenuItem>
                              <MenuItem value={2}>Spring Semester</MenuItem>
                              <MenuItem value={3}>Summer School</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container
                        direction='row'
                        justifyContent=''
                        >
                          <Grid item xs={5} xl={4}>
                            <FormControl className={classes.textField} fullWidth>
                              <InputLabel>Lecture</InputLabel>
                              <Select label="Lecture"
                                  value={values.lecture}
                                  onChange={handleChange('lecture')}
                              >
                                <MenuItem value={1}>BIL343 (Object Oriented Programming)</MenuItem>
                                <MenuItem value={2}>BIL344 (Database Management Systems)</MenuItem>
                                <MenuItem value={3}>BILXXX (Lorem Impsum Text)</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <ThemeProvider theme={theme2}>
                          <Grid item sx={{ml: 7}}>
                              <Button
                                variant="contained"
                                fullWidth
                                onClick={""}
                                sx={{lineHeight: '40px'}}
                                >
                                Add lecture
                              </Button>
                          </Grid>
                          <Grid item sx={{ml: 2}}>
                              <Button
                                variant="contained"
                                fullWidth
                                onClick={showHideAddLecture}
                                sx={{lineHeight: '40px'}}
                                >
                                  Cancel
                              </Button>
                          </Grid>
                          </ThemeProvider>
                        </Grid>
                    </Grid>
                  </Grid>
                  <Grid container
                  direction='column'
                  sx={{mt: 4, pl: 3}}
                  >
                    <Grid item>
                      <hr />
                    </Grid>
                  </Grid>
                </>
                )}
                <>
                <Grid container
                direction='row'
                justifyContent='space-between'
                sx={{mt: 4, pl: 3}}
                >
                  <Grid item xs={5}>
                    <Grid item sx={{p: 3}} className={classes.textBox}>
                      <Grid container
                      direction='column'
                      spacing={4}
                      >
                        <Grid item>
                          <Typography variant='h2'>BIL343 - Object Oriented Programming</Typography>
                        </Grid> 
                        <Grid item>
                          <Typography variant='h3'>{dummyTxt}</Typography>
                        </Grid> 
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={5}>
                    <Grid item sx={{p: 3}} className={classes.textBox}>
                      <Grid container
                      direction='column'
                      spacing={4}
                      >
                        <Grid item>
                          <Typography variant='h2'>BIL344 - Database Management Systems</Typography>
                        </Grid> 
                        <Grid item>
                          <Typography variant='h3'>{dummyTxt}</Typography>
                        </Grid> 
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={5} sx={{mt: 4}}>
                    <Grid item sx={{p: 3}} className={classes.textBox}>
                      <Grid container
                      direction='column'
                      spacing={4}
                      >
                        <Grid item>
                          <Typography variant='h2'>BILXXX - Lorem Impsum Text</Typography>
                        </Grid> 
                        <Grid item>
                          <Typography variant='h3'>{dummyTxt}</Typography>
                        </Grid> 
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={5} sx={{mt: 4}}>
                    <Grid item sx={{p: 3}} className={classes.textBox}>
                      <Grid container
                      direction='column'
                      spacing={4}
                      >
                        <Grid item>
                          <Typography variant='h2'>BILXXX - Lorem Impsum Text</Typography>
                        </Grid> 
                        <Grid item>
                          <Typography variant='h3'>{dummyTxt}</Typography>
                        </Grid> 
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                </>
            </Grid>

        </Grid>
        <Footer />
    </ThemeProvider>
    </>
  );
}
