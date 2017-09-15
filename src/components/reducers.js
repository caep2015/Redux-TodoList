import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

const todos = (previousState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodoObject = { text: action.text, complete: false }
      return [...previousState, newTodoObject]//the old list plus the new one
    }
    case TOGGLE_TODO: {
      // one todo should have its completeness changed, the others should be left alone
      return previousState.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    }
  }
}

const visibilityFilter = (previousState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return previousState
  }
}
const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...previousState, visibilityFilter: visibilityFilter(previousState.visibilityFilter, action) }
    case ADD_TODO:
    case TOGGLE_TODO:
      return { ...previousState, todos: todos(previousState.todos, action) }
    default:
      return previousState
  }
}
