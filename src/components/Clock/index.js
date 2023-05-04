import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  //   it is a constructor function for set up initial state,
  //   in date variable we store the present date with Method new Date()

  componentDidMount() {
    console.log('Component Did Mount Called')
    this.timerID = setInterval(this.tick, 1000)
  }
  //   tick function renders after every one second with setInterval method

  componentWillUnmount() {
    console.log('Component will UnMount')
    clearInterval(this.timerID)
  }
  //   after usage of time we clear the method with clearInterval of method

  tick = () => {
    this.setState({date: new Date()})
  }
  //   this tick method update the state using setState after the setInterval method for one second
  //   it results time will change for one second and renders

  render() {
    const {date} = this.state
    console.log(date)

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
        {/* this toLocaleTimeString() Method gives only time from the date object 
        which it is from the new Date() method */}
      </div>
    )
  }
}
export default Clock
