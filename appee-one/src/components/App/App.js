import React, { Component } from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CommentDetail
          nome='Eu'
          hora={new Date().toLocaleTimeString()}
          content='Hoje estou aqui. Já devo estar acabando.' />
        <CommentDetail
          nome='Elton John'
          hora={new Date().toLocaleTimeString()}
          content='She said time is unfair, for a woman of her age.' />
        <CommentDetail
          nome='Collective Soul'
          hora={new Date().toLocaleTimeString()}
          content='In the air am tasting my perfection' />
      </React.Fragment>
    )
  }
}

export default App;