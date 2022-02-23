import React, { useEffect, useContext } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginImg from "../assets/login.png";
import tabotIcon from "../assets/tabot.jpg";
import { Context } from "./Context";

const theme = createTheme();

//button
const theme2 = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0, 0, 0, 0.3)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          color: "black",
          fontWeight: "bold",
          fontSize: 16,
          borderRadius: 10,
          height: "55px",
          backgroundColor: "#F3DD00",
          "&:hover": {
            backgroundColor: "#FFE800",
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
    fontSize: 25,
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
      fontSize: 20,
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
  checkbox: {
    padding: 0,
    color: "black",
  },
  imgDiv: {
    [theme.breakpoints.down("sm")]: {
      maxHeight: "600px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      maxHeight: "600px",
    },
    [theme.breakpoints.between("md", "lg")]: {
      maxHeight: "700px",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      maxHeight: "900px",
    },
    [theme.breakpoints.up("xl")]: {
      maxHeight: "900px",
    },
  },
  img: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  iconDiv: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      maxWidth: "200px",
      top: -5,
      left: 28,
      visibility: "hidden",
    },
    [theme.breakpoints.between("sm", "md")]: {
      position: "absolute",
      maxWidth: "200px",
      top: 0,
      left: 29,
    },
    [theme.breakpoints.between("md", "lg")]: {
      position: "absolute",
      maxWidth: "200px",
      top: -15,
      left: 52,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      position: "absolute",
      maxWidth: "200px",
      top: 0,
      left: 70,
    },
    [theme.breakpoints.up("xl")]: {
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
    backgroundColor: "rgba(196, 196, 196, 0.1)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "100%",
    [theme.breakpoints.up("xl")]: {
      position: "fixed",
      bottom: 0,
    },
  },
}));

export default function Login() {
  let navigate = useNavigate();
  const classes = useStyles();

  const { value1, value4 } = useContext(Context);
  const [isCollapsed, setIsCollapsed] = value1;
  const [currentUser, setCurrentUser] = value4;

  const [values, setValues] = React.useState({
    emailAdress: "",
    password: "",
    showPassword: false,
    checked: false,
    showError: false,
    errorMsg: "",
  });

  useEffect(() => {
    if (sessionStorage.getItem("session")) navigate("/");
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

  function SHA256(s) {
    var chrsz = 8;

    var hexcase = 0;

    function safe_add(x, y) {
      var lsw = (x & 0xffff) + (y & 0xffff);

      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);

      return (msw << 16) | (lsw & 0xffff);
    }

    function S(X, n) {
      return (X >>> n) | (X << (32 - n));
    }

    function R(X, n) {
      return X >>> n;
    }

    function Ch(x, y, z) {
      return (x & y) ^ (~x & z);
    }

    function Maj(x, y, z) {
      return (x & y) ^ (x & z) ^ (y & z);
    }

    function Sigma0256(x) {
      return S(x, 2) ^ S(x, 13) ^ S(x, 22);
    }

    function Sigma1256(x) {
      return S(x, 6) ^ S(x, 11) ^ S(x, 25);
    }

    function Gamma0256(x) {
      return S(x, 7) ^ S(x, 18) ^ R(x, 3);
    }

    function Gamma1256(x) {
      return S(x, 17) ^ S(x, 19) ^ R(x, 10);
    }

    function core_sha256(m, l) {
      var K = new Array(
        0x428a2f98,
        0x71374491,
        0xb5c0fbcf,
        0xe9b5dba5,
        0x3956c25b,
        0x59f111f1,
        0x923f82a4,
        0xab1c5ed5,
        0xd807aa98,
        0x12835b01,
        0x243185be,
        0x550c7dc3,
        0x72be5d74,
        0x80deb1fe,
        0x9bdc06a7,
        0xc19bf174,
        0xe49b69c1,
        0xefbe4786,
        0xfc19dc6,
        0x240ca1cc,
        0x2de92c6f,
        0x4a7484aa,
        0x5cb0a9dc,
        0x76f988da,
        0x983e5152,
        0xa831c66d,
        0xb00327c8,
        0xbf597fc7,
        0xc6e00bf3,
        0xd5a79147,
        0x6ca6351,
        0x14292967,
        0x27b70a85,
        0x2e1b2138,
        0x4d2c6dfc,
        0x53380d13,
        0x650a7354,
        0x766a0abb,
        0x81c2c92e,
        0x92722c85,
        0xa2bfe8a1,
        0xa81a664b,
        0xc24b8b70,
        0xc76c51a3,
        0xd192e819,
        0xd6990624,
        0xf40e3585,
        0x106aa070,
        0x19a4c116,
        0x1e376c08,
        0x2748774c,
        0x34b0bcb5,
        0x391c0cb3,
        0x4ed8aa4a,
        0x5b9cca4f,
        0x682e6ff3,
        0x748f82ee,
        0x78a5636f,
        0x84c87814,
        0x8cc70208,
        0x90befffa,
        0xa4506ceb,
        0xbef9a3f7,
        0xc67178f2
      );

      var HASH = new Array(
        0x6a09e667,
        0xbb67ae85,
        0x3c6ef372,
        0xa54ff53a,
        0x510e527f,
        0x9b05688c,
        0x1f83d9ab,
        0x5be0cd19
      );

      var W = new Array(64);

      var a, b, c, d, e, f, g, h, i, j;

      var T1, T2;

      m[l >> 5] |= 0x80 << (24 - (l % 32));

      m[(((l + 64) >> 9) << 4) + 15] = l;

      for (var i = 0; i < m.length; i += 16) {
        a = HASH[0];

        b = HASH[1];

        c = HASH[2];

        d = HASH[3];

        e = HASH[4];

        f = HASH[5];

        g = HASH[6];

        h = HASH[7];

        for (var j = 0; j < 64; j++) {
          if (j < 16) W[j] = m[j + i];
          else
            W[j] = safe_add(
              safe_add(
                safe_add(Gamma1256(W[j - 2]), W[j - 7]),
                Gamma0256(W[j - 15])
              ),
              W[j - 16]
            );

          T1 = safe_add(
            safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]),
            W[j]
          );

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

    function str2binb(str) {
      var bin = Array();

      var mask = (1 << chrsz) - 1;

      for (var i = 0; i < str.length * chrsz; i += chrsz) {
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - (i % 32));
      }

      return bin;
    }

    function Utf8Encode(string) {
      string = string.replace(/\r\n/g, "\n");

      var utftext = "";

      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode((c >> 6) | 192);

          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);

          utftext += String.fromCharCode(((c >> 6) & 63) | 128);

          utftext += String.fromCharCode((c & 63) | 128);
        }
      }

      return utftext;
    }

    function binb2hex(binarray) {
      var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";

      var str = "";

      for (var i = 0; i < binarray.length * 4; i++) {
        str +=
          hex_tab.charAt((binarray[i >> 2] >> ((3 - (i % 4)) * 8 + 4)) & 0xf) +
          hex_tab.charAt((binarray[i >> 2] >> ((3 - (i % 4)) * 8)) & 0xf);
      }

      return str;
    }

    s = Utf8Encode(s);

    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
  }

  function login() {
    if (values.emailAdress && values.password) {
      const hashed = SHA256(values.password);
      axios
        .post("http://localhost:4000/api/users/login-user", {
          password: hashed,
          userEmail: values.emailAdress,
        })
        .then(function (response) {
          console.log(response);
          if (response.data) {
            setCurrentUser(response.data);
            sessionStorage.setItem("session", response.data.userId);
            setIsCollapsed(false);
            navigate("/");
          } else {
            setValues({
              ...values,
              showError: true,
              errorMsg: "User does not exist!",
            });
          }
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    } else {
      setValues({
        ...values,
        showError: true,
        errorMsg: "Please fill all input areas",
      });
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="row"
          alignItems={"center"}
          sx={{ position: "absolute" }}
          className={classes.iconDiv}
        >
          <img src={tabotIcon} alt="tabotIcon" className={classes.icon} />
          <Typography variant="h2" sx={{ display: "inline-block" }}>
            TA-Bot
          </Typography>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          className={classes.imgDiv}
        >
          <Grid item xs={4} sx={{ mx: "auto", my: "auto" }}>
            <Grid
              container
              direction="column"
              spacing={{ sm: 2, md: 3, lg: 3, xl: 5 }}
            >
              <Grid item></Grid>
              <Grid item>
                <Typography variant="h1"> Login to your account </Typography>
              </Grid>
              <Grid item></Grid>
              <Grid item></Grid>
              <Grid item>
                <FormControl
                  className={classes.textField}
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel>Email adress</InputLabel>
                  <OutlinedInput
                    id="emailAdress"
                    label="Email adress"
                    variant="outlined"
                    type="text"
                    value={values.emailAdress}
                    onChange={handleChange("emailAdress")}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl
                  className={classes.textField}
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    label="Password"
                    variant="outlined"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item xs={8}>
                    <Grid container direction={"row"} justifyContent={"start"}>
                      <Checkbox
                        className={classes.checkbox}
                        checked={values.checked}
                        onChange={handleChangeCheckbox}
                        inputProps={{ "aria-label": "primary checkbox" }}
                        defaultChecked
                        color="default"
                      />
                      <Typography
                        variant="h3"
                        sx={{ display: "inline", lineHeight: "25px", ml: 1 }}
                      >
                        {" "}
                        Remember me{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item alignContent={"center"}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                        cursor: "pointer",
                        lineHeight: "25px",
                      }}
                    >
                      {" "}
                      Forgot password?{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {values.showError ? (
                <Grid item sx={{ padding: 0 }}>
                  <Grid container direction="row" justifyContent="center">
                    <Grid item sx={{ lineHeight: "0px", mb: 2, color: "red" }}>
                      <Typography variant="h3"> {values.errorMsg} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid item></Grid>
              )}
              <Grid item>
                <ThemeProvider theme={theme2}>
                  <Button variant="contained" fullWidth onClick={login}>
                    LOGIN
                  </Button>
                </ThemeProvider>
              </Grid>
              <Grid item>
                <Grid container justifyContent="center">
                  <Typography variant="h3">
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/register">
                      <Typography
                        variant="h3"
                        sx={{
                          display: "inline",
                          fontWeight: "bold",
                          textDecoration: "underline",
                          color: "black",
                        }}
                      >
                        Register
                      </Typography>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>

          <Grid item xs={5} className={classes.imgDiv}>
            <img src={loginImg} alt="loginImg" className={classes.img} />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          className={classes.footer}
        >
          <Typography variant="h3" sx={{ padding: 1 }}>
            {" "}
            Copyright © 2021 TA-Bot Team | All Rights Reserved.{" "}
          </Typography>
        </Grid>
      </ThemeProvider>
    </>
  );
}
