/**
 * Created by edward.yuen on 10/13/2016.
 */
var fs = [];

for (let i=0; i< 10; i++) {
    fs.push(function(){
        console.log(i);
    })
}

fs.forEach(function (f) {
    f();
})