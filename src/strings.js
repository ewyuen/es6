/**
 * Created by edward.yuen on 10/13/2016.
 */
var salute = "Hello!!";
var greeting = `${salute}, World`;

console.log(greeting);

var x = 1;
var y = 2;

var equation = `${x + y}`;
console.log(equation);

function tag(strings, ...values){
    console.log(strings);
    if (values[0] < 20){
        values[1] = "awake";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

var message = tag`It's ${new Date().getHours()} I am ${""}.`;
console.log(message);
