// My Work

const listWrap = document.createElement(`ul`);

const listOne = document.createElement(`li`);
listOne.textContent = `One`;
const listTwo = document.createElement(`li`);
listTwo.textContent = `Two`;
const listThree = document.createElement(`li`);
listThree.textContent = `Three`;
const listFour = document.createElement(`li`);
listFour.textContent = `Four`;
const listFive = document.createElement(`li`);
listFive.textContent = `Five`;

listWrap.insertAdjacentElement(`beforeend`, listOne);
listWrap.insertAdjacentElement(`beforeend`, listTwo);
listWrap.insertAdjacentElement(`beforeend`, listThree);
listWrap.insertAdjacentElement(`beforeend`, listFour);
listWrap.insertAdjacentElement(`beforeend`, listFive);

document.body.appendChild(listWrap);
