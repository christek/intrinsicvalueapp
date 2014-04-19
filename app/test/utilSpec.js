describe("earnings per share sum", function() {
    it("should correctly sum plain integers as default behavior", function() {
        expect(sumEarningsPerShare([1,2])).toBe(3.00);
    });
    it("should correctly sum big numbers as default behavior", function() {
        expect(sumEarningsPerShare([0.1,0.1])).toBe(0.20);
        expect(sumEarningsPerShare([1.1,1.1])).toBe(2.20);
        expect(sumEarningsPerShare([1.1,1.1,1.1])).toBe(3.3000000000000003);
    });
    it("should correctly string sum buffets books EPS example using toFixed optional paramater", function() {
        expect(sumEarningsPerShare([0.65,1.11,1.19,1.6,2.24,2.28,1.76,2.03,2.52], true)).toBe('15.38');
    });
});

describe("average book value change calculator", function() {
    it("should correctly return average book value change exactly as in buffets books tool video example", function() {
        expect(getAverageBookValueChange(21.21, 11.61, 9)).toBe(6.9248664595840115);
    });
    it("should correctly return average book value change exactly as in buffets books tool with random values", function() {
        expect(getAverageBookValueChange(11, 10, 10)).toBe(0.9576582776886999);
        expect(getAverageBookValueChange(22, 10, 5)).toBe(17.08049129648923);
        expect(getAverageBookValueChange(222, 2, 10)).toBe(60.15197467194875);
    });
});

describe("intrinsic value calculator", function() {
    it("should correctly return intrinsic value exactly as in buffets books tool video example", function() {
        expect(getIntrinsicValue(.60, 21.21, 6.9248664595840115, 10, 1.71)).toBe('40.44');
    });
});

describe("jquery val function", function() {
    var fixture = $('<input value="3.232323" />');
    it("should correctly pull string from text input field", function() {
        var myString = $(fixture).val();
        expect(myString).toBe('3.232323');
    });
    it("should correctly pull string from text input field and parsInt", function() {
        var fixture = $('<input id="rate" type="text" value="3.232323" />');
        var myString = $(fixture).val();
        var myNumber = parseFloat(myString);
        expect(myNumber).toEqual(3.232323);
    });
});

describe("rounding decimal places", function() {
    it("should correctly round various decimal numbers", function() {
        expect(Math.round(11.1111 * 100) / 100).toBe(11.11);
        expect(Math.round(99 * 100) / 100).toBe(99);
        expect(Math.round(99.99 * 100) / 100).toBe(99.99);
        expect(Math.round(99.999 * 100) / 100).toBe(100);
        expect(Math.round(3.129 * 100) / 100).toBe(3.13);
    });
});

