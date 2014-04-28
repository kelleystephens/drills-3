/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(get);
  }

  function get(){
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=10&country=us&apikey=b4tbxqbcua3qdvrpry9eqmdt&callback=?';
    $.getJSON(url, function(movies){
      getMovies(movies);
    });
  }

  function getMovies(movies){
    var x = movies.movies;
    for(var i = 0; i < x.length; i++){
      var poster = x[i].posters.original;
      var title = x[i].title;
      $('#output').append(`<div class='holder'><img src=${poster}><div>${title}</div></div>`);
    }
  }

})();
