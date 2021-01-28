import React from 'react';
import ReactDOM from 'react-dom'

// referred to as P by convention
interface AppProps {
  color?: string
}
// referred to as S by convention
interface AppState {
  counter: number
}
class App extends React.Component<AppProps, AppState> {
  // this redefines the existing state property that is a ReadOnly value
  // if you pass in the AppState interface, the following will override it
  state = { counter: 0 }

  // the initial 'react' value of state - not overwritten
  // constructor(props: AppProps) {
  //   super(props)
  //   this.state = {
  //     counter: 0
  //   }
  // }

  handleIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 })
  }

  handleDecrement = (): void => {
    this.setState({ counter: Math.max(this.state.counter - 1, 0), })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <h1>Count: {this.state.counter}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))