import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import loginImg from '../assets/login.png';
import tabotIcon from '../assets/tabot.jpg';

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
          fontSize: 16,
          borderRadius: 10,
          height: '55px',
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
    fontSize: 25,
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
      fontSize: 20,
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
  textField: {
    backgroundColor: 'rgba(196, 196, 196, 0.10)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    '& label.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.54)',
      fontWeight: 'bold',
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'red',
    // },
    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
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
  checkbox: {
    padding: 0,
    color: 'black',
  },
  imgDiv: {
    [theme.breakpoints.down('sm')]: {
      maxHeight: '600px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxHeight: '600px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxHeight: '700px',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      maxHeight: '900px',
    },
    [theme.breakpoints.up('xl')]: {
      maxHeight: '900px',
    },
  },
  img: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  iconDiv: {
    [theme.breakpoints.down('sm')]: {
      position: "absolute",
      maxWidth: "200px",
      top: -5,
      left: 28,
      visibility: 'hidden',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      position: "absolute",
      maxWidth: "200px",
      top: 0,
      left: 29,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      position: "absolute",
      maxWidth: "200px",
      top: -15,
      left: 52,
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      position: "absolute",
      maxWidth: "200px",
      top: 0,
      left: 70,
    },
    [theme.breakpoints.up('xl')]: {
      position: "absolute",
      maxWidth: "200px",
      top: 30,
      left: 140,
    },
  },
  icon: {
    objectFit: "cover",
    height: "100px",
    width: "100px",
  },
  footer: {
    backgroundColor: 'rgba(196, 196, 196, 0.1)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    width: "100%",
    [theme.breakpoints.up('xl')]: {
      position:"fixed",
      bottom:0,
    },
  },
}));

export default function Login() {
  let navigate = useNavigate();
  const classes = useStyles();
  
  const [values, setValues] = React.useState({
    mailAdress: '',
    password: '',
    showPassword: false,
    checked: false,
  });

  useEffect(() => {
    if(sessionStorage.getItem('session'))
        navigate("/");
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeCheckbox = () => {
    setValues({
      ...values,
      checked: !values.checked,
    });
  };

  function login() {
    sessionStorage.setItem('session', 'username');
    navigate('/');
  };

  return (
      <>
        <ThemeProvider theme={theme}>
          <Grid container
          direction="row"
          alignItems={'center'}
          sx={{position: 'absolute'}}
          className={classes.iconDiv}
          >
            <img src={tabotIcon} alt="tabotIcon" className={classes.icon}/>
            <Typography variant='h2' sx={{display: 'inline-block'}}>TA-Bot</Typography>
          </Grid> 

          <Grid container
          direction="row"
          justifyContent="flex-end"
          className={classes.imgDiv}
          >
            <Grid item xs={4}
             sx={{mx: 'auto', my: 'auto'}}>
           
              {/* <Grid container
              direction="row"
              alignItems={'center'}
              >
                
              </Grid>  */}

              <Grid container
              direction="column"
              spacing={{ sm: 2, md: 3, lg: 3, xl: 5}}>
                <Grid item></Grid>
                <Grid item>
                  <Typography variant='h1'> Login to your account </Typography>
                </Grid>
                <Grid item></Grid>
                <Grid item></Grid>
                <Grid item>
                  <FormControl className={classes.textField} fullWidth variant="outlined">
                    <InputLabel>Mail adress</InputLabel>
                    <OutlinedInput
                    id="mailAdress"
                    label="Mail adress"
                    variant="outlined"
                    type="text"
                    value={values.mailAdress}
                    onChange={handleChange('mailAdress')}/>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.textField} fullWidth variant="outlined">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                    id="password"
                    label="Password"
                    variant="outlined"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }/>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Grid container
                  justifyContent="space-between">
                    <Grid item xs={8}>
                      <Grid container
                      direction={'row'}
                      justifyContent={'start'}
                      >
                        <Checkbox className={classes.checkbox}
                          checked={values.checked}
                          onChange={handleChangeCheckbox}
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                          defaultChecked
                          color="default"
                        />
                        <Typography variant='h3' sx={{display: 'inline', lineHeight: '25px', ml: 1}}> Remember me </Typography>
                      </Grid>
                    </Grid>
                    <Grid item alignContent={'center'}>
                      <Typography variant='h3' sx={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer', lineHeight: '25px'}}> Forgot password? </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <ThemeProvider theme={theme2}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={login}
                    >
                      LOGIN
                    </Button>
                  </ThemeProvider>
                </Grid>
                <Grid item>
                  <Grid container
                  justifyContent="center">
                    <Typography variant='h3'> Don't have an account? <Link to="/register"><Typography variant='h3' sx={{display: 'inline', fontWeight: 'bold', textDecoration: 'underline', color: 'black'}}>Register</Typography></Link></Typography>
                  </Grid>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>

            <Grid item xs={5} className={classes.imgDiv}>
              <img src={loginImg} alt="loginImg" className={classes.img}/>
            </Grid>

          </Grid>

          <Grid container
          direction="row"
          justifyContent="center"
          className={classes.footer}
          >
            <Typography variant='h3' sx={{ padding: 1}}> Copyright © 2021 TA-Bot Team | All Rights Reserved. </Typography>
          </Grid>
        </ThemeProvider>
    </>
  );
}
