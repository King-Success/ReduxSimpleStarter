import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBCXy-hMWhi6tyMdiOSywy3WLc_BSOpmiA';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {Videos: []};
    YTSearch({key: API_KEY, term: 'github'}, function(Videos){
      this.setState({Videos});
    });
  }
  
  render(){
    return (<div>
            <SearchBar />
          </div>);
  }
  
}
ReactDom.render(<App />, document.querySelector('.container'));