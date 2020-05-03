const buyButtons = document.querySelectorAll(`button.buy`);
function handleBuyButtonClick(buyButton) {
  buyButton.addEventListener(`click`, buyItem);
}
const handleClick = () => console.log(`arrow functions ftw`);

const butts = document.querySelector(`.butts`);
butts.addEventListener(`click`, handleClick);

const cool = document.querySelector(`.cool`);
cool.addEventListener(`click`, handleClick);

const buyItem = () => console.log(`buying item...`);
buyButtons.forEach(handleBuyButtonClick);
