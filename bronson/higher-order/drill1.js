'use strict;'

function repeat( fn, n ){
    for (let i=0; i < n; i++){
        fn();
    }
}

function hello(){
    console.log("Hello World");
}

function goodbye(){
    console.log("Goodbye World");
}

repeat(hello, 3);
repeat(goodbye, 7);