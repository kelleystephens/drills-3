/* jshint unused:false */
/* global _:true */
/* jshint camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeChart();
    $('#compare').click(getRating);
  }

  function getRating(){
    var amt = $('#number').val();
    var url = `http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=${amt}&country=us&apikey=b4tbxqbcua3qdvrpry9eqmdt&callback=?`;
    $.getJSON(url, getInfo);
  }

  function getInfo(data){
    data.movies.forEach(m=>chart.dataProvider.push({title: m.title, audience: m.ratings.audience_score, critics: m.ratings.critics_score}));
    chart.validateData();
}

  var chart;
  function makeChart(){
   chart = AmCharts.makeChart('graph', {
    'type': 'serial',
    'theme': 'dark',
    'pathToImages': 'http://www.amcharts.com/lib/3/images/',
    'legend': {
        'useGraphSettings': true
    },
    'dataProvider': [],
    'valueAxes': [{
        'id':'v1',
        'axisColor': '#FF6600',
        'axisThickness': 2,
        'minimum': 0,
        'maximum': 100,
        'gridAlpha': 0,
        'axisAlpha': 1,
        'position': 'left'
    }],
    'graphs': [{
        'valueAxis': 'v1',
        'lineColor': '#FF6600',
        'bullet': 'round',
        'bulletBorderThickness': 1,
        'hideBulletsCount': 30,
        'title': 'Audience Rating',
        'valueField': 'audience',
		'fillAlphas': 0
    }, {
        'valueAxis': 'v1',
        'lineColor': '#FCD202',
        'bullet': 'square',
        'bulletBorderThickness': 1,
        'hideBulletsCount': 30,
        'title': 'Critics Rating',
        'valueField': 'critics',
		'fillAlphas': 0
    }],
    'chartCursor': {
        'cursorPosition': 'mouse'
    },
    'categoryField': 'title',
    'categoryAxis': {
        'labelRotation': 30,
        'axisColor': '#DADADA',
        'minorGridEnabled': true
    }
});

chart.addListener('dataUpdated', zoomChart);
zoomChart();

function zoomChart(){
    chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
}

  }
})();
