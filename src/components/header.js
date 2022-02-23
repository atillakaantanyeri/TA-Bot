import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

//css classes
const useStyles = makeStyles((theme) => ({
  profile: {
    height: "40px",
    width: "40px",
    color: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
}));

export default function Header() {
  let navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    if (!sessionStorage.getItem("session")) navigate("/login");
  }, []);

  function logOut() {
    sessionStorage.setItem("session", "");
    sessionStorage.clear();
  }
  //TODO
  //LOGIN,REGISTER VE LOGOUT ISLEMLERI ICIN ALERTLER DUZENLENECEK
  return (
    <>
      <Grid item>
        <Grid container direction="row" justifyContent="end">
          <Grid item>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Avatar
                alt="user"
                src=""
                sx={{ backgroundColor: "#000000" }}
                className={classes.profile}
              />
            </Link>
          </Grid>
          <Grid item sx={{ lineHeight: "65px", pl: 6 }}>
            <DarkModeIcon sx={{ height: "35px", width: "35px" }} />
          </Grid>
          <Grid item sx={{ pl: 4 }}>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
                lineHeight: "65px",
              }}
            >
              <MeetingRoomIcon
                sx={{ height: "35px", width: "35px" }}
                onClick={logOut}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
