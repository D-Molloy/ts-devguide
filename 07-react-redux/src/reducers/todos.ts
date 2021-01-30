import { Todo, FetchTodosAction } from '../actions'
import { ActionTypes } from '../actions/types'

// state is going to be an array of todos and its default value is an empty array
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload
    default:
      return state
  }
}