// const listItems = document.querySelectorAll("#list li");
const listItems = document.querySelectorAll("li");
  
const handleHover = (event) => {
  return event.target.innerText = 'ON';
};

if(listItems.length > 1) {
  listItems.forEach(item => item.addEventListener('mouseover', handleHover));
}