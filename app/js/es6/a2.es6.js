/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#square').click(square);
  }

  function square(){
    $('#nums').val().split(',').map(n=>n.trim()).map(n=>n*n).map(n=>`<div>${n}</div>`).forEach(n=>$('#output').append(n));
  }
})();
