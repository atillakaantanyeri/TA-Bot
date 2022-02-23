import React, { useContext, useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Context } from "./Context";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

const theme = createTheme();
//text themes
{
  theme.typography.h1 = {
    fontSize: 40,
    // '@media (min-width:600px)': {
    //   fontSize: 60,
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 25,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("xl")]: {
      // color: 'purple',
    },
  };

  theme.typography.h2 = {
    fontSize: 20,
    // '@media (min-width:600px)': {
    //   fontSize: 60,
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 10,
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 15,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 15,
    },
    [theme.breakpoints.up("xl")]: {
      // color: 'purple',
    },
  };

  theme.typography.h3 = {
    fontSize: 15,
    fontWeight: "normal",
    // '@media (min-width:600px)': {
    //   fontSize: 60,
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: 6,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 10,
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 12,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: 15,
    },
    [theme.breakpoints.up("xl")]: {
      // color: 'purple',
    },
  };
}

const theme2 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0, 0, 0, 0.54)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          color: "white",
          fontWeight: "bold",
          backgroundColor: "black",
          boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.25)",
          height: "50px",
          lineHeight: "50px",
          borderRadius: 40,
          fontSize: 12,
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
          },
        },
      },
    },
  },
});

//css classes
const useStyles = makeStyles((theme) => ({
  scrollable: {
    overflow: "auto",
    height: "400px",
    maxHeight: "400px",
  },
  textField: {
    backgroundColor: "white",
    boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "start",
    height: "50px",
    lineHeight: "50px",
    borderRadius: 40,
    "& label.Mui-focused": {
      color: "rgba(0, 0, 0, 0.54)",
      fontWeight: "bold",
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'red',
    // },
    "& .MuiOutlinedInput-root": {
      borderRadius: 40,
      backgroundColor: "white",
      boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.25)",
      textAlign: "start",
      height: "50px",
      lineHeight: "50px",
      "& fieldset": {
        // borderColor: 'red',
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.54)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0, 0, 0, 0.54)",
      },
    },
  },
  botMsgBox: {
    backgroundColor: "#F3DD00",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    textAlign: "start",
  },
  botMsgTitle: {
    fontWeight: "bold",
    paddingLeft: "30px",
    paddingTop: "10px",
    fontSize: 16,
  },
  botMsgContent: {
    paddingTop: "5px",
    paddingBottom: "20px",
    paddingLeft: "30px",
    paddingRight: "15px",
    fontSize: 14,
  },
  userMsgBox: {
    backgroundColor: "black",
    color: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    textAlign: "start",
  },
  userMsgTitle: {
    fontWeight: "bold",
    paddingRight: "30px",
    paddingTop: "10px",
    paddingLeft: "30px",
    fontSize: 16,
  },
  userMsgContent: {
    paddingTop: "5px",
    paddingBottom: "15px",
    paddingRight: "15px",
    paddingLeft: "30px",
    fontSize: 14,
  },
  inputBox: {
    backgroundColor: "white",
    boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "start",
    height: "50px",
    lineHeight: "50px",
    borderRadius: 40,
  },
}));

export default function Chat() {
  const classes = useStyles();
  let navigate = useNavigate();
  const messageEl = useRef(null);
  const { value1, value2, value3, value4 } = useContext(Context);
  const [isCollapsed, setIsCollapsed] = value1;
  const [myLectures, setMyLectures] = value2;
  const [selectedLecture, setSelectedLecture] = value3;
  const [currentUser, setCurrentUser] = value4;
  const [values, setValues] = React.useState({
    isVisible: false,
    userMsg: "",
  });
  const [msgDemo, setMsgDemo] = React.useState([]);
  const questions = [
    {
      q: "what is a database",
      a: "A collection of data.",
    },
    {
      q: "what is database management systems",
      a: "A software designed to assist in maintaining and utilizing large collections of data.",
    },
  ];

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        //console.log(target)
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  useEffect(() => {
    if (!selectedLecture.code) {
      navigate("/lectures");
    }
  }, []);

  function sendMsg() {
    console.log(values.userMsg);
    const answer = findAnswer();
    if (answer) {
      setMsgDemo([
        ...msgDemo,
        {
          txt: values.userMsg,
          senderType: "user",
        },
        {
          txt: answer,
          senderType: "bot",
        },
      ]);
    }
    setValues({
      ...values,
      userMsg: "",
    });
    //myRef.current.scrollIntoView(); //chat component yap sonra scrollIntoView dene
    //console.log(myRef);
  }

  function findAnswer() {
    let answer = "";
    questions.forEach((question) => {
      3;
      if (values.userMsg === question.q) {
        answer = question.a;
      }
    });
    return answer;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Header /> */}
        <Grid container direction="row" justfiyContent="space-evenly" sx={{}}>
          <Sidebar />
          <Grid
            item
            xs={isCollapsed ? 10 : 9}
            sx={{ mt: 5, mx: "auto", mb: 10 }}
          >
            <Header />
          <Grid
            item
            xs={isCollapsed ? 10 : 10}
            sx={{
              mt: 5,
              mb: 10,
              mx: "auto",
              backgroundColor: "rgba(196, 196, 196, 0.10)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: 15,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              sx={{}}
            >
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  sx={{ mb: 2 }}
                >
                  <Grid
                    item
                    xs={10}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 20,
                      mt: 4,
                      textAlign: "center",
                    }}
                  >
                    {selectedLecture.code} - {selectedLecture.name}
                    <hr />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{}}
                className={classes.scrollable}
                ref={messageEl}
              >
                {/* BOT MSG */}
                <Grid
                  container
                  direction="row"
                  justifyContent="start"
                  sx={{}}
                  id="scrollable"
                >
                  <Grid
                    item
                    xs={5}
                    sx={{ mt: 1, ml: 3 }}
                    className={classes.botMsgBox}
                  >
                    <Grid container direction="column">
                      <Grid item className={classes.botMsgTitle}>
                        Teaching Assistant Bot (TA-Bot)
                      </Grid>
                      <Grid item className={classes.botMsgContent}>
                        Hi there {currentUser.userName}{" "}
                        {currentUser.userSurname}, I am TA-Bot! You can ask
                        anything about '{selectedLecture.name}'
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {msgDemo ? (
                  <>
                    {msgDemo.map((msg) => (
                      <>
                        {msg.senderType === "user" ? (
                          <Grid container direction="row" justifyContent="end">
                            <Grid
                              item
                              xs={5}
                              sx={{ mt: 1, mr: 3 }}
                              className={classes.userMsgBox}
                            >
                              <Grid
                                item
                                className={classes.userMsgTitle}
                                sx={{}}
                              >
                                {currentUser.userName} {currentUser.userSurname}
                              </Grid>
                              <Grid item className={classes.userMsgContent}>
                                {msg.txt}?
                              </Grid>
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid
                            container
                            direction="row"
                            justifyContent="start"
                            sx={{ mb: 2 }}
                          >
                            <Grid
                              item
                              xs={5}
                              sx={{ mt: 1, ml: 3 }}
                              className={classes.botMsgBox}
                            >
                              <Grid container direction="column">
                                <Grid item className={classes.botMsgTitle}>
                                  Teaching Assistant Bot (TA-Bot)
                                </Grid>
                                <Grid item className={classes.botMsgContent}>
                                  {msg.txt}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        )}
                      </>
                    ))}
                  </>
                ) : null}
              </Grid>

              <Grid item xs={12}>
                {/* INPUT AREA */}
                <Grid
                  container
                  direction="row"
                  justifyContent="end"
                  sx={{ mb: 2, pr: 8 }}
                >
                  <Grid item xs={8} sx={{ mt: 8, mr: 8 }}>
                    <Grid item>
                      <FormControl
                        className={classes.textField}
                        fullWidth
                        variant="outlined"
                        onKeyPress={(e) =>
                          e.key === "Enter" ? sendMsg() : null
                        }
                      >
                        <OutlinedInput
                          id="userMsg"
                          variant="outlined"
                          type="text"
                          value={values.userMsg}
                          onChange={handleChange("userMsg")}
                          sx={{}}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sx={{ mt: 8, mr: 8 }}
                    className={classes.inputBox}
                  >
                    <Grid item>
                      <ThemeProvider theme={theme2}>
                        <Button
                          variant="contained"
                          fullWidth
                          onClick={() => sendMsg()}
                          sx={{ lineHeight: "50px" }}
                        >
                          Send
                        </Button>
                      </ThemeProvider>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
          <Footer />
        </Grid>
      </ThemeProvider>
    </>
  );
}
