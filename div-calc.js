/**
 * ===========================
 * Command line interface
 * ===========================
 
* a quick node calculator I wrote
* that does division for me 
* from the command line
*/

const inputArray = process.argv.splice(2);
//const inputString = inputArray.join(' ');

 for (let i=0; i < (inputArray.length + 1); i++) {
        
	  if (i < 3) {
		console.log('...' + ' ');
	      }	else { 		
	  let num2 = inputArray[i-1]; //index 2
	  let num1 = inputArray[i-3];//index 0
	  let modulo = num1 % num2;
	  let div    = num1 / num2;
          console.log(num1 + ' divided by ' + num2 + ' is ' + div); 
	  console.log('modulo is ' + modulo);
		}
		
}



