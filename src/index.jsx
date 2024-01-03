import React from 'react';
import { createRoot } from 'react-dom/client';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

  // Starting the function when the component was mounted to the DOM
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  // Stopping the function after it's the component was unmounted from the DOM
  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<Clock />);