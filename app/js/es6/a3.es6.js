/* jshint unused:false */
/* global _:true */
/* global moment:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#fromNow').click(daysTill);
  }

  function daysTill(){
    var date = $('#date').val();
    var days = moment(date).endOf('day').fromNow();
    $('#output').text(days);
  }


})();
