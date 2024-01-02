/*
Create a function called "validate" that validates form input.

To define a validation rule, you pass a function to "validate":

validate(function (input) { return typeof input === 'string'; });
validate(function (input) { return input.length > 0; });
validate(function (input) { return input.length < 10; });

If you pass a non-function to validate, the validator checks if the given value passes all validation rules that were already defined.

validate("Hooray!"); // returns true because it's a non-empty string
validate(null); // returns false
validate(); // returns false


You can use validate to check multiple values:

validate("Hooray!", "Hoorah!"); // returns true
validate("Yippee", null, ""); // returns false
*/