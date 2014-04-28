/* jshint unused:false */
/* global _:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(go);
  }

  function go(){
    var amt = $('#movie').val();
    var url = `http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=${amt}&country=us&apikey=b4tbxqbcua3qdvrpry9eqmdt&callback=?`;
    $.getJSON(url, getMovies);
  }

  function getMovies(data){
    var score = $('#score').val();
    data.movies.filter(m=>m.ratings.critics_score >= score).forEach(m=>$('#output').append(`<img src=${m.posters.original}><div>${m.title}</div>`));
  }

})();
