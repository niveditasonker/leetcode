/*
You are given some names of different fruit and an unordered list
html element; add a list item for each to the unordered list.
*/

function createFruitsList(){
    const fruitList = ["apple", "banana", "tomato"];

    const ulElement = document.querySelector("ul");

    fruitList.forEach((fruit) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = fruit;
    ulElement.appendChild(itemElement);
    });
}

/*
Add the CroCoder logo (image element) as a child element to the existing div element.
<div></div>
const imageSrc = "https://crocoder.dev/icon.png";
*/

function addImage(){
    const imageSrc = "https://crocoder.dev/icon.png";

    const divElement = document.querySelector("div");
    
    const imgElement = document.createElement("img");
    
    imgElement.src = imageSrc;
    
    divElement.appendChild(imgElement);
}

/*
Change the text in the first and the last list item element
in every unordered list element on this page. Change it to
'first' and 'last'.

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<ul>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
<ul>
  <li>👻</li>
  <li>👽</li>
  <li>🦁</li>
</ul>
*/

function changeChildrenText(){
    const firstLis = [...document.querySelectorAll("ul > li:first-child")];
    const lastLis = [...document.querySelectorAll("ul > li:last-child")];
    
    firstLis.forEach((li) => (li.textContent = "first"));
    
    lastLis.forEach((li) => (li.textContent = "last"));
}