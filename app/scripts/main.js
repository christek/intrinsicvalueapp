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
    var bookvalue = stockData["DIS"]["bookvalue"][n];
    var dividendrate = stockData["DIS"]["dividendrate"][n];
    var datarow = {'year': year, 'bookvalue': bookvalue, 'dividendrate': dividendrate}
    //console.log(year+'|'+bookvalue+'|'+dividendrate);
    tableObject.tableStuff.push(datarow);
});

var template = "{{#tableStuff}}{{year}} {{bookvalue}} {{dividendrate}}<br />{{/tableStuff}}"
document.getElementById('tableId').innerHTML =
    Mustache.render(template, tableObject)

var epssum = parseFloat($('#eps1').val()) +
    parseFloat($('#eps2').val()) +
    parseFloat($('#eps3').val()) +
    parseFloat($('#eps4').val()) +
    parseFloat($('#eps5').val()) +
    parseFloat($('#eps6').val()) +
    parseFloat($('#eps7').val()) +
    parseFloat($('#eps8').val()) +
    parseFloat($('#eps9').val());

$('#epssum').html(epssum.toFixed(2));

var divsum = parseFloat($('#div1').val()) +
    parseFloat($('#div2').val()) +
    parseFloat($('#div3').val()) +
    parseFloat($('#div4').val()) +
    parseFloat($('#div5').val()) +
    parseFloat($('#div6').val()) +
    parseFloat($('#div7').val()) +
    parseFloat($('#div8').val()) +
    parseFloat($('#div9').val());

$('#divsum').html(divsum);




var cbv = parseFloat($('#bookvalue9').val());
var obv = parseFloat($('#bookvalue1').val());
var years = 9;

var upper = 1 / years;
var base = cbv / obv;
var a = Math.pow(base, upper);
var bookvaluepercentagechange = 100 * (a - 1);
$('#averageBookValueChange').html(bookvaluepercentagechange);





var bookvaluedifference = cbv - obv;
var bookvaluedifferencefloat = bookvaluedifference




$('#bookvaluediff').html(bookvaluedifferencefloat);


var total = bookvaluedifferencefloat + divsum;
$("#totalcashsum").html(total);


//**************************************************
var dividendsForOneYear = parseFloat($('#div9').val());
$('#totalcash').html(dividendsForOneYear);


$("#currentBookValue").html(cbv);





var year=10;
var r=1.71; // update this

$("#currentnote").html(r);

var bvc=bookvaluepercentagechange;

var perc=(1+bvc/100);

var base=Math.pow(perc,year);

var parr=cbv*base;


var r=r/100;

extra=Math.pow((1+r),year);

var c = dividendsForOneYear*(1-(1/extra))/r+parr/extra;

$('#intrinsicValue').html(c.toFixed(2));

