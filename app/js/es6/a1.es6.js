/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#string').click(string);
  }

  function string(){
    // debugger;
    var first = $('#first').val().toLowerCase();
    var last = $('#last').val().toLowerCase();
    var movie = $('#movie').val().toUpperCase();
    var str = `${first} ${last} loves ${movie}`;
    $('#output').text(str);
  }
})();
