var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    return Taxi;
}());
{
    console.log("taksi X:" + point.x + " Y:" + point.Y + " Konumuna Gidiyor.");
}
var Bus = /** @class */ (function () {
    function Bus() {
    }
    return Bus;
}());
{
    console.log("Otobus X:" + point.x + " Y:" + point.Y + " Konumuna Gidiyor.");
}
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, Y: 1 });
