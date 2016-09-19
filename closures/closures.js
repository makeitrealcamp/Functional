// 

// Paso 1

function nonSense(string){
	var blab = function(){
		alert(string);
	}
	blab();
}

// Paso 2

function nonSense(string){
	var blab = function(){
		alert(string);
	}
	setTimeout(blab, 2000);
}


// Paso 3

function nonSense(string){
	var blab = function(){
		alert(string);
	}
	return blab;

}
var blabLater = nonSense('hola');

var blabAgainLater = nonSense('hey')

// Paso 4

  var nameGenerator = function(firstName){     

      var innerFunction = function(lastName) {
      		console.log(firstName + ' ' + lastName)
      }; return innerFunction;    
  }
// Paso 5