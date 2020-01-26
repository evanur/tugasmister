import React from 'react'
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Gambar from '../../asset/mister.jpeg'
import ForumIcon from '@material-ui/icons/Forum';


function Apps(props){
    const {classes}= props;
    return(
        <Box display="flex" justifyContent="center">
            <AppBar position="static" className={classes.app}>
            <Toolbar>
            <IconButton className={classes.icon}>
                <MenuIcon/>
            </IconButton>
            <Typography className={classes.tulisan}>mister <img src={Gambar} style={{height:20,width:30}} alt=''/> aladin</Typography>
            <IconButton className={classes.pesan}>
                <ForumIcon/>
            </IconButton>
            </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Apps