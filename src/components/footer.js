import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

//text themes
{
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
    footer: {
        backgroundColor: 'rgba(196, 196, 196, 0.1)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        width: "100%",
        [theme.breakpoints.up('xl')]: {
          bottom: 0,
          visibility: 'hidden'
        },
      },
  }));

export default function Header() {
    const classes = useStyles();

  return (
    <>
        <Grid container
        direction="row"
        justifyContent="center"
        className={classes.footer}
        >
          <Typography variant='h3' sx={{ padding: 1}}> Copyright © 2021 TA-Bot Team | All Rights Reserved. </Typography>
        </Grid>
    </>
  );
}
