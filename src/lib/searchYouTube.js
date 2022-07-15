import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

console.log(YOUTUBE_API_KEY);

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  console.log('query', query);
  console.log('callback', callback);

  // $.ajaxPrefilter(function (settings, _, jqXHR) {
  //   jqXHR.setRequestHeader('Authorization', API_KEY);
  // });

  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {key: YOUTUBE_API_KEY, q: query, maxResults: 10},
    // dataType: 'object',
    contentType: 'application/json',
    // success: function(data) {
    //   console.log('success', data);
    // },
    success: callback,
    error: function(error) {
      console.log('searchYouTube: Failed to fetch videos array', error);
    }
  }
  );
  // $.get( {url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos'}, {key: YOUTUBE_API_KEY}, {data: {key: YOUTUBE_API_KEY, q: 'cats', maxResults: 10}}, function( data ) {
  //   console.log('success', data);
  // })
  //   .done(function() {
  //     console.log( "second success" );
  // });

  // var jqxhr = $.get( "example.php", function() {
  //   alert( "success" );
  // })
  //   .done(function() {
  //     alert( "second success" );
  //   })
  //   .fail(function() {
  //     alert( "error" );
  //   })
  //   .always(function() {
  //     alert( "finished" );
  //   });

  // Perform other work here ...

  // Set another completion function for the request above
  // jqxhr.always(function() {
  //   alert( "second finished" );
  // });



  // $.ajax({
  //   url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
  //   key: YOUTUBE_API_KEY,
  //   success: function(data) {
  //     console.log('success', data);
  //   },
  //   error: function(error) {
  //     console.log('error', error);
  //   },
  //   dataType: 'json'
  // });
};

export default searchYouTube;

  // $.get({url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
  //   data: {key: YOUTUBE_API_KEY},
  //   contentType: 'application/json',
  //   success: function (data) { console.log('hi', data); },
  //   error: function(error) {
  //     console.error('Failed to fetch data', error);
  //   },
  // });
  // $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {q: 'chocolate'}, {key: YOUTUBE_API_KEY}, function( data ) {
  //   console.log(data);
  //   alert("Data: " + data);
  // }, {dataType: 'application/json'});
