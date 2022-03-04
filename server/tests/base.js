const assert = require('assert');
const { RowDataPacket } = require('mysql');

describe('Simple Math Statements', () => {
    it('Should be 30', () => {
        assert.equal(5 * 6, 30);
    });
    it('Should be 43 or somerthing', () => {
        assert.equal(23 + 20, 43);
    });
    it('Should fail', () => {
        assert.equal(43 * 69, 420);
    })
});