import React, { Component } from 'react';
// import axios from "axios";
import SearchBar from '../../containers/SearchBar/SearchBar';
import ImageList from '../../components/ImageList/ImageList';
import unsplash from '../../api/unsplash';
// import Displayer from "../../Displayer";
import './App.css';

class App extends Component {
  state = {
    images: []
  }
  onSearchSubmit = async (text) => {
    const res = await unsplash.get('/search/photos', {
      params: {
        query: text
      },
    });
    this.setState({
      images: res.data.results
    })
  }

  onMessagePass = (message) => {
    console.log('Props Passing');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        {/* <Displayer message={this.onMessagePass} /> */}
      </div>
    );
  }
}

export default App;
