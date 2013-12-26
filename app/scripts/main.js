
var epssum = parseFloat($('#eps1').html()) +
    parseFloat($('#eps2').html()) +
    parseFloat($('#eps3').html()) +
    parseFloat($('#eps4').html()) +
    parseFloat($('#eps5').html()) +
    parseFloat($('#eps6').html()) +
    parseFloat($('#eps7').html()) +
    parseFloat($('#eps8').html()) +
    parseFloat($('#eps9').html());

$('#epssum').html(epssum.toFixed(2));

var divsum = parseFloat($('#div1').html()) +
    parseFloat($('#div2').html()) +
    parseFloat($('#div3').html()) +
    parseFloat($('#div4').html()) +
    parseFloat($('#div5').html()) +
    parseFloat($('#div6').html()) +
    parseFloat($('#div7').html()) +
    parseFloat($('#div8').html()) +
    parseFloat($('#div9').html());

$('#divsum').html(divsum);




var cbv = parseFloat($('#bookvalue2').html());
var obv = parseFloat($('#bookvalue1').html());
var years = 9;

var upper = 1 / years;
var base = cbv / obv;
var a = Math.pow(base, upper);
var bookvaluepercentagechange = 100 * (a - 1);
$('#averageBookValueChange').html(bookvaluepercentagechange);





var bookvaluedifference = cbv - obv;
var bookvaluedifferencefloat = bookvaluedifference




$('#bookvaluediff').html(bookvaluedifferencefloat);


var totalCash = parseFloat($('#div9').html());
$('#totalcash').html(totalCash);

var year=10;
var r=1.71; // update this

$("#currentnote").html(r);

var bvc=bookvaluedifference;

var perc=(1+bvc/100);

var base=Math.pow(perc,year);

var parr=cbv*base;


var r=r/100;

extra=Math.pow((1+r),year);



var c = totalCash*(1-(1/extra))/r+parr/extra;


$('#intrinsicValue').html(c.toFixed(2));

console.log(typeof divsum)

//console.log(typeof bookvaluedifferencefloat)
//console.log(typeof divsum)


var total = bookvaluedifferencefloat + divsum;
$("#totalcashsum").html(total)





