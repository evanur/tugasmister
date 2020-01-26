import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Box from '@material-ui/core/Box';

const tutorialSteps = [
  {
    imgPath:
      'https://s.misteraladin.com/images/template-landing-page/5b3000000000000000000000/5b3dfb976c2253033a77b113/misterkereta-1530788759-mobile.jpg',
  },
  {
    imgPath:
      'https://s.misteraladin.com/images/template-landing-page/5d9000000000000000000000/5d972c9e6c22535fb96b5cb7/leisurail-1570439083-mobile.jpg',
  },
  {
    imgPath:
      'https://s.misteraladin.com/images/template-landing-page/5bd000000000000000000000/5bd6e4f16c2253064016a915/kartu-kredit-maotf-1540809969-mobile.jpg',
  },
  {
    imgPath:
      'https://s.misteraladin.com/images/template-landing-page/5ac000000000000000000000/5aca41496c225340191c39d2/pemanasan-1523204425-mobile.jpg',
  },
  {
    imgPath:
      'https://s.misteraladin.com/images/template-landing-page/5bb000000000000000000000/5bb0ec7b6c22531786073205/promo-train-or-treat-1538321531-mobile.jpg',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 360,
    flexGrow: 1,
    marginLeft:10
  },
  img: {
    height: 195,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: 360,
  },
}));

function Stepperr() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Box className={classes.root}  >
      <Paper square elevation={0} >
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
}
export default Stepperr