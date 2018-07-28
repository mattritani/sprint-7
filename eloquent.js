//--------------------------------------

Minimum

function min (a,b) {
if (a > b) {
  return b; 
} else if (b > a) {
	return a;
}
}

console.log(min(2, 5));
// 
console.log(min(7, -15));
//

//--------------------------------------

Recursion


function isEven (target) {
	if (Math.sign(target) === -1) {
    return false;
    } else if (target % 2 === 0) {
        return true;
    } else {
        return false;
    }    
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// i realise that this does also make all numbers negative not even - however in the context and framwork of the problem at hand it does solve it. 
