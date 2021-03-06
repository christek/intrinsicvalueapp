'use strict';

var chartData = [];

function generateChart(chartData) {
  var svg = dimple.newSvg('#chartContainer', 630, 400);
  var myChart = new dimple.chart(svg, chartData);
  myChart.setBounds(60, 30, 615, 305);
  var x = myChart.addCategoryAxis('x', 'year');
  x.addOrderRule('year');
  myChart.addMeasureAxis('y', 'book');
  var s = myChart.addSeries(null, dimple.plot.line);
  myChart.draw();
}

function calculateIntrinsicValue(ticker) {
  var tableObject = {
    tableStuff: []
  };

  _(10).times(function(n) {

    var year = stockData[ticker]['firstyearretrieved'][0] + n;
    var eps = stockData[ticker]['eps'][n];
    var bookvalue = stockData[ticker]['bookvalue'][n];
    var dividendrate = stockData[ticker]['dividendrate'][n];
    var datarow = {
      'year': year,
      'eps': eps,
      'bookvalue': bookvalue,
      'dividendrate': dividendrate,
      'index': n + 1
    }
    tableObject.tableStuff.push(datarow);

    chartData.push({
      'year': year,
      'book': bookvalue
    });
  });

  var template = '{{#tableStuff}}<tr><td>{{year}}</td><td><input id="eps{{index}}" type="text" value="{{eps}}"></td><td><input id="bookvalue{{index}}" type="text" value="{{bookvalue}}"></td><td><input id="dividendrate{{index}}" type="text" value="{{dividendrate}}"></td></tr>{{/tableStuff}}';

  document.getElementById('tableId').innerHTML = Mustache.render(template, tableObject);

  $('#eps1, #dividendrate1').attr('disabled', true)

  var epssum = sumEarningsPerShare(_.rest(stockData[ticker]['eps']), false);

  $('#epssum').html('$' + epssum);

  var divsum = sumEarningsPerShare(_.rest(stockData[ticker]['dividendrate']), false);

  $('#divsum').html('$' + divsum);

  var currentBookValue = stockData[ticker]['bookvalue'][9];
  var oldBookValue = stockData[ticker]['bookvalue'][0];

  var yearsBetweenBookValues = 9;

  var bookvaluepercentagechange = getAverageBookValueChange(currentBookValue, oldBookValue, yearsBetweenBookValues);

  var bookValuePercentageChangeRounded = Math.round(bookvaluepercentagechange * 100) / 100;

  $('#averageBookValueChange').html(bookValuePercentageChangeRounded);

  var bookvaluedifference = currentBookValue - oldBookValue;
  var bookvaluedifferencefloat = bookvaluedifference;

  $('#bookvaluediff').html(bookvaluedifferencefloat);

  var total = bookvaluedifferencefloat + divsum;

  var totalRounded = Math.round(total * 100) / 100;

  $('#totalcashsum').html('$' + totalRounded);

  var dividendsForOneYear = stockData[ticker]['dividendrate'][9];
  $('#totalcash').html(dividendsForOneYear);

  $('#currentBookValue').html('$' + currentBookValue);

  var year = 10;
  var r = 2.74; // update this

  $('.currentnote').html(r);

  var YEARSBETWEENBOOKVALUES = 9;
  var bookValuePercentageChange = getAverageBookValueChange(currentBookValue, oldBookValue, YEARSBETWEENBOOKVALUES);



  $('.intrinsicValue').html(getIntrinsicValue(dividendsForOneYear, currentBookValue, bookValuePercentageChange, year, r));

  $('.companyName').html(stockData[ticker]['fullname'])

  $('#rate').val(r);
   $('#sliderrate').val(r);

  $('#rate').change(function() {
    var newrate = parseFloat($('#rate').val());
    // console.log('change ' + newrate);
    $('.intrinsicValue').html(getIntrinsicValue(dividendsForOneYear, currentBookValue, bookValuePercentageChange, year, newrate));
    $('.currentnote').html(newrate);

  });

  $('#sliderrate').change(function() {
    var newrate = $('#sliderrate').val();
    // console.log('change ' + newrate);
    $('.intrinsicValue').html(getIntrinsicValue(dividendsForOneYear, currentBookValue, bookValuePercentageChange, year, newrate));
    $('.currentnote').html(newrate);
    $('#rate').val(newrate);
    $('.intrinsicValText').html('Target Price');
    $('#currentNote').hide();
    $('.currentNoteMsg').hide();
    $('.bondMsg').hide();
    if (newrate < r) {
      $('.bondMsg').show();
    }
  });

}

calculateIntrinsicValue('NHC');
generateChart(chartData);
