var a = 5;
var b = 'b';
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, 'a', true];
var h = ['a', 5, false]; //tuple



var krediPayment = 0;
var havelePayment = 1;
var eftPayment = 2;
var Payment;




(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kapidaodeme"] = 2] = "kapidaodeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;




var kredi = Payment.kredi; // 0
var havele = Payment.havale; // 1
var kapidaodeme = Payment.kapidaodeme; // 1
var eft = Payment.eft; // 3
