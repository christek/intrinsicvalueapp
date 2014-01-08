function returnSomething() {
    return 'a';
}

function sumEarningsPerShare(values, toFixed) {
    var sum =  _.reduce(values, function(memo, num){ return memo + num; }, 0);
    if (toFixed === true) {
        sum = sum.toFixed(2);
    }
    return sum;
}

function getAverageBookValueChange(currentBookValue, oldBookValue, yearsBetweenBookValues) {
    var upper = 1 / yearsBetweenBookValues;
    var base = currentBookValue / oldBookValue;
    var a = Math.pow(base, upper);
    var averageBookValueChange = 100 * (a - 1);
    return averageBookValueChange;
}

function getIntrinsicValue(dividendsReceivedForOneYear, currentBookValue, averageAverageBookValueChange, years, tenYearFederalNoteRate) {
    var perc = (1+averageAverageBookValueChange/100);
    var base = Math.pow(perc,years);
    var parr = currentBookValue * base;
    var tenYearFederalNoteRate = tenYearFederalNoteRate/100;
    var extra=Math.pow((1+tenYearFederalNoteRate),years);
    return dividendsReceivedForOneYear*(1-(1/extra))/tenYearFederalNoteRate+parr/extra;
}