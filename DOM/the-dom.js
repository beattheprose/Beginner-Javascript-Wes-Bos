const pic = document.querySelector(`.nice`);

const toggleRound = () => pic.classList.toggle(`round`);

pic.addEventListener(`click`, toggleRound);

pic.alt = `photographer`;

console.log(pic.naturalWidth);

