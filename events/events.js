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
photoEl.addEventListener(`mouseenter`, e => {
  const photo = e.currentTarget;
  const photoSpin = () => {
    console.log(`entered!`);
    photo.classList.remove(`rightSideUp`);
    photo.classList.add(`upsideDown`);
    console.log(photo);
  };
  photoSpin();
});

photoEl.addEventListener(`mouseleave`, e => {
  const photo = e.currentTarget;
  const photoSpin = () => {
    console.log(`left!`);
    photo.classList.remove(`upsideDown`);
    photo.classList.add(`rightSideUp`);
    console.log(photo);
  };
  // console.log(e.currentTarget);
  photoSpin();
});
