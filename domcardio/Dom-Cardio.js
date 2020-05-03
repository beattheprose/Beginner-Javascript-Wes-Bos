// Make a div
const myDiv = document.createElement(`div`);

// add a class of wrapper to it
myDiv.classList.add(`wrapper`);

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement(`ul`);

// add three list items with the words "one, two three" in them
const listOne = document.createElement(`li`);
listOne.textContent = `one`;
const listTwo = document.createElement(`li`);
listTwo.textContent = `two`;
const listThree = document.createElement(`li`);
listThree.textContent = `three`;

// put that list into the above wrapper
myList.insertAdjacentElement(`beforeend`, listOne);
myList.insertAdjacentElement(`beforeend`, listTwo);
myList.insertAdjacentElement(`beforeend`, listThree);
myDiv.appendChild(myList);

// create an image
const myImg = document.createElement(`img`);

// set the source to an image
myImg.src = `https://source.unsplash.com/random/`;

// set the width to 250
myImg.width = `250`;

// add a class of cute
myImg.classList.add(`cute`);

// add an alt of Cute Puppy
myImg.alt = `Cute Puppy`;

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const stringDiv = `
  <div>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
`;

// put this div before the unordered list from above
myDiv.insertAdjacentHTML(`afterbegin`, stringDiv);

// add a class to the second paragraph called warning
myDiv.firstElementChild.lastElementChild.classList.add(`warning`);

// remove the first paragraph
myDiv.firstElementChild.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) =>
  `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years, this person would be ${age *
    7}. That would be a tall dog!</p>
    <button>Delete</button>
    </div>
    
  `;

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDiv = document.createElement(`div`);
cardsDiv.classList.add(`cards`);

// Have generatePlayerCard make 4 cards
// I did cheat on this part due to terrible instructions
let cardsHTML = ``;
cardsHTML += generatePlayerCard(`Alex`, 23, `6'0"`);
cardsHTML += generatePlayerCard(`Grace`, 23, `6'0"`);
cardsHTML += generatePlayerCard(`Katy`, 23, `6'0"`);
cardsHTML += generatePlayerCard(`Meri`, 23, `6'0"`);

// append those cards to the div
cardsDiv.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement(`beforebegin`, cardsDiv);

// BONUS, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttonArray = document.querySelectorAll(`button`);

// make out delete function HAD TO CHEAT, but then made my own solution :)
const handleDeleteButton = clickedButton =>
  clickedButton.currentTarget.closest(`.playerCard`).remove();

// loop over them and attach a listener HAD TO CHEAT, but then made my own solution :)
buttonArray.forEach(button =>
  button.addEventListener(`click`, handleDeleteButton)
);
