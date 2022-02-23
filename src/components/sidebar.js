import React, { useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import homeWhite from "../assets/sidebar_icons/home_white.png";
import homeBlack from "../assets/sidebar_icons/home_black.png";
import lecturesWhite from "../assets/sidebar_icons/book_white.png";
import lecturesBlack from "../assets/sidebar_icons/book_black.jpg";
import formWhite from "../assets/sidebar_icons/form_white.png";
import formBlack from "../assets/sidebar_icons/form_black.jpg";
import statisticsWhite from "../assets/sidebar_icons/statistics_white.png";
import statisticsBlack from "../assets/sidebar_icons/statistics_black.png";
import { Context } from "../pages/Context";
import tabotIcon from "../assets/tabot.jpg";
import Avatar from "@mui/material/Avatar";

//css classes
const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: "rgba(196, 196, 196, 0.01)",
    boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.1)",
    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
  },
  sidebarIcons: {
    height: "25px",
    width: "25px",
  },
  sidebarItems: {
    backgroundColor: "#F3DD00",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "85%",
    borderRadius: "10px",
    transition: "width",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "#FFE800",
    },
  },
  icon: {
    objectFit: "cover",
    height: "80px",
    width: "80px",
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const location = useLocation();

  const { value1, value4 } = useContext(Context);
  const [isCollapsed, setIsCollapsed] = value1;
  const [currentUser, setCurrentUser] = value4;

  const currentWidth = window.innerWidth;

  function collapseSidebar() {
    // console.log(currentWidth);
    if (!isCollapsed) {
      setIsCollapsed(!isCollapsed);
      document.getElementById("side").style.width = (currentWidth / 12) * 8;
      document.getElementById("icon").style.width = "130px";
      document.getElementById("home").style.width = "80px";
      document.getElementById("lecture").style.width = "80px";
      document.getElementById("form").style.width = "80px";
      if (currentUser.userType !== "student") {
        document.getElementById("statistics").style.width = "80px";
      }
    } else {
      setIsCollapsed(!isCollapsed);
      document.getElementById("side").style.width = (currentWidth / 12) * 2;
      document.getElementById("icon").style.width = "100%";
      document.getElementById("home").style.width = "85%";
      document.getElementById("lecture").style.width = "85%";
      document.getElementById("form").style.width = "85%";
      if (currentUser.userType !== "student") {
        document.getElementById("statistics").style.width = "85%";
      }
    }
  }

  return (
    <>
      <Grid
        item
        id="side"
        xs={isCollapsed ? 1 : 2}
        className={classes.sidebar}
        onMouseOver={isCollapsed ? collapseSidebar : null}
      >
        <Grid
          container
          direction="column"
          justfiyContent="space-evenly"
          spacing={1}
          sx={{ mt: 1 }}
        >
          {/* <Grid
            item
            fullWidth
            id="icon"
            sx={{
              textAlign: "end",
              pr: 1,
              width: isCollapsed ? "130px" : null,
              transition: "width",
            }}
          >
            <IconButton onClick={collapseSidebar}>
              {isCollapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />}
            </IconButton>
          </Grid> */}
          <Grid
            item
            fullWidth
            id="icon"
            sx={{
              mt: 0,
              width: isCollapsed ? "80px" : null,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent=""
              sx={{ pl: isCollapsed ? 3 : 2 }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Grid item>
                  <img
                    src={tabotIcon}
                    alt="tabotIcon"
                    className={classes.icon}
                  />
                </Grid>
              </Link>
              {isCollapsed ? null : (
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <Grid item>
                    <Typography variant="h2" sx={{ lineHeight: "80px" }}>
                      TA-Bot
                    </Typography>
                  </Grid>
                </Link>
              )}
              <Grid item sx={{ ml: isCollapsed ? 0 : 9 }}>
                <IconButton onClick={collapseSidebar}>
                  {isCollapsed ? null : <ArrowLeftIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            fullWidth
            id="profile"
            sx={{
              mt: 3,
              width: isCollapsed ? "80px" : null,
              mx: isCollapsed ? 5 : 2,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent=""
              sx={{
                backgroundColor: isCollapsed
                  ? null
                  : location.pathname === "/profile" ? "#F3DD00" : "rgba(196, 196, 196, 0.08)",
                boxShadow: isCollapsed
                  ? null
                  : "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: isCollapsed ? null : 5,
                width: "98%",
                pl: isCollapsed ? 0 : 2,
              }}
            >
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Grid item sx={{ mt: isCollapsed ? 2 : 2, pr: 2 }}>
                  <Avatar
                    alt="user"
                    src=""
                    sx={{
                      height: "50px",
                      width: "50px",
                      color: "#FFFFFF",
                      backgroundColor: "#000000",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  />
                </Grid>
              </Link>
              {isCollapsed ? null : (
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Grid item>
                    <Typography
                      variant="h3"
                      sx={{
                        my: isCollapsed ? 0 : 2,
                        display: "inline-block",
                        fontWeight: "bold",
                        lineHeight: "50px",
                      }}
                    >
                      {currentUser.userName} {currentUser.userSurname}
                    </Typography>
                  </Grid>
                </Link>
              )}
            </Grid>
          </Grid>

          <Grid
            item
            fullWidth
            id="home"
            className={location.pathname === "/" ? classes.sidebarItems : null}
            sx={{
              mt: isCollapsed ? 13 : 2,
              mx: currentWidth > 1400 ? 3 : null,
              ml: 4,
              width: isCollapsed ? "80px" : "85%",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Grid
                container
                direction="row"
                justifyContent=""
                spacing={2}
                sx={{ ml: 0, color: "black" }}
              >
                <Grid item>
                  <img
                    src={location.pathname === "/" ? homeBlack : homeWhite}
                    className={classes.sidebarIcons}
                  />
                </Grid>
                {!isCollapsed ? (
                  <Grid item>
                    <Typography
                      sx={{
                        fontWeight: location.pathname === "/" ? "bold" : null,
                        lineHeight: "30px",
                        fontSize: 13,
                      }}
                    >
                      Home
                    </Typography>
                  </Grid>
                ) : null}
              </Grid>
            </Link>
          </Grid>
          <Grid
            item
            fullWidth
            id="lecture"
            className={
              location.pathname === "/lectures" || location.pathname === "/chat"
                ? classes.sidebarItems
                : null
            }
            sx={{
              mt: 2,
              mx: currentWidth > 1400 ? 3 : null,
              ml: 4,
              width: isCollapsed ? "80px" : null,
            }}
          >
            <Link to="/lectures" style={{ textDecoration: "none" }}>
              <Grid
                container
                direction="row"
                justifyContent=""
                spacing={2}
                sx={{ ml: 0, color: "black" }}
              >
                <Grid item>
                  <img
                    src={
                      location.pathname === "/lectures" ||
                      location.pathname === "/chat"
                        ? lecturesBlack
                        : lecturesWhite
                    }
                    className={classes.sidebarIcons}
                  />
                </Grid>
                {!isCollapsed ? (
                  <Grid item>
                    <Typography
                      sx={{
                        fontWeight:
                          location.pathname === "/lectures" ||
                          location.pathname === "/chat"
                            ? "bold"
                            : null,
                        lineHeight: "30px",
                        fontSize: 13,
                      }}
                    >
                      My Lectures
                    </Typography>
                  </Grid>
                ) : null}
              </Grid>
            </Link>
          </Grid>
          <Grid
            item
            fullWidth
            id="form"
            className={
              location.pathname === "/form" ? classes.sidebarItems : null
            }
            sx={{
              mt: 2,
              mx: currentWidth > 1400 ? 3 : null,
              ml: 4,
              width: isCollapsed ? "80px" : null,
            }}
          >
            <Link to="/form" style={{ textDecoration: "none" }}>
              <Grid
                container
                direction="row"
                justifyContent=""
                spacing={2}
                sx={{ ml: 0, color: "black" }}
              >
                <Grid item>
                  <img
                    src={location.pathname === "/form" ? formBlack : formWhite}
                    className={classes.sidebarIcons}
                  />
                </Grid>
                {!isCollapsed ? (
                  <Grid item>
                    <Typography
                      sx={{
                        fontWeight:
                          location.pathname === "/form" ? "bold" : null,
                        lineHeight: "30px",
                        fontSize: 13,
                      }}
                    >
                      Evaluation Form
                    </Typography>
                  </Grid>
                ) : null}
              </Grid>
            </Link>
          </Grid>
          {currentUser.userType === "student" ? null : (
            <Grid
              item
              fullWidth
              id="statistics"
              className={
                location.pathname === "/statistics"
                  ? classes.sidebarItems
                  : null
              }
              sx={{
                mt: 2,
                mx: currentWidth > 1400 ? 3 : null,
                ml: 4,
                width: isCollapsed ? "80px" : null,
              }}
            >
              <Link to="/statistics" style={{ textDecoration: "none" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent=""
                  spacing={2}
                  sx={{ ml: 0, color: "black" }}
                >
                  <Grid item>
                    <img
                      src={
                        location.pathname === "/statistics"
                          ? statisticsBlack
                          : statisticsWhite
                      }
                      className={classes.sidebarIcons}
                    />
                  </Grid>
                  {!isCollapsed ? (
                    <Grid item>
                      <Typography
                        sx={{
                          fontWeight:
                            location.pathname === "/statistics" ? "bold" : null,
                          lineHeight: "30px",
                          fontSize: 13,
                        }}
                      >
                        TA-Bot Statistics
                      </Typography>
                    </Grid>
                  ) : null}
                </Grid>
              </Link>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}
