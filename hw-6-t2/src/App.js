import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      title: "Текущее время",
      date: new Date(),
      counter: 0
    }
  

  // setInterval(() => {
  //   this.setState((state, props) => ({
  //     date: new Date(),
  //     counter: state.counter + 1.
  //   }));
  // }, 1000);
} 

componentDidMount() {
  console.log("component did mount");

   this.intervalFlag = setInterval(() => {
    this.setState((state, props) => ({
      date: new Date(),
      counter: state.counter + 1.
    }));
  }, 1000);
}

componentDidUpdate() {
  console.log("component did update");
}

componentWillUnmount() {
  console.log("component will unmount");
  clearInterval(this.intervalFlag);
}

handleClick = () => {
 let show = !this.state.show;
this.setState({show: show})
} 

render() {
  return (
    <div>
      <p>{this.state.title}</p>
      <p>{this.state.counter}</p>
      <p>{this.state.date.toLocaleTimeString()}</p>
    </div>
  );
}
}

export default App;
