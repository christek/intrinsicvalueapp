var stockData = {
    "DIS": {
        "yearretrieved": [2002],
        "eps": ["NA", .65, 1.11, 1.19, 1.60, 2.24, 2.28, 1.76, 2.03, 2.52],
        "bookvalue": [11.61, 11.82, 13.05, 13.06, 15.42, 15.67, 17.73, 18.55, 19.78, 21.21],
        "dividendrate": ["NA", .21, .24, .27, .31, .35, .35, .35, .40, .60]
    }
};

var tableObject = { tableStuff: []};

_(10).times(function(n){
    var year = stockData["DIS"]["yearretrieved"][0]+n;
    var eps = stockData["DIS"]["eps"][n];
    var bookvalue = stockData["DIS"]["bookvalue"][n];
    var dividendrate = stockData["DIS"]["dividendrate"][n];
    var datarow = {'year': year, 'eps': eps, 'bookvalue': bookvalue, 'dividendrate': dividendrate, 'index': n+1}
    //console.log(year+'|'+bookvalue+'|'+dividendrate);
    tableObject.tableStuff.push(datarow);
});

var template = "{{#tableStuff}}<tr><td>{{year}}</td><td><input id='eps{{index}}' type='text' value='{{eps}}'></td><td><input id='bookvalue{{index}}' type='text' value='{{bookvalue}}'></td><td><input id='dividendrate{{index}}' type='text' value='{{dividendrate}}'></td></tr>{{/tableStuff}}";

document.getElementById('tableId').innerHTML = Mustache.render(template, tableObject);

var epssum = sumEarningsPerShare(_.rest(stockData["DIS"]["eps"]), false);

$('#epssum').html(epssum);

var divsum = sumEarningsPerShare(_.rest(stockData["DIS"]["dividendrate"]), false);

$('#divsum').html(divsum);

var currentBookValue = stockData["DIS"]["bookvalue"][9];
var oldBookValue = stockData["DIS"]["bookvalue"][0];

var yearsBetweenBookValues = 9;

var bookvaluepercentagechange = getAverageBookValueChange(currentBookValue, oldBookValue, yearsBetweenBookValues);
$('#averageBookValueChange').html(bookvaluepercentagechange);

var bookvaluedifference = currentBookValue - oldBookValue;
var bookvaluedifferencefloat = bookvaluedifference

$('#bookvaluediff').html(bookvaluedifferencefloat);

var total = bookvaluedifferencefloat + divsum;
$("#totalcashsum").html(total);

var dividendsForOneYear = stockData["DIS"]["dividendrate"][9];
$('#totalcash').html(dividendsForOneYear);

$("#currentBookValue").html(currentBookValue);

var year=10;
var r=1.71; // update this

$("#currentnote").html(r);

var YEARSBETWEENBOOKVALUES = 9;
var bookValuePercentageChange =  getAverageBookValueChange(currentBookValue, oldBookValue, YEARSBETWEENBOOKVALUES);

$('#intrinsicValue').html(getIntrinsicValue(dividendsForOneYear, currentBookValue, bookValuePercentageChange, year, r  ));

