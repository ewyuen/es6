/**
 * Created by edward.yuen on 10/13/2016.
 */
var {color, position} = {
    color: "red",
    position: "left",
    name: "edward"
}

console.log(color);
console.log(position);

function generateObj()
{
    return {
        color: "blue",
        position: "left",
        name: "john",
        state: "CA"
    }
}

var {state, name} = generateObj();

console.log(state);
console.log(name);

var {state: location, name : person} = generateObj();

console.log(location);
console.log(person);

var [first,,,,last] = [1, 2, 3, 4,5];
console.log(first);
console.log(last);
