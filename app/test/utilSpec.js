describe("general functions", function() {
    it("should return a", function() {
        expect(returnSomething()).toBe('a');
    });
});

describe("earnings per share sum", function() {
    it("should correctly sum plain integers as default behavior", function() {
        expect(sumEarningsPerShare([1,2])).toBe(3.00);
    });
    it("should correctly sum big numbers as default behavior", function() {
        expect(sumEarningsPerShare([0.1,0.1])).toBe(0.20);
        expect(sumEarningsPerShare([1.1,1.1])).toBe(2.20);
        expect(sumEarningsPerShare([1.1,1.1,1.1])).toBe(3.3000000000000003);
    });
    it("should correctly sum buffets books EPS example using toFixed optional paramater", function() {
        expect(sumEarningsPerShare([0.65,1.11,1.19,1.6,2.24,2.28,1.76,2.03,2.52], true)).toBe('15.38');
    });
});