let jiju = 'andrevavord';
function Transport(){

    const faultPercent = 1;

    const xxx = 'I am protected';

    this.year = "year";
    this.brand = "brend";
    this.maxSpeed = "speed";
    this.passTime = function() {

    };

    this.getProt = () => xxx;

}



Transport.prototype.passedDistance = function(time,speed){
    return time*speed;
}
Transport.prototype.move = function () {
    
}
Transport.prototype.moveBy = "planet";
Transport.prototype.country = null;

WaterTransport.prototype = Object.create(Transport.prototype);
WaterTransport.prototype.constructor = WaterTransport;
WaterTransport.prototype.moveBy = "water";
function WaterTransport(){
    Transport.call(this);
    this.poxos="111";
    const y = this.getProt();
    console.log(y);
}

AirTransport.prototype = Object.create(Transport.prototype);
AirTransport.prototype.constructor = AirTransport;
AirTransport.prototype.moveBy = "air"
function AirTransport(){
    Transport.call(this)
    this.poxos="222";

}

function EarthTransport(){
    Transport.call(this);
    this.poxos="3333";
}

EarthTransport.prototype = Object.create(Transport.prototype);
EarthTransport.prototype.constructor = EarthTransport;
EarthTransport.prototype.dddd = function bbbbbbb(params) {
    
}
EarthTransport.prototype.moveBy = "earth"

function ElectroMobile(){
    EarthTransport.call(this)
    this.electro = "200V"
}
ElectroMobile.prototype.constructor = EarthTransport;

ElectroMobile.prototype = Object.create(EarthTransport.prototype)
ElectroMobile.prototype.electroShow = function sssss(params) {}



let nissan = new ElectroMobile();


class TuftaDeveloper {
    poxosik =  'jiju';
    
    constructor() {

    }

    dd() {

    }
}