import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Intro from './components/intro';
import About from './components/about';
import Portfolio from './components/portfolio';
import Timeline from './components/timeline';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-sidebar">
          <Sidebar />
        </div>
        
        <div className="App-body">
          <Intro />
          <About />
          <Portfolio />
          <Timeline />
        </div>
        
      </div>
    )
  }
}

export default App;
