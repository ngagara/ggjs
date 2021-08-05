import React from 'react'
import './App.css'
import { Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { questions } from './data'

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    marginBottom: '10px',
  }
});

function App() {

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [score, setScore] = React.useState(0);

  const classes = useStyles();

  const currentQuizDate = questions[currentQuestion];
  
  const handleClickAnswer = (answer, correctAnswer) => {
    setCurrentQuestion(prev => ++prev)
    if (answer === correctAnswer) {
      setScore(prev => ++prev)
      setUserAnswers(prev => [...prev, answer])
    }
  }

  return (
    <Container maxWidth="sm">
      <pre>{currentQuizDate.question}</pre>
       { 
         Object.entries(currentQuizDate.options).map(([answer, value]) => (
          <Button key={answer} 
          classes={{root: classes.root}} 
          onClick={()=>handleClickAnswer(answer, currentQuizDate.correctAnswer)} 
          variant="outlined" fullWidth={true} 
          size='large'>{value}</Button>
         ))
       }
      <h3>{currentQuestion+1} / {questions.length}</h3>
      <h3>Правильных ответов {score}</h3>
    </Container>
  );
}

export default App;
