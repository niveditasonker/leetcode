Question: Given a list of products fetched from an API, implement a caching mechanism in JavaScript to store the retrieved data locally and avoid excessive API calls on subsequent requests.
/*
Sample Answer:

javascript
Copy code
*/
const productCache = {};

function fetchProducts() {
  if (Object.keys(productCache).length > 0) {
    // Return cached data
    return Promise.resolve(productCache);
  } else {
    // Make API call and cache the data
    return fetch('api/products')
      .then(response => response.json())
      .then(data => {
        productCache = data;
        return data;
      });
  }
}

/*
Question: Write a function that takes an array of objects representing
users and sorts them in ascending order based on their age.
Ensure that the function follows clean code principles
and utilizes appropriate error handling.
Sample Answer:
*/

function sortUsersByAge(users) {
    if (!Array.isArray(users)) {
      throw new Error('Input is not an array');
    }

    return users.sort((a, b) => a.age - b.age);
}


/*
Question: Write a function in JavaScript that accepts an
array of strings and returns the unique values from the array,
while ignoring case sensitivity. Ensure the function follows
functional programming principles and avoids mutating the original array.

Sample Answer:
*/

function getUniqueValues(arr) {
    const uniqueValues = new Set();
  
    arr.forEach(function(item) {
      const lowercaseItem = item.toLowerCase();
      uniqueValues.add(lowercaseItem);
    });
  
    return Array.from(uniqueValues);
  }
  

