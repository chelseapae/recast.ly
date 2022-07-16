var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={event => props.func(event.target.value)} />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// var searchRequest = null;
// $('#form-control').on('keyup change', function(event) {
//   if (searchRequest) {
//     searchRequest.abort();

//   }
//   searchRequest = $.get('/search', {term: $(this).val()}, null, 'script');
// });

var debounceTimeout = null;




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
