import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID z4BCreM2_TSU2dJnS5ol8VDeHD0xBjg2Wf_KHMnmoz4'
      }
    });

    console.log(response.data.results);
    console.log(term);
  }

  render() {
    return(
      <div className = "ui container" style = {{ marginTop: '10px'}}>
    <SearchBar onSubmit={this.onSearchSubmit}/>
      </div >
    );
  }
}



export default App;
