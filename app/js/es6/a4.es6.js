/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#cube').click(go);
  }

  function go(){
    var nums = $('#input').val().split(',').map(n=>n.trim());
    nums = _.range(nums[0], nums[1], nums[2]);
    nums = _(nums).map(n=>Math.pow(n, 3)).map(n=>`<div>${n}</div>`).forEach(n=>$('#output').append(n));
  }
})();
