import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBCXy-hMWhi6tyMdiOSywy3WLc_BSOpmiA';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null, 
    };

    this.videoSearch('Bill gates');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }
  

  render(){
    const VideoSearch = _.debounce((term) => { this.videoSearch(term)}, 1000);
    return (<div>
            <SearchBar onSearchTermChange={ VideoSearch } />
            <VideoDetails video={this.state.selectedVideo}/>
            <VideoList 
            onVideoSelect={(selectedVideo) => { this.setState({selectedVideo}) }}
            videos={this.state.videos} 
            />
          </div>);
  }
  
}
ReactDom.render(<App />, document.querySelector('.container'));