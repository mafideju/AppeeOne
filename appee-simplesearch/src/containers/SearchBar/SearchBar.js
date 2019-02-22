import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  state = {
    text: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text)
    // console.log(this.state.text)
  }

  onInputChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <form
          className="ui input input__large gutter__small icon labeled"
          onSubmit={this.onFormSubmit}>
          <div className="ui label">Que Procuras?</div>
          <input
            onChange={this.onInputChange}
            value={this.state.text}
            placeholder="Digite Aqui..." />
          <i className="search icon"></i>
        </form>
      </React.Fragment>
    )
  }
}

export default SearchBar;