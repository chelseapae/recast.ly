import VideoListEntry from './VideoListEntry.js';
import searchYouTube from '../lib/searchYouTube.js';


var VideoList = (props) => {
  console.log('props', props);
  // console.log('this', this);

  return (
    <div className="video-list">
      {props.videos.map(video => <VideoListEntry video={video} func={props.func}/>)}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
