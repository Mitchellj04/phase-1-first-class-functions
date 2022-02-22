function receivesAFunction(aCallBackFunction){
    aCallBackFunction();
}


function returnsANamedFunction(){
    return function aNamedFunction(){}
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('Annonymous.')
    }
}
