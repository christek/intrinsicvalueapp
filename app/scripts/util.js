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