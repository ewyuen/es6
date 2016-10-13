/**
 * Created by edward.yuen on 10/13/2016.
 */
function receive(complete = function() {
    console.log("complete");
}){
    complete();
}

// receive();
/*
receive(function() {
    console.log("complete");
})
    */


function receive1(complete = () => console.log("complete")){
    complete();
}

// receive1();

let receive2 = (complete = () => console.log("complete")) => complete();

receive2();