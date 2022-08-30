const { spy } = require("chai");

function receivesAFunction(cb){
    return cb();
} 

function returnsANamedFunction() {
    return function namedFunc(){
        
    }
}

   
function returnsAnAnonymousFunction() {
    return function(){

    }
}
