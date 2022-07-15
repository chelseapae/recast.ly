import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    var result = searchYouTube('', function(data) {
      return data;
    });

    this.state = {
      allVideos: [],
      chosenVideo: exampleVideoData[0]
    };
    console.log('constructor this.state', this.state);
  }

  componentDidMount() {
    // searchYouTube('cats', function(data) {
    //   console.log('data', data);
    //   console.log('this compenentdidmount', this)
    //   for (var i = 0; i < data.length; i++) {
    //     this.state.allVideos.push(data[i]);
    //   }
    //   // this.state.allVideos.push(data);
    // });
  }

  onListItemClick(video) {
    // console.log('video', video);
    // console.log('searchYouTube', searchYouTube());
    this.setState({
      chosenVideo: video
    });
  }

  render() {
    searchYouTube('cats', function(data) {
      console.log('data', data);
      console.log('this compenentdidmount', this)
      for (var i = 0; i < data.length; i++) {
        this.state.allVideos.push(data[i]);
      }
    });
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
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
