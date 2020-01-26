import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Liburan from '../../asset/libur.jpeg'
import Typography from '@material-ui/core/Typography';
import Liburs from '../../asset/liburan.jpg';
import Ceria from '../../asset/ceria.jpeg'
import Deal from '../../asset/deal.jpg'


function Cards(props){
    const {classes}=props
    return(
   <Box className={classes.grid}>
   <Typography className={classes.tulis}>What'S On</Typography>
    <Grid container spacing={5}>
        <Grid item xs={6}>
            <Card className={classes.card}><img src={Liburan} className={classes.liburan} alt=""/></Card>
        </Grid>
        <Grid item xs={6}>
            <Card className={classes.card}><img src={Liburs} className={classes.liburan} alt=""/></Card>
        </Grid>
        <Grid item xs={6}>
            <Card className={classes.card}><img src={Ceria} className={classes.liburan} alt=""/></Card>
        </Grid>
        <Grid item xs={6}>
            <Card className={classes.card}><img src={Deal} className={classes.liburan} alt=""/></Card>
        </Grid>
    </Grid>
   </Box>
    ); 
}
export default Cards