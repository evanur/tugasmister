import React from 'react'
import Container from '@material-ui/core/Container';
import Appbar from '../../component/appbar'
import Stepperr from '../../component/stepper'
import Grids from'../../component/grid'
import Card from '../../component/card'

function Home(){
    return(
    <Container maxWidth="xs">
        <Appbar/>
        <Stepperr/>
        <Grids/>
        <Card/>
    </Container>
    );
}
export default Home