interface Point{
    x:number,
    y:number
}

interface Vehicle {
    currentLocation:Point;
    travelTo(point:Point):void;
  
}

class Taxi implements Vehicle{
    //..
    currentLocation:Point;
    travelTo(point:Point):void; {
        console.log(`taksi X:${point.x} Y:${point.Y} Konumuna Gidiyor.`);
        
    }

}
class Bus implements Vehicle{
    //..
    currentLocation:Point;
    travelTo(point:Point):void; {
        console.log(`Otobus X:${point.x} Y:${point.Y} Konumuna Gidiyor.`);
        
    }
}

let taxi_1:Taxi =new Taxi();
taxi_1.travelTo({x:1,Y:1,})

