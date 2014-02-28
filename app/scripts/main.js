var company = "DIS";

var stockData = {
    "DIS": {
        "fullname": "Disney",
        "yearretrieved": [2002],
        "eps": ["NA", .65, 1.11, 1.19, 1.60, 2.24, 2.28, 1.76, 2.03, 2.52],
        "bookvalue": [11.61, 11.82, 13.05, 13.06, 15.42, 15.67, 17.73, 18.55, 19.78, 21.21],
        "dividendrate": ["NA", .21, .24, .27, .31, .35, .35, .35, .40, .60]
    },
    "WMK": {
        "fullname": "Weiss Markets",
        "yearretrieved": [2002],
        "eps": ["NA", 2.11, 2.35, 2.07, 1.89, 1.74, 2.33, 2.54, 2.81, 3.07],
        "bookvalue": [21.11, 22.35, 23.29, 24.02, 24.52, 25.68, 27.07, 27.73, 29.58, 29.58],
        "dividendrate": ["NA", 1.20, 1.20, 1.20, 1.20, 1.20, 1.20, 1.20, 1.20, 1.20]
    },
    "WFC": {
        "fullname": "Wells Fargo",
        "yearretrieved": [2012],
        "eps": ["NA", 2.82, 2.21, 1.75, 0.70, 2.38, 2.49, 2.25, 2.05, 1.83],
        "bookvalue": [21.11, 22.35, 23.29, 24.02, 24.52, 25.68, 27.07, 27.73, 29.58, 29.58],
        "dividendrate": ["NA", 0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.66, 0.66]
    }
};

var tableObject = { tableStuff: []};

_(10).times(function(n){
    var year = stockData[company]["yearretrieved"][0]+n;
    var eps = stockData[company]["eps"][n];
    var bookvalue = stockData[company]["bookvalue"][n];
    var dividendrate = stockData[company]["dividendrate"][n];
    var datarow = {'year': year, 'eps': eps, 'bookvalue': bookvalue, 'dividendrate': dividendrate, 'index': n+1}
    //console.log(year+'|'+bookvalue+'|'+dividendrate);
    tableObject.tableStuff.push(datarow);
});

var template = "{{#tableStuff}}<tr><td>{{year}}</td><td><input id='eps{{index}}' type='text' value='{{eps}}'></td><td><input id='bookvalue{{index}}' type='text' value='{{bookvalue}}'></td><td><input id='dividendrate{{index}}' type='text' value='{{dividendrate}}'></td></tr>{{/tableStuff}}";

document.getElementById('tableId').innerHTML = Mustache.render(template, tableObject);

var epssum = sumEarningsPerShare(_.rest(stockData[company]["eps"]), false);

$('#epssum').html(epssum);

var divsum = sumEarningsPerShare(_.rest(stockData[company]["dividendrate"]), false);

$('#divsum').html(divsum);

var currentBookValue = stockData[company]["bookvalue"][9];
var oldBookValue = stockData[company]["bookvalue"][0];

var yearsBetweenBookValues = 9;

var bookvaluepercentagechange = getAverageBookValueChange(currentBookValue, oldBookValue, yearsBetweenBookValues);
$('#averageBookValueChange').html(bookvaluepercentagechange);

var bookvaluedifference = currentBookValue - oldBookValue;
var bookvaluedifferencefloat = bookvaluedifference

$('#bookvaluediff').html(bookvaluedifferencefloat);

var total = bookvaluedifferencefloat + divsum;
$("#totalcashsum").html(total);

var dividendsForOneYear = stockData[company]["dividendrate"][9];
$('#totalcash').html(dividendsForOneYear);

$("#currentBookValue").html(currentBookValue);

var year=10;
var r=1.71; // update this

$("#currentnote").html(r);

var YEARSBETWEENBOOKVALUES = 9;
var bookValuePercentageChange =  getAverageBookValueChange(currentBookValue, oldBookValue, YEARSBETWEENBOOKVALUES);

$('#intrinsicValue').html(getIntrinsicValue(dividendsForOneYear, currentBookValue, bookValuePercentageChange, year, r  ));

