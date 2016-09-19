/*
	driver: Maria
	navigator: Diego
*/

// Paso 0

var funcCaller = function(func, arg){
	return func(arg);
}

//funcCaller(function(arg){console.log(arg)}, 42)

// Paso 1

function firstVal(arr, fn){
	return fn(arr[0])
}

firstVal([1,2,3], function(element){console.log(element)})