var chartData = [];

function generateChart(chartData) {
    var svg = dimple.newSvg("#chartContainer", 630, 400);
    var myChart = new dimple.chart(svg, chartData);
    myChart.setBounds(60, 30, 615, 305);
    var x = myChart.addCategoryAxis("x", "year");
    x.addOrderRule("year");
    myChart.addMeasureAxis("y", "book");
    var s = myChart.addSeries(null, dimple.plot.line);
    myChart.draw();
}

function calculateIntrinsicValue(ticker) {

    var tableObject = { tableStuff: []};

    _(10).times(function(n){

        var year = stockData[ticker]["firstyearretrieved"][0]+n;
        var eps = stockData[ticker]["eps"][n];
        var bookvalue = stockData[ticker]["bookvalue"][n];
        var dividendrate = stockData[ticker]["dividendrate"][n];
        var datarow = {'year': year, 'eps': eps, 'bookvalue': bookvalue, 'dividendrate': dividendrate, 'index': n+1}
        tableObject.tableStuff.push(datarow);

        chartData.push({'year':year, 'book':bookvalue});
    });

    var template = "{{#tableStuff}}<tr><td>{{year}}</td><td><input id='eps{{index}}' type='text' value='{{eps}}'></td><td><input id='bookvalue{{index}}' type='text' value='{{bookvalue}}'></td><td><input id='dividendrate{{index}}' type='text' value='{{dividendrate}}'></td></tr>{{/tableStuff}}";

    document.getElementById('tableId').innerHTML = Mustache.render(template, tableObject);

    var epssum = sumEarningsPerShare(_.rest(stockData[ticker]["eps"]), false);

    $('#epssum').html(epssum);

    var divsum = sumEarningsPerShare(_.rest(stockData[ticker]["dividendrate"]), false);

    $('#divsum').html(divsum);

    var currentBookValue = stockData[ticker]["bookvalue"][9];
    var oldBookValue = stockData[ticker]["bookvalue"][0];

    var yearsBetweenBookValues = 9;

    var bookvaluepercentagechange = getAverageBookValueChange(currentBookValue, oldBookValue, yearsBetweenBookValues);
    $('#averageBookValueChange').html(bookvaluepercentagechange);

    var bookvaluedifference = currentBookValue - oldBookValue;
    var bookvaluedifferencefloat = bookvaluedifference

    $('#bookvaluediff').html(bookvaluedifferencefloat);

    var total = bookvaluedifferencefloat + divsum;
    $("#totalcashsum").html(total);

    var dividendsForOneYear = stockData[ticker]["dividendrate"][9];
    $('#totalcash').html(dividendsForOneYear);

    $("#currentBookValue").html(currentBookValue);

    var year=10;
    //var r=18; // update this
    var r=2.65; // update this

    $("#currentnote").html(r);

    var YEARSBETWEENBOOKVALUES = 9;
    var bookValuePercentageChange =  getAverageBookValueChange(currentBookValue, oldBookValue, YEARSBETWEENBOOKVALUES);

    $('#intrinsicValue').html(getIntrinsicValue(dividendsForOneYear, currentBookValue, bookValuePercentageChange, year, r  ));

    $('.companyName').html(stockData[ticker]["fullname"])

}

calculateIntrinsicValue("WFC");
generateChart(chartData);


