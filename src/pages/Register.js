import React, {useEffect} from 'react';
import axios from 'axios';
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
          border: '1px solid rgba(0, 0, 0, 0.2)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 12,
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
          border: '1px solid rgba(0, 0, 0, 0.2)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 12,
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

//button (black)
const theme4 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 12,
          borderRadius: 10,
          height:'40px',
          width: '160px',
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
    userType: '',
    emailAddress: '',
    university: '',
    faculty: '',
    department: '',
    password: '',
    confirmPassword: '',
    errorMsg: '',
    isSelected: {
      university: false,
      faculty: false,
    },
    showPassword: false,
    showError: false,
    checked: false,
    stepper: 0,
  });

  const [universities, setUniversities] = React.useState([]);
  const [faculties, setFaculties] = React.useState([]);
  const [departments, setDepartments] = React.useState([]);

  const steps = [
    'Personal Information',
    'Select University',
    'Create Password',
  ];

  useEffect(() => {
    if(!values.university) {
      if(sessionStorage.getItem('session'))
        navigate("/");
      axios.get(`http://localhost:4000/api/universities/getall`)
      .then(res => {
        setUniversities(res.data);
      });
    } else {
      axios.get('http://localhost:4000/api/faculties/getByUniversityId?universityId='+values.university+'')
      .then(res => {
        setFaculties(res.data);
      });
      if(values.faculty) {
        axios.get('http://localhost:4000/api/departments/getByFacultyId?facultyId='+values.faculty+'')
        .then(res => {
          setDepartments(res.data);
        });
      }
    }
  }, [values.university, values.faculty]);

  //TODO 
  // chat page demo, evaluation form.

  const handleChange = (prop) => (event) => {
    if(prop === 'university') {
      setValues({
        ...values,
        university: event.target.value,
        faculty: '',
        department: '',
        isSelected: {
          university: true,
          faculty: false,
        },
      });
    } else if(prop === 'faculty') {
      setValues({
        ...values,
        faculty: event.target.value,
        department: '',
        isSelected: {
          university: true,
          faculty: true,
        },
      });
    } else {
      setValues({ ...values, [prop]: event.target.value });
    }
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

  function nextStep(stepper) {
    if(stepper === 0) {
      if(values.fName && values.lName && values.emailAddress) {
        if(values.emailAddress.includes('@') && values.emailAddress.includes('.edu')) {
          setValues({
            ...values,
            stepper: values.stepper + 1,
            showError: false,
          });
        } else {
          setValues({
            ...values,
            showError: true,
            errorMsg: "Email address must be ' ...@mail.baskent.edu.tr ' format",
          });
        }
      } else {
        setValues({
          ...values,
          showError: true,
          errorMsg: 'Please fill all input areas',
        });
      }
    } else if(stepper === 1) {
      if(values.university) {
        if(values.faculty) {
          if(values.department) {
            setValues({
              ...values,
              stepper: values.stepper + 1,
              showError: false,
            });
          } else {
            setValues({
              ...values,
              showError: true,
              errorMsg: 'Please select a department',
            });
          }
        } else {
          setValues({
            ...values,
            showError: true,
            errorMsg: 'Please select a faculty',
          });
        }
      } else {
        setValues({
          ...values,
          showError: true,
          errorMsg: 'Please select a university',
        });
      }
    }
  };

  function previousStep() {
    setValues({
        ...values,
        stepper: values.stepper - 1,
        showError: false,
      });
  };

  function register(stepper) {
    if(stepper === 2) {
      if(values.password && values.confirmPassword) {
        if(values.password.length >= 8) {
          if(values.password === values.confirmPassword) {
            if(values.checked) {
              saveUser();
            } else {
              setValues({
                ...values,
                showError: true,
                errorMsg: 'Please accept terms and policies',
              });
            }
          } else {
            setValues({
              ...values,
              showError: true,
              errorMsg: 'Passwords does not match',
            });
          }
        } else {
          setValues({
            ...values,
            showError: true,
            errorMsg: 'Password must be at least 8 digits',
          });
        }
      } else {
        setValues({
          ...values,
          showError: true,
          errorMsg: 'Please fill all input areas',
        });
      }
    }
  };

  function SHA256(s){

 


    var chrsz   = 8;


    var hexcase = 0;

 


    function safe_add (x, y) {


        var lsw = (x & 0xFFFF) + (y & 0xFFFF);


        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);


        return (msw << 16) | (lsw & 0xFFFF);


    }

 


    function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }


    function R (X, n) { return ( X >>> n ); }


    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }


    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }


    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }


    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }


    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }


    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

 


    function core_sha256 (m, l) {


        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);


        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);


        var W = new Array(64);


        var a, b, c, d, e, f, g, h, i, j;


        var T1, T2;

 


        m[l >> 5] |= 0x80 << (24 - l % 32);


        m[((l + 64 >> 9) << 4) + 15] = l;

 


        for ( var i = 0; i<m.length; i+=16 ) {


            a = HASH[0];


            b = HASH[1];


            c = HASH[2];


            d = HASH[3];


            e = HASH[4];


            f = HASH[5];


            g = HASH[6];


            h = HASH[7];

 


            for ( var j = 0; j<64; j++) {


                if (j < 16) W[j] = m[j + i];


                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);

 


                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);


                T2 = safe_add(Sigma0256(a), Maj(a, b, c));

 


                h = g;


                g = f;


                f = e;


                e = safe_add(d, T1);


                d = c;


                c = b;


                b = a;


                a = safe_add(T1, T2);


            }

 


            HASH[0] = safe_add(a, HASH[0]);


            HASH[1] = safe_add(b, HASH[1]);


            HASH[2] = safe_add(c, HASH[2]);


            HASH[3] = safe_add(d, HASH[3]);


            HASH[4] = safe_add(e, HASH[4]);


            HASH[5] = safe_add(f, HASH[5]);


            HASH[6] = safe_add(g, HASH[6]);


            HASH[7] = safe_add(h, HASH[7]);


        }


        return HASH;


    }

 


    function str2binb (str) {


        var bin = Array();


        var mask = (1 << chrsz) - 1;


        for(var i = 0; i < str.length * chrsz; i += chrsz) {


            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);


        }


        return bin;


    }

 


    function Utf8Encode(string) {


        string = string.replace(/\r\n/g,"\n");


        var utftext = "";

 


        for (var n = 0; n < string.length; n++) {

 


            var c = string.charCodeAt(n);

 


            if (c < 128) {


                utftext += String.fromCharCode(c);


            }


            else if((c > 127) && (c < 2048)) {


                utftext += String.fromCharCode((c >> 6) | 192);


                utftext += String.fromCharCode((c & 63) | 128);


            }


            else {


                utftext += String.fromCharCode((c >> 12) | 224);


                utftext += String.fromCharCode(((c >> 6) & 63) | 128);


                utftext += String.fromCharCode((c & 63) | 128);


            }

 


        }

 


        return utftext;


    }

 


    function binb2hex (binarray) {


        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";


        var str = "";


        for(var i = 0; i < binarray.length * 4; i++) {


            str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +


            hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);


        }


        return str;


    }

 


    s = Utf8Encode(s);


    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));

 

  }

  function hash(s) {
    const hashed = SHA256(s);
    // console.log(hashed);
    setValues({
      ...values,
      password: hashed,
    });
    return hashed
  }

  function saveUser() {
    let hashedPassword = hash(values.password);
    let userType = '';
    if(isUserStudent()) {
      setValues({
        ...values,
        userType: "student",
      });
      userType = 'student';
    } else {
      setValues({
        ...values,
        userType: "lecturer",
      });
      userType = 'lecturer';
    }
    saveUserToDb(hashedPassword, userType);
  }


  function isUserStudent() {
    let count = 0;
    const mail = values.emailAddress.split('@');
    for(let i = 0; i < 10; i++) {
      if(mail[0].includes(i.toString())) {
        count++;
        break;
      }
    }
    if(count > 0)
      return true
  }

  function saveUserToDb(hashed, userType) {
    const userData = 
    {
      email: values.emailAddress,
      password: hashed,
      userName: values.fName,
      userSurname: values.lName,
      userType: userType,
      userId: 0,
      lecturId: 0,
      departmentId: values.department,
    };
    axios.post('http://localhost:4000/api/users/save-user', userData, {
      headers: {'Content-Type': 'application/json'}
    })
    .then(function (response) {
      console.log(response);
      navigate('/login');
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
  }
  

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
                    <InputLabel>Email address</InputLabel>
                    <OutlinedInput
                    id="emailAddress"
                    label="Email address"
                    variant="outlined"
                    type="text"
                    value={values.emailAddress}
                    onChange={handleChange('emailAddress')}/>
                  </FormControl>
                </Grid>
                {values.showError ? (
                  <Grid item>
                    <Grid container
                    direction="row"
                    justifyContent="center">
                      <Grid item sx={{lineHeight: '40px', color: 'red'}}>
                        <Typography variant='h3'> {values.errorMsg} </Typography>
                      </Grid>
                    </Grid>
                </Grid>
                ) : (
                  <Grid item></Grid>
                )}
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
                        onClick={() => nextStep(values.stepper)}
                        sx={{lineHeight: '40px'}}
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
                      {universities.map((university) => (
                        <MenuItem value={university.universityId}>{university.universityName}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.textField} fullWidth>
                    <InputLabel>Faculty</InputLabel>
                    {values.isSelected.university ? (
                    <Select label="Faculty"
                    value={values.faculty}
                    onChange={handleChange('faculty')}
                    >
                      {faculties.map((faculty) => (
                        <MenuItem value={faculty.facultyId}>{faculty.facultyName}</MenuItem>
                      ))}
                    </Select>
                    ) : (
                    <Select label="Faculty"
                    value={values.faculty}
                    onChange={handleChange('faculty')}
                    disabled>
                      {faculties.map((faculty) => (
                        <MenuItem value={faculty.facultyId}>{faculty.facultyName}</MenuItem>
                      ))}
                    </Select>
                    )}
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.textField} fullWidth>
                    <InputLabel>Department</InputLabel>
                    {values.isSelected.faculty ? (
                    <Select label="Department"
                        value={values.department}
                        onChange={handleChange('department')}
                    >
                      {departments.map((department) => (
                        <MenuItem value={department.departmentId}>{department.departmentName}</MenuItem>
                      ))}
                    </Select>
                    ) : (
                    <Select label="Department"
                      value={values.department}
                      onChange={handleChange('department')}
                      disabled>
                        {departments.map((department) => (
                          <MenuItem value={department.departmentId}>{department.departmentName}</MenuItem>
                        ))}
                    </Select>
                    )}
                  </FormControl>
                </Grid>
                {values.showError ? (
                  <Grid item>
                    <Grid container
                    direction="row"
                    justifyContent="center">
                      <Grid item sx={{lineHeight: '40px', color: 'red'}}>
                        <Typography variant='h3'> {values.errorMsg} </Typography>
                      </Grid>
                    </Grid>
                </Grid>
                ) : (
                  <Grid item></Grid>
                )}
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
                        sx={{lineHeight: '40px'}}
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
                        onClick={() => nextStep(values.stepper)}
                        sx={{lineHeight: '40px'}}
                        >
                        NEXT <ArrowForwardIcon sx={{ml: 1, mb: 0, height: 18, width: 18,}}/>
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
                {values.showError ? (
                  <Grid item>
                    <Grid container
                    direction="row"
                    justifyContent="center">
                      <Grid item sx={{lineHeight: '40px', color: 'red'}}>
                        <Typography variant='h3'> {values.errorMsg} </Typography>
                      </Grid>
                    </Grid>
                </Grid>
                ) : (
                  <Grid item></Grid>
                )}
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
                        sx={{lineHeight: '40px'}}
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
                        onClick={() => register(values.stepper)}
                        sx={{width: '160px'}}
                        sx={{lineHeight: '40px'}}
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
