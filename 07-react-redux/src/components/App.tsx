import { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos(): any
}

export default class _App extends Component<AppProps> {
  render() {
    return (
      <div>

        <h1>Hello World</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {

  return {
    todos
  }
}
export const App = connect(mapStateToProps, { fetchTodos })(_App)