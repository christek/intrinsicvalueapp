var bookvaluediff = parseFloat($('#bookvalue2').html()) - parseFloat($('#bookvalue1').html());
$('#bookvaluediff').html(bookvaluediff);

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

var totalcash = bookvaluediff + divsum
$('#totalcash').html(totalcash);