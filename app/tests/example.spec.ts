import * as chai from "chai";
// const chai = require("chai");

// A sample Mocha test
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            chai.expect([1, 2, 3].indexOf(5)).to.equal(-1);
            chai.expect([1, 2, 3].indexOf(0)).to.equal(-1, );
        });
    });
});
