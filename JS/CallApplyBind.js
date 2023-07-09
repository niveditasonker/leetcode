var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function inviteApply(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

inviteApply.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
inviteApply.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

var employee3 = { firstName: "John", lastName: "Rodson" };
var employee4 = { firstName: "Jimmy", lastName: "Baily" };

function inviteCall(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

inviteCall.call(employee3, "Hello", "How are you?"); // Hello John Rodson, How are you?
inviteCall.call(employee4, "Hello", "How are you?");

var employee5 = { firstName: "John", lastName: "Rodson" };
var employee6 = { firstName: "Jimmy", lastName: "Baily" };

function inviteBind(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = inviteBind.bind(employee5);
var inviteEmployee2 = inviteBind.bind(employee6);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?");

/*
Call and apply are pretty interchangeable. Both execute the current function immediately.
You need to decide whether it’s easier to send in an array or a comma separated list of arguments.
You can remember by treating Call is for comma (separated list) and Apply is for Array.

Whereas Bind creates a new function that will have this set to the first parameter passed to bind().
*/