import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='ui content'>
        <CommentSection />
      </div>
    )
  }
}

export default App;