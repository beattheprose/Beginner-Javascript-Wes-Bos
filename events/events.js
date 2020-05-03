const buyButtons = document.querySelectorAll(`button.buy`);

const handleBuyButtonClick = e => {
  const el = e.currentTarget;
  console.log(el.textContent);
  console.log(parseFloat(el.dataset.price));
};

buyButtons.forEach(buyButton => {
  buyButton.addEventListener(`click`, handleBuyButtonClick, { capture: true });
});

const photoEl = document.querySelector(`.photo`);
photoEl.addEventListener(`mousemove`, e => {
  console.log(e.currentTarget);
  console.log(this);
});
