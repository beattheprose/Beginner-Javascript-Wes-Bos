const pic = document.querySelector(`.nice`);
console.log(pic.classList);

const toggleRound = () => pic.classList.toggle(`round`);

pic.addEventListener(`click`, toggleRound);
