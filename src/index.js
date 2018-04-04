import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBCXy-hMWhi6tyMdiOSywy3WLc_BSOpmiA';

//Create a new component, this component should generate some HTML
const App = () => {
  return (<div>
            <SearchBar />
          </div>);
}
//Take this generated HTML and output it into the browser (In the DOM)
ReactDom.render(<App />, document.querySelector('.container'));