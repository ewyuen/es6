/**
 * Created by edward.yuen on 10/13/2016.
 */
var color = "red";
var speed = "10";
var drive = "go2";
/*
function go()
{
    console.log("speed high");
}
*/

var car = {
    color,
    speed,
    go()
    {
        console.log("speed high");
    },
    [drive] : function () {
        console.log("speed low");
    }
};

console.log(car.color);
console.log(car.speed);
car.go();
car.go2();

