import * as React from 'react';
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
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import PropTypes from 'prop-types';
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import registerImg from '../assets/register.png';
import tabotIcon from '../assets/tabot.jpg';

const theme = createTheme();

//button (yellow)
const theme2 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(0, 0, 0, 0.54)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 13,
          borderRadius: 10,
          height:'40px',
          width: '120px',
          backgroundColor: '#F3DD00',
          '&:hover': {
            backgroundColor: '#FFE800',
          },
        },
      }
    }
  }
});
//button (grey)
const theme3 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(0, 0, 0, 0.54)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 13,
          borderRadius: 10,
          height:'40px',
          width: '160px',
          backgroundColor: 'rgba(196, 196, 196, 0.6)',
          '&:hover': {
            backgroundColor: 'rgba(196, 196, 196, 0.3)',
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
      right: -5,
      visibility: 'hidden',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      position: "absolute",
      maxWidth: "200px",
      top: 0,
      right: 29,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      position: "absolute",
      maxWidth: "200px",
      top: -15,
      right: 52,
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      position: "absolute",
      maxWidth: "200px",
      top: 0,
      right: 35,
    },
    [theme.breakpoints.up('xl')]: {
      position: "absolute",
      maxWidth: "200px",
      top: 30,
      right: 120,
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

//stepper customization
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.label}`]: {
      fontWeight: '',
    },  
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#F3DD00',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#F3DD00',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#F3DD00',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#F3DD00',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));
function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}
QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};


export default function Register() {
  let navigate = useNavigate();
  const classes = useStyles();
  
  const [values, setValues] = React.useState({
    fName: '',
    lName: '',
    mailAdress: '',
    university: '',
    faculty: '',
    department: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    checked: false,
    stepper: 0,
  });

  const steps = [
    'Personal Information',
    'Select University',
    'Create Password',
  ];

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

  function nextStep() {
    setValues({
        ...values,
        stepper: values.stepper + 1,
      });
  };

  function previousStep() {
    setValues({
        ...values,
        stepper: values.stepper - 1,
      });
  };

  function register() {
    navigate('/login');
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
            <Typography variant='h2' sx={{display: 'inline-block'}}>TA-Bot</Typography>
            <img src={tabotIcon} alt="tabotIcon" className={classes.icon}/>
          </Grid> 

          <Grid container
          direction="row"
          justifyContent="flex-end"
          className={classes.imgDiv}
          >

            <Grid item xs={5} className={classes.imgDiv}>
              <img src={registerImg} alt="registerImg" className={classes.img}/>
            </Grid>

            <Grid item xs={4}
             sx={{mx: 'auto', my: 'auto'}}>
               
              <Grid container
              direction="column"
              spacing={{ sm: 2, md: 3, lg: 3, xl: 5}}>
                <Grid item></Grid>
                <Grid item></Grid>
                <Grid item>
                  <Typography variant='h1'> Create a new account </Typography>
                </Grid>
                <Grid item></Grid>
                <Grid item> 
                <Stepper activeStep={values.stepper} alternativeLabel connector={<QontoConnector />}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={QontoStepIcon}
                      sx={{
                        '& .MuiStepLabel-label.Mui-active': {
                          fontWeight: 'bold',
                        },
                      }}>
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
                </Grid>
                {values.stepper === 0 ? (
                <>
                <Grid item>
                  <FormControl className={classes.textField} fullWidth variant="outlined">
                    <InputLabel>First Name</InputLabel>
                    <OutlinedInput
                    id="fName"
                    label="First Name"
                    variant="outlined"
                    type="text"
                    value={values.fName}
                    onChange={handleChange('fName')}/>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.textField} fullWidth variant="outlined">
                    <InputLabel>Last Name</InputLabel>
                    <OutlinedInput
                    id="lName"
                    label="Last Name"
                    variant="outlined"
                    type="text"
                    value={values.lName}
                    onChange={handleChange('lName')}/>
                  </FormControl>
                </Grid>
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
                <Grid item></Grid>
                <Grid item>
                  <Grid container
                  direction="row"
                  justifyContent="space-between">
                    <Grid item sx={{lineHeight: '40px'}}>
                      <Typography variant='h3'> Already have an account? <Link to="/login"><Typography variant='h3' sx={{display: 'inline', fontWeight: 'bold', textDecoration: 'underline', color: 'black'}}>Login</Typography></Link></Typography>
                    </Grid>
                    <Grid item>
                      <ThemeProvider theme={theme2}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={nextStep}
                        >
                        NEXT <ArrowForwardIcon sx={{ml: 1, height: 18, width: 18,}}/>
                      </Button>
                    </ThemeProvider>
                    </Grid>
                  </Grid>
                </Grid>
                </>
                ) : null}
                {values.stepper === 1 ? (
                <>
                <Grid item>
                  <FormControl className={classes.textField} fullWidth>
                    <InputLabel>University</InputLabel>
                    <Select label="University"
                        value={values.university}
                        onChange={handleChange('university')}
                    >
                      <MenuItem value={1}>Baskent University</MenuItem>
                      <MenuItem value={2}>Bilkent University</MenuItem>
                      <MenuItem value={2}>Hacettepe University</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.textField} fullWidth>
                    <InputLabel>Faculty</InputLabel>
                    <Select label="Faculty"
                        value={values.faculty}
                        onChange={handleChange('faculty')}
                    >
                      <MenuItem value={1}>Engineering</MenuItem>
                      <MenuItem value={2}>Medicine</MenuItem>
                      <MenuItem value={3}>Law</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.textField} fullWidth>
                    <InputLabel>Department</InputLabel>
                    <Select label="Department"
                        value={values.department}
                        onChange={handleChange('department')}
                    >
                      <MenuItem value={1}>Biomedical Engineering</MenuItem>
                      <MenuItem value={2}>Computer Engineering</MenuItem>
                      <MenuItem value={3}>Electrical and Electronics Engineering</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item></Grid>
                <Grid item>
                  <Grid container
                  direction="row"
                  justifyContent="flex-end">
                    <Grid item sx={{mr: 5}}>
                      <ThemeProvider theme={theme3}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={previousStep}
                        >
                        <ArrowBackIcon sx={{mr: 1, height: 18, width: 18,}}/> PREVIOUS
                      </Button>
                    </ThemeProvider>
                    </Grid>
                    <Grid item>
                      <ThemeProvider theme={theme2}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={nextStep}
                        >
                        NEXT <ArrowForwardIcon sx={{ml: 1, height: 18, width: 18,}}/>
                      </Button>
                    </ThemeProvider>
                    </Grid>
                  </Grid>
                </Grid>
                </>
                ) : null}
                {values.stepper === 2 ? (
                <>
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
                  <FormControl className={classes.textField} fullWidth variant="outlined">
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput
                    id="confirmPassword"
                    label="Confirm Password"
                    variant="outlined"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.confirmPassword}
                    onChange={handleChange('confirmPassword')}
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
                  direction="row"
                  justifyContent="flex-start"
                  >
                    <Grid item xs={1}>
                      <Checkbox className={classes.checkbox}
                        checked={values.checked}
                        onChange={handleChangeCheckbox}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        defaultChecked
                        color="default"
                      />
                      </Grid>
                      <Grid item xs={11}>
                      <Typography variant='h3' sx={{display: 'inline-block', ml: 1, lineHeight: '25px',}}> By creating an account means you agree to the Terms and Conditions, and our Privacy Policy.</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item></Grid>
                <Grid item>
                  <Grid container
                  direction="row"
                  justifyContent="flex-end">
                    <Grid item sx={{mr: 5}}>
                      <ThemeProvider theme={theme3}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={previousStep}
                        >
                        <ArrowBackIcon sx={{mr: 1, height: 18, width: 18,}}/> PREVIOUS
                      </Button>
                    </ThemeProvider>
                    </Grid>
                    <Grid item>
                      <ThemeProvider theme={theme2}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={register}
                        sx={{width: '160px'}}
                        >
                        REGISTER
                      </Button>
                    </ThemeProvider>
                    </Grid>
                  </Grid>
                </Grid>
                </>
                ) : null}
                <Grid item></Grid>
              </Grid>
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
