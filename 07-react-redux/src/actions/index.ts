import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'
const url = `https://jsonplaceholder.typicode.com/todos`

export interface Todo {
  id: number,
  title: string,
  completed: Boolean
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos
  payload: Todo[]
}
export const fetchTodos = () => {

  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url).catch(err => console.log(err))

    if (response && response.data) {
      dispatch<FetchTodosAction>({
        type: ActionTypes.fetchTodos,
        payload: response.data
      })
    }
  }
}