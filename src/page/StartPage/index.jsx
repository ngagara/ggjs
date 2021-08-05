import React from 'react'
import { useHistory } from 'react-router';
import { Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    marginBottom: '10px',
  }
});

function StartPage() {

  const history = useHistory();
  const classes = useStyles();

  function handleClick() {
    history.push("/quiz");
  }
  
  return (
    <Container maxWidth="sm">
      <Button 
      onClick={handleClick}
      classes={{root: classes.root}} 
      variant="outlined" fullWidth={true} 
      size='large'>Start</Button>
    </Container>
  );
}

export default StartPage;