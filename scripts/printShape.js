//Michael John
//Thursday, September Fourteenth, Two Thousand Seventeen
//Lab 2

function checkIsProperNumber(val, variableName) {
	if(val === undefined || typeof val !== "number"){
		throw `${variableName || 'provided variable'} is not a number`;
	}
}

module.exports = {

	triangle: (height) => {
		checkIsProperNumber(height, "Triangle height");

		if(height === 0){
			throw "Cannot have a triangle of height 0.";
		}

		var leading = height - 1;
		var middle = 0;  
		var dashes = 0; 

		while(height > 1){
			//ret = r
			console.log(" ".repeat(leading) + "/" + " ".repeat(middle) + "\\");
			middle += 2;
			dashes += 2;
			height -= 1;
			leading -= 1;
		}
		console.log("/" + "-".repeat(dashes) + "\\");
	},

	square: (length) => {
		checkIsProperNumber(length, "Square side length");

		if(length < 2){
			throw 'Cannot have a square with side length less than 2.';
		}
		var width = length

		console.log("|" + "-".repeat(width) + "|");
		while(length > 2){
			console.log("|" + " ".repeat(width) + "|");
			length -= 1;
		}
		console.log("|" + "-".repeat(width) + "|");
	},

	rhombus: (length) => {
		checkIsProperNumber(length, "Rhombus side length");

		if(length < 2){
			throw 'Cannot have a rhombus with side length less than 2.';
		}
		var width = length/2;
		var leading = length/2 -1;
		var middle = 1;  //This goes up by two with each iteration
		var dashes = 0; //goes up by two with each iteration

		console.log(" ".repeat(leading) + "/-\\");

		while(width > 1){
			leading -= 1;
			middle += 2;
			//ret = r
			console.log(" ".repeat(leading) + "/" + " ".repeat(middle) + "\\");
			width -= 1;
		}
		width = length/2;
		while(width > 1){
			//ret = r
			console.log(" ".repeat(leading) + "\\" + " ".repeat(middle) + "/");
			middle -= 2;
			width -= 1;
			leading += 1;
		}
		console.log(" ".repeat(leading) + "\\-/");

	},

};