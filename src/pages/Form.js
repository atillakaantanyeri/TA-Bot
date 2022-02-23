import React, { useState, useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@mui/material/Select";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const theme = createTheme();

//button (black)
const theme2 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0, 0, 0, 0.54)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          color: "white",
          fontWeight: "bold",
          fontSize: 11,
          borderRadius: 15,
          height: "40px",
          marginTop: "",
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
          },
        },
      },
    },
  },
});
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

//css classes
const useStyles = makeStyles((theme) => ({
  textField: {
    backgroundColor: "rgba(196, 196, 196, 0.10)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    "& label.Mui-focused": {
      color: "rgba(0, 0, 0, 0.54)",
      fontWeight: "bold",
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'red',
    // },
    "& .MuiOutlinedInput-root": {
      borderRadius: 10,
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
  textField2: {
    backgroundColor: "rgba(196, 196, 196, 0.10)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    "& label.Mui-focused": {
      color: "rgba(0, 0, 0, 0.54)",
      fontWeight: "bold",
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'red',
    // },
    "& .MuiOutlinedInput-root": {
      borderRadius: 10,
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
}));

export default function Form() {
  const classes = useStyles();
  const navigate = useNavigate();

  const { value1, value2, value3, value4 } = useContext(Context);
  const [isCollapsed, setIsCollapsed] = value1;
  const [currentUser, setCurrentUser] = value4;

  const [values, setValues] = React.useState({
    lectures: "",
    answers: {
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      ans5: "",
      ans6: "",
      ans7: "",
      ans8: "",
      ans9: "",
      ans10: "",
      ans11: "",
    },
    isSubmitted: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function sendForm() {
    navigate("/");
  }

  function surveySubmit() {}

  function answersSelected() {}

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Header /> */}
        <Grid
          container
          direction="row"
          justfiyContent="space-evenly"
          sx={{ height: "800px" }}
        >
          <Sidebar />

          <Grid
            item
            xs={isCollapsed ? 10 : 9}
            sx={{ mt: 5, mx: "auto", mb: 10 }}
          >
            <Header />
            <Grid
              container
              direction="column"
              justifyContent=""
              sx={{ pl: 3, mt: 1 }}
            >
              <Grid item>
                <Typography sx={{ fontSize: 25, fontWeight: "bold", mb: 8 }}>
                  EVALUATION FORM
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent=""
              sx={{ pl: 3, mt: 1 }}
            >
              <Grid item>
                <Typography sx={{ fontSize: 14, fontWeight: "" }}>
                  Your opinion are valuable for us. Please fill the following
                  statements based on your experience with our application.{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent=""
              sx={{ pl: 3, mt: 3 }}
            >
              <Grid item xs={3}>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold", lineHeight: "56px" }}
                >
                  Lecture name to be evaluated:{" "}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl className={classes.textField} fullWidth>
                  <InputLabel>Select lecture</InputLabel>
                  <Select
                    label="Select lecture"
                    value={values.lectures}
                    onChange={handleChange("lectures")}
                  >
                    <MenuItem value={"Database Management Systems"}>
                      Database Management Systems
                    </MenuItem>
                    <MenuItem value={"Object Oriented Programming"}>
                      Object Oriented Programming
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent=""
              sx={{ pl: 3, mt: 3 }}
            >
              <Grid item xs={3}>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold", lineHeight: "56px" }}
                >
                  Name of the evaluator:{" "}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "", lineHeight: "56px" }}
                >
                  {" "}
                  {currentUser.userName} {currentUser.userSurname}{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" sx={{ mt: 0 }}>
              <div className="App">
                <form onSubmit={surveySubmit}>
                  <br />
                  <div class="table">
                    <table>
                      <tr>
                        <th class="col1" id="baslik1">
                          Evaluate the app
                        </th>
                        <th class="col2">Strongly Disagree</th>
                        <th class="col3">Disagree</th>
                        <th class="col4">Neutral</th>
                        <th class="col5">Agree</th>
                        <th class="col6">Strongly Agree</th>
                      </tr>
                      <tr>
                        <td class="col1">1) TA-Bot was easy to use.</td>
                        <td>
                          <input
                            type="radio"
                            name="ans1"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans1"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans1"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans1"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans1"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="col1">
                          2) TA-Bot is designed in accordance with user's needs.
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans2"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans2"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans2"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans2"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans2"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="col1">
                          3) The services provided in TA-Bot are sufficient,
                          according to the promised features.
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans3"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans3"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans3"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans3"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans3"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th class="col1" id="baslik2">
                          Evaluate the service you recieved
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                      <tr>
                        <td class="col1">
                          1) I was able to get the correct answers to the
                          questions I asked.
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans4"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans4"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans4"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans4"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans4"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="col1">
                          2) I found the answers to my questions sufficient.
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans5"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans5"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans5"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans5"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans5"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="col1">
                          3) The answers given were consistent with the course
                          content.
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans6"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans6"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans6"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans6"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans6"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="col1">
                          4) The answers given were pretty self-explanatory.
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans7"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans7"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans67"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans7"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans7"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="col1">
                          5) The language TA-Bot used in it's answers were
                          clear.
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans8"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans8"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans8"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans8"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans8"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="col1">
                          6) After using the application, I did not feel the
                          need to direct my questions to the lecturer of the
                          course.
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans9"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans9"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans9"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans9"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans9"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="col1">
                          7) The content of TA-Bot was sufficient for the course
                          content.
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans10"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans10"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans10"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans10"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans10"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="col1">
                          8) I would reccomend TA-Bot to other students.
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans11"
                            value="strongDisagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans11"
                            value="disagree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans11"
                            value="neutral"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans11"
                            value="agree"
                            onChange={answersSelected}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="ans11"
                            value="strongAgree"
                            onChange={answersSelected}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </form>
              </div>
            </Grid>
            <Grid container direction="row" sx={{ pl: 3, mt: 3 }}>
              <Grid item xs={3}>
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  We welcome your suggestions{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" sx={{ pl: 3, mt: 1 }}>
              <Grid item xs={6}>
                <Typography sx={{ fontSize: 14, fontWeight: "" }}>
                  {" "}
                  If you have additional comments or suggestions regarding the
                  TA-Bot application, please write them in the box below.
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" sx={{ pl: 3, mt: 2 }}>
              <Grid item xs={6}>
                <FormControl
                  className={classes.textField2}
                  fullWidth
                  variant="outlined"
                >
                  <OutlinedInput
                    id="emailAdress"
                    variant="outlined"
                    type="text"
                    value={values.suggestion}
                    onChange={handleChange("suggestion")}
                    sx={{ height: "100px" }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <ThemeProvider theme={theme2}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => sendForm()}
                    sx={{ ml: 5, mt: 7 }}
                  >
                    SEND
                  </Button>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
