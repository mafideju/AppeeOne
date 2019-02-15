import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit(e) {
    e.preventDefault();
    // vai dar erro
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit} >
          <div className="field">
            <label htmlFor="searchInput">Image Search</label>
            <input
              type="text"
              id="searchInput"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
