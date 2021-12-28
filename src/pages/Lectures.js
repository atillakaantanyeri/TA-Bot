import React, {useContext, useEffect} from 'react';
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
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import { Context } from './Context';

const theme = createTheme();

//button (black)
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

//button (yellow)
const theme3 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(0, 0, 0, 0.54)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 11,
          borderRadius: 15,
          height: '56px',
          marginTop: '',
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
    textAlign: 'center',
    height: '200px',
    cursor: 'pointer',
    transition: 'background-color 1s',
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

    const {value1, value2, value3} = useContext(Context);
    const [isCollapsed, setIsCollapsed] = value1;
    const [myLectures, setMyLectures] = value2;
    const [selectedLecture, setSelectedLecture] = value3;

    const dummyTxt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...';

    const [values, setValues] = React.useState({
      semester: '',
      lecture: '',
      checked: false,
      isAddLectureHidden: true,
      isDeleteLectureHidden: true,
      isMyLecturesHidden: true,
      isEditLectureHidden: true,
      showDeleteMsg: false,
      deletedLecture: '',
      showAddMsg: false,
      addMsg: '',
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    function showHideEditLecture() {
      if(values.isEditLectureHidden) {
        setValues({
          ...values,
          isEditLectureHidden: !values.isEditLectureHidden,
          isAddLectureHidden: !values.isAddLectureHidden,
        });
      } else if(!values.isAddLectureHidden) {
        setValues({
          ...values,
          semester: '',
          lecture: '',
          isEditLectureHidden: !values.isEditLectureHidden,
          isAddLectureHidden: !values.isAddLectureHidden,
        });
      } else if(!values.isDeleteLectureHidden) {
        setValues({
          ...values,
          semester: '',
          lecture: '',
          isEditLectureHidden: !values.isEditLectureHidden,
          isDeleteLectureHidden: !values.isDeleteLectureHidden,
        });
      }
    };

    function showHideAddLecture() {
      if(values.isAddLectureHidden) {
        setValues({
          ...values,
          semester: '',
          lecture: '',
          isAddLectureHidden: !values.isAddLectureHidden,
          isDeleteLectureHidden: !values.isDeleteLectureHidden,
          showDeleteMsg: false,
          showAddMsg: false,
        });
      } 
    };
    
    function showHideDeleteLecture() {
      if(values.isDeleteLectureHidden) {
        setValues({
          ...values,
          isAddLectureHidden: !values.isAddLectureHidden,
          isDeleteLectureHidden: !values.isDeleteLectureHidden,
          showDeleteMsg: false,
          showAddMsg: false,
        });
        if(!myLectures[0]) {
          setValues({
            ...values,
            isAddLectureHidden: !values.isAddLectureHidden,
            isDeleteLectureHidden: !values.isDeleteLectureHidden,
            isMyLecturesHidden: false,
          });
        } 
      }
    };

    function showMyLectures() {
      setValues({
        ...values,
        isMyLecturesHidden: !values.isMyLecturesHidden,
      });
    };

    function addLecture() {
      if(!values.semester && !values.lecture) {
        setValues({
          ...values,
          showAddMsg: true,
          addMsg: 'Please select semester and lecture',
        });
      } else if(!values.semester) {
        setValues({
          ...values,
          showAddMsg: true,
          addMsg: 'Please select a semester',
        });
      } else if(!values.lecture) {
        setValues({
          ...values,
          showAddMsg: true,
          addMsg: 'Please select a lecture',
        });
      } else {
        let tempLecture = values.lecture.split(' - ');
        setValues({
          ...values,
          semester: '',
          lecture: '',
          showAddMsg: true,
          addMsg: '\''+values.lecture+'\''+' successfully added!',
        });
        setMyLectures([
          ...myLectures,
          {
            code: tempLecture[0],
            name: tempLecture[1],
            description: dummyTxt,
          },
        ]);
      }
    };

    function deleteLecture(index) {
      let tempLectures = myLectures;
      setValues({
        ...values,
        showDeleteMsg: true,
        deletedLecture: tempLectures[index].code+ ' - ' +tempLectures[index].name,
      });
      tempLectures.splice(index,1);
      setMyLectures(tempLectures);
      if(!myLectures[0]) {
        setValues({
          ...values,
          isMyLecturesHidden: false,
        });
      } 
    };

    function selectLecture(lecture) {
      setSelectedLecture(lecture);
    };

  return (
    <>
    <ThemeProvider theme={theme}>
        <Header />
        <Grid container
        direction='row'
        justfiyContent='space-evenly'
        sx={{mt: 8, mb: 20}}
        >
            <Sidebar />
            <Grid item xs={isCollapsed ? 9 : 8} sx={{ml: 7}}>
                  <Grid container
                  direction='column'
                  justifyContent=''
                  sx={{pl: 3, mt:1 }}
                  >
                    <Grid item>
                      <Typography sx={{fontSize: 25, fontWeight: 'bold', mb: 8}}>MY LECTURES</Typography>
                    </Grid>
                    {values.isAddLectureHidden && values.isEditLectureHidden ? (
                      <>
                      <Grid item>
                        <Grid container
                        direction='row'
                        >
                          <Grid item xs={3} sx={{mb: 5}}>
                          <ThemeProvider theme={theme2}>
                              <Button
                                variant="contained"
                                fullWidth
                                onClick={showHideEditLecture}
                                sx={{lineHeight: '40px'}}
                                >
                                  Edit Lectures
                              </Button>
                            </ThemeProvider>
                          </Grid>
                          <Grid item xs={3} sx={{mb: 5, ml: 5}}>
                          <ThemeProvider theme={theme2}>
                              <Button
                                variant="contained"
                                fullWidth
                                onClick={showMyLectures}
                                sx={{lineHeight: '40px'}}
                                >
                                  {!values.isMyLecturesHidden ? 'Show My Lectures' : 'Hide My Lectures'}
                              </Button>
                            </ThemeProvider>
                          </Grid>
                        </Grid>
                      </Grid>
                      </>
                    ): null}
                  </Grid>
                  {values.isAddLectureHidden && values.isEditLectureHidden ? null : (
                    //EDIT LECTURES
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
                      justifyContent=''
                      sx={{}}
                      >
                        <Grid item  onClick={() => showHideAddLecture()} xs={3} sx={{cursor: 'pointer', pb: 2, borderBottom: values.isAddLectureHidden ? '1px solid black' : '2px solid black'}}>
                          <Typography sx={{fontSize: 15, fontWeight: values.isAddLectureHidden ? 'normal' : 800, textAlign: 'center',}}>Add New Lecture</Typography>
                        </Grid>
                        <Grid item onClick={() => showHideDeleteLecture()} xs={3} sx={{ml: 5, cursor: 'pointer', pb: 2, borderBottom: values.isDeleteLectureHidden ? '1px solid black' : '2px solid black'}}>
                          <Typography sx={{fontSize: 15, fontWeight: values.isDeleteLectureHidden ? 'normal' : 800, textAlign: 'center'}}>Delete Lecture</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    {values.isAddLectureHidden ? null : (
                      //ADD LECTURE
                      <>
                      <Grid item>
                        <Grid container
                        direction='row'
                        sx={{}}
                        >
                          <Grid item xs={4} xl={4}>
                            <FormControl className={classes.textField} fullWidth>
                              <InputLabel>Semester</InputLabel>
                              <Select label="Semester"
                                  value={values.semester}
                                  onChange={handleChange('semester')}
                                  >
                                <MenuItem value={'Fall'}>Fall Semester</MenuItem>
                                <MenuItem value={'Spring'}>Spring Semester</MenuItem>
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
                            <Grid item xs={4} xl={4}>
                              <FormControl className={classes.textField} fullWidth>
                                <InputLabel>Lecture</InputLabel>
                                <Select label="Lecture"
                                    value={values.lecture}
                                    onChange={handleChange('lecture')}
                                >
                                  <MenuItem value={'BILXXX - Lorem Impsum Text'}>BILXXX (Lorem Impsum Text)</MenuItem>
                                  <MenuItem value={'BILXXX - Lorem Impsum Text'}>BILXXX (Lorem Impsum Text)</MenuItem>
                                  <MenuItem value={'BILXXX - Lorem Impsum Text'}>BILXXX (Lorem Impsum Text)</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <ThemeProvider theme={theme2}>
                            <Grid item xs={2} sx={{ml: 7}}>
                                <Button
                                  variant="contained"
                                  fullWidth
                                  onClick={addLecture}
                                  sx={{lineHeight: '40px'}}
                                  >
                                  Add lecture
                                </Button>
                            </Grid>
                            <Grid item xs={1} sx={{ml: 2}}>
                                <Button
                                  variant="contained"
                                  fullWidth
                                  onClick={showHideEditLecture}
                                  sx={{lineHeight: '40px'}}
                                  >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={3} sx={{ml: 6}}>
                                <Button
                                  variant="contained"
                                  fullWidth
                                  onClick={showMyLectures}
                                  sx={{lineHeight: '40px'}}
                                  >
                                    {!values.isMyLecturesHidden ? 'Show My Lectures' : 'Hide My Lectures'}
                                </Button>
                            </Grid>
                            </ThemeProvider>
                          </Grid>
                      </Grid>
                      {values.showAddMsg ? (
                        <Grid item>
                          <Grid container
                            direction='row'
                            justifyContent='center'
                            >
                              <Grid item sx={{mt: 1, fontWeight: 'bold', color: values.addMsg.includes('select') ? 'red' : 'green'}}>
                                {values.addMsg}
                              </Grid>
                            </Grid>
                        </Grid>
                      ) : null}
                      </>
                    )}
                    {values.isDeleteLectureHidden ? null : (
                      //DELETE LECTURE
                      <>
                      <Grid item>
                        <Grid container
                        direction='row'
                        sx={{fontWeight: 'bold'}}
                        >
                          <Grid item xs={2} xl={2}>
                            Lecture Code
                          </Grid>
                          <Grid item xs={4} xl={3}>
                            Lecture Name
                          </Grid>
                          <Grid item xs={5} xl={4}>
                            Lecture Description
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>
                            Delete
                          </Grid>
                        </Grid>
                      </Grid>
                      {!myLectures[0] ? (
                        <Grid item>
                        <Grid container
                        direction='row'
                        sx={{}}
                        >
                          <Grid item xs={12} sx={{textAlign: 'center'}}>
                            You don't have any lectures. Please add new lectures to chat with TA-Bot.
                          </Grid>
                        </Grid>
                        </Grid>
                      ) : null}
                      {myLectures.map((lecture,index) => (
                      <>
                      <Grid item>
                        <Grid container
                        direction='row'
                        sx={{}}
                        >
                          <Grid item xs={2} xl={2}>
                            {lecture.code}
                          </Grid>
                          <Grid item xs={4} xl={3}>
                            {lecture.name}
                          </Grid>
                          <Grid item xs={5} xl={5}>
                            {lecture.description}
                          </Grid>
                          <Grid item xs={1} sx={{textAlign: 'center'}}>
                            <IconButton sx={{color: 'black'}} onClick={() => deleteLecture(index)}>
                              <DeleteIcon /> 
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                      </>
                      ))}
                      {values.showDeleteMsg ? (
                        <Grid item>
                          <Grid container
                          direction='row'
                          sx={{}}
                          >
                            <Grid item xs={12} sx={{textAlign: 'center', mt: 2, color: 'red', fontWeight: 'bold'}}>
                              '{values.deletedLecture}' successfully deleted! 
                            </Grid>
                          </Grid>
                        </Grid>
                      ) : null}
                      {myLectures[0] ? (
                      <Grid item sx={{mt: 10}}>
                        <Grid container
                          direction='row'
                          justifyContent='center'
                          >
                            <ThemeProvider theme={theme2}>
                              <Grid item xs={4}>
                                  <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={showMyLectures}
                                    sx={{lineHeight: '40px'}}
                                    >
                                      {!values.isMyLecturesHidden ? 'Show My Lectures' : 'Hide My Lectures'}
                                  </Button>
                              </Grid>
                            </ThemeProvider>
                          </Grid>
                      </Grid>
                      ) : null}
                      </>
                    )}
                  </Grid>
                </>
                )}
                {!values.isMyLecturesHidden ? (
                  <Grid item sx={{height: '400px'}}></Grid>
                ) : (
                //MY LECTURES
                <>
                <Grid container
                  direction='column'
                  sx={{mt: 4, pl: 3}}
                  >
                    <Grid item>
                      <hr />
                    </Grid>
                  </Grid>
                <Grid container
                direction='row'
                justifyContent='space-between'
                sx={{mt: 4, pl: 3}}
                >
                  {!myLectures[0] ? (
                    <Grid container
                    direction='row'
                    justifyContent='center'
                    sx={{height: '400px'}}
                    >
                      <Grid item>
                        You don't have any lectures. Please add new lectures to chat with TA-Bot.
                      </Grid>
                    </Grid>
                  ) : null}
                  {myLectures.map((lecture,index) => (
                  <Grid item xs={5} sx={{mt: index > 1 ? 4 : null}}>
                    <Grid item sx={{p: 3}} className={classes.textBox} onClick={() => selectLecture(lecture)}>
                      <Grid container
                      direction='column'
                      spacing={4}
                      >
                        <Grid item>
                          <Typography variant='h2'>{lecture.code} - {lecture.name}</Typography>
                        </Grid> 
                        <Grid item>
                          <Typography variant='h3'>{lecture.description}</Typography>
                        </Grid> 
                      </Grid>
                    </Grid>
                  </Grid>
                  ))}
                </Grid>
                </>
                )}
            </Grid>

        </Grid>
        <Footer />
    </ThemeProvider>
    </>
  );
}
