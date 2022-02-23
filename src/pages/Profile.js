import React, { useContext, useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { Context } from "./Context";

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

//css classes
const useStyles = makeStyles((theme) => ({}));

export default function Profile() {
  const classes = useStyles();
  const { value1 } = useContext(Context);
  const [isCollapsed, setIsCollapsed] = value1;

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
            Profile Page
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </>
  );
}
