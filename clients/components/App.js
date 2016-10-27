import React, {Component} from 'react';
import Greetings from './Greetings.js';
import NavigationBar from './NavigationBar.js';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
