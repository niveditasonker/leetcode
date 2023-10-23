const button = document.getElementById('button');
  const input = document.getElementById('input');
  
  const handleClick = () => {
    input.value = 'Hello World';
  };
  
button.addEventListener('click', handleClick);

/*
<div id="element">
Hover Me
</div>
*/

const element = document.getElementById('element');
  
  const changeText = () => {
    element.innerText = 'Thanks!';
  };
  
element.addEventListener("mouseover", changeText);

const element2 = document.querySelector('#element');
  
  const toggleColor = (isEntering) => {
    element.style.background = isEntering ? 'orange' : 'black';
  };
  
element2.addEventListener('mouseover', () => toggleColor(true));
element2.addEventListener('mouseleave', () => toggleColor(false));
