const defaultState = {
    score: 0,
    currentQuestion: 0,
    userAnswers: [],
}

const ADD_SCORE = 'ADD_SCORE'
const NEXT_QUESTION = 'NEXT_QUESTION'

export const quizReducer = (state = defaultState, action) => {
  switch (action.type) {
      case ADD_SCORE:
          return { ...state, score: state.score + action.payload }
      case NEXT_QUESTION:
         return { ...state, currentQuestion: state.currentQuestion + action.payload }
      default:
        return state
  }
}

export const addScoreAction = (payload) => ({type: ADD_SCORE, payload})
export const changeQuestion = (payload) => ({type: NEXT_QUESTION, payload})
