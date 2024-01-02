var largestNumber = function(nums) {
    if(!nums || nums.length === 0) {
        return '0';
    }
    
    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
    if(nums[0] === 0) {
        return '0';
    }
    return nums.join('');    
};

var largestNumber2 = function (nums) {

    nums.sort((numa, numb) => {
        let string1 = numa.toString();
        let string2 = numb.toString();
        return parseInt(string1 + string2) > parseInt(string2 + string1) ? -1 : 1
    });

    if (nums[0] == "0") return "0";

    return nums.join("");

};

let nums = [10,2];
console.log(largestNumber(nums));

nums = [4, 7, 9, 2, 3];
console.log(largestNumber(nums));


// https://www.geeksforgeeks.org/find-the-largest-number-that-can-be-formed-with-the-given-digits/
// Javascript program to generate largest possible
// number with given digits

// Function to generate largest possible
// number with given digits
function findMaxNum(arr, n){
	// Declare a hash array of size 10
	// and initialize all the elements to zero
	var hash = Array(10).fill(0);
	
	// store the number of occurrences of the digits
	// in the given array into the hash table
	for(var i=0; i<n; i++){
		hash[arr[i]]++;
	}

    console.log(hash);
	
	// Traverse the hash in descending order
	// to print the required number
	// for(var i=9; i>=0; i--) {
	// 	// Print the number of times a digits occurs
    //     console.log(hash[i]);
	// }
}

// Driver code
nums = [1, 2, 3, 4, 5, 0];
let n = nums.length;

findMaxNum(nums,n);

nums = [10,2];
n = nums.length;
console.log(findMaxNum(nums, n));

nums = [4, 7, 9, 2, 3];
n = nums.length;
console.log(findMaxNum(nums, n));