import React from 'react'
import { Button, Container } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { questions } from '../../data'
import { addScoreAction, changeQuestion } from './../../store/quizReducer';

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    marginBottom: '10px',
  }
});

function Quiz() {

  const dispatch = useDispatch();
  const classes = useStyles();
  const currentQuestion = useSelector(state => state.quiz.currentQuestion);
  const score = useSelector(state => state.quiz.score);

  const currentQuizDate = questions[currentQuestion];
  
  const handleClickAnswer = (answer, correctAnswer) => {
    dispatch(changeQuestion(1))
    if (answer === correctAnswer) {
        dispatch(addScoreAction(1))
    //   setUserAnswers(prev => [...prev, answer])
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
      <h3>{ currentQuestion+1 } / { questions.length }</h3>
      <h3>Правильных ответов {score}</h3>
    </Container>
  );
}

export default Quiz;