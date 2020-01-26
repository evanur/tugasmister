import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BusinessIcon from '@material-ui/icons/Business';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TrainIcon from '@material-ui/icons/Train';
import FlightIcon from '@material-ui/icons/Flight';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Grids(props){
  const{classes}=props
  return(
      <React.Fragment className={classes.root}>
          <Grid container spacing={5} className={classes.grid}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <IconButton className={classes.hotel}>
                  <BusinessIcon/>
                </IconButton>
              </Paper>
                <Typography className={classes.tulisan}>hotels</Typography>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <IconButton className={classes.kreta}>
                  <TrainIcon/>
                </IconButton>
              </Paper>
              <Typography className={classes.tulisan}>Trains</Typography>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <IconButton className={classes.pesawat}>
                  <FlightIcon/>
                </IconButton>
              </Paper>
              <Typography className={classes.tulisan}>Dom.Flights</Typography>
            </Grid>


            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <IconButton className={classes.mall}>
                  <LocalMallIcon/>
                </IconButton>
              </Paper>
                <Typography className={classes.tulisan}>hotels</Typography>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <IconButton className={classes.kreta}>
                  <TrainIcon/>
                </IconButton>
              </Paper>
              <Typography className={classes.tulisan}>Trains</Typography>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <IconButton className={classes.pesawat}>
                  <FlightIcon/>
                </IconButton>
              </Paper>
              <Typography className={classes.tulisan}>intl.Flights</Typography>
            </Grid>



          </Grid>
      </React.Fragment>
        );
      }
export default Grids