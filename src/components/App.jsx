import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: [],
      chosenVideo: exampleVideoData[0]
    };
  }

  componentDidMount() {
    searchYouTube('dog', (data) => {
      this.setState({
        allVideos: data
      });
    });
  }

  onListItemClick(video) {
    this.setState({
      chosenVideo: video
    });
  }

  handleSearchChange(value) {
    console.log(value);
    searchYouTube(value, (data) => {
      this.setState({
        allVideos: data
      });
    });

    $('.form-control').on('keyup change', function(event) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(searchYouTube(value, (data) => {
        this.setState({
          allVideos: data
        });
      }), 500);
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search func={this.handleSearchChange.bind(this)}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.chosenVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={this.state.allVideos} func={this.onListItemClick.bind(this)} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
