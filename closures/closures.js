// 

// Paso 1

function nonSense(string){
	var blab = function(){
		alert(string);
	}
	blab();
}

// Paso 2 driver: Diego navigator: Maria

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

var storyWriter=function(){
	var story = '';
	var addWords = function(string){
		story = story + string;
		return story;
	};
	function erase (){
		story = ' ';
		return story;
	}
	 
	var  publicApi = {
		addWords: addWords,
		erase: erase
	}
	return publicApi
}
// Paso 6

var Toaster = function(){
//metodos y propiedades privadas
	var brand = "GE";
	var numberOfSlices = 4;
	var options = {
		bagel: false,
		rumbleTray: true
	};
	var temp = [1,2,3,4,5];
	var timer = true;
	function reheat(){
		console.log("el pan se va a calentar a " + temp[1])
	},
	function defrost(){
		console.log("el pan se va a calentar a " + temp[2])
	},
	toast: function(){
		console.log("el pan se va a calentar a " + temp[3])
	}
	return {
	//metodos y propiedades publicas  
	brand: brand,
	numberOfSlices: numberOfSlices,
	toast:toast
  }
};

// Paso 7

function once(callback){
	var modifyFunction = callback;
	var counter = 0;
	return function(){

	}
}
