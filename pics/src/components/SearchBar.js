import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log('Input was clicked')
  }

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onClick={this.onInputClick} onChange={(e) => this.setState({ term: e.target.value})} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
