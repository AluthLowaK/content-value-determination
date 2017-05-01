var assert = require('assert');

require("../lib/string-ext");
var expect = require('chai').expect;

describe('String', function() {
    describe('frequency', function() {
        it('null on empty string', function() {
            expect("".frequency()).to.be.null;
        });
        it('single char', function() {
            let f = "a".frequency();
            expect(f.a).to.equal(1);
        });
        it('repeated char', function() {
            let f = "aaaa".frequency();
            expect(f.a).to.equal(4);
        });
        it('mixed chars', function() {
            let f = "abvvvvvds".frequency();
            expect(f.a).to.equal(1);
        });
        it('mixed chars', function() {
            let f = "abvvvvvds".frequency();
            expect(f.a).to.equal(1);
        });
        it('none printable', function() {
            let f = "\uFF00".frequency();
            expect(f.a).to.be.undefined;
        });
        it('control chars', function() {
            let f = "\t\n\r".frequency();
            expect(f.a).to.be.undefined;
        });
    });
});