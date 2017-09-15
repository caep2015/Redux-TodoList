const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
function addTodo(text) {
  return { type: ADD_TODO, text }
}
function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}
const reducer = (previousState = initialState, action = {}) => {
  if (action.type === SET_VISIBILITY_FILTER) {
    //return { visibilityFilter: action.filter, todos: previousState.todos }
    //return Object.assign({}, previousState, { visibilityFilter: action.filter })
    return { ...previousState, visibilityFilter: action.filter }
  } else if (action.type === ADD_TODO) {
    const newTodoObject = { text: action.text, complete: false }
    const newTodos = previousState.todos.concat(newTodoObject)//the old list plus the new one
  }
  return previousState
}
