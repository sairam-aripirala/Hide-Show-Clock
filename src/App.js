import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    showClock: false,
  }

  onToggleClock = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {
        showClock: !showClock,
      }
    })
  }
  //   this toggle function updates the previous state of showClock
  //   and return the exact opposite to the prevState with !(not)

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
          //   this is for button to toggle the text
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
          {/* //using ternary operator// */}
        </button>
        {showClock && <Clock />}
        {/* this && operator works when the condition satisfy, 
        Here when showClock condition is true then only Clock component shows */}
      </div>
    )
  }
}

export default App
