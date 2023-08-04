/*
Here, the existing code expects the variables 'buttonElem' and 'inputElem' to represent the button and input elements in the example UI.
Assign the respective elements to the variables.
In this case, the two elements do not have unique identifiers - like for example an id. Instead they are direct descendents of a div element with id 'wrapper'. Use an appropriate selector method!
Click the button to verify that the code is working.
*/

/*
<div id="wrapper">
<input type="text" value="OFF" readonly/>
<button type="button">Click Me</button>
</div>
*/

const buttonElem = document.querySelector("#wrapper button");
  const inputElem = document.querySelector("#wrapper input");
  
  buttonElem.addEventListener('click', () => {
    const oldText = inputElem.value;
      return inputElem.value = oldText === "ON" ? "OFF" : "ON";
});

// Second solution

const divElem = document.getElementById('wrapper');
const buttonElem1 = divElem.children[1];
const inputElem2 = document.getElementById('wrapper').firstChild;
// const inputElem = divElem.children[0];

buttonElem1.addEventListener('click', () => {
  const oldText = inputElem.value;
    return inputElem2.value = oldText === "ON" ? "OFF" : "ON";
});
