/**
 * Created by nayana on 1/5/2560.
 */

var language = require("./language");


/*
String.prototype.determine = function () {
    var map = language.map;
    var len = this.length;
    var freq = this.frequency().map(function (v, k) {
        return v / len * map[k].freq;
    });
};
*/

/*
String.prototype.fd = function () {
    this.frequency().map()
};
*/

String.prototype.frequency = function () {
    if (this.length === 0) return null;
    return this.split("").reduce(function (a, v) {
        if (!a[v]) a[v] = 0;
        a[v]++;
        return a;
    },{});
};
