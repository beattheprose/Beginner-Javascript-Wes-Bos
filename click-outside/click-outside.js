const cardButtons = document.querySelectorAll(`.card button`);
const modalInner = document.querySelector(`.modal-inner`);
const modalOuter = document.querySelector(`.modal-outer`);

const handleCardButtonClick = e => {
  const button = e.currentTarget;
  const card = button.closest(`.card`);
  const name = card.querySelector(`h2`).textcontent;
  const { src } = card.querySelector(`img`);
  const { description } = card.dataset;
  // populate modal
  modalInner.innerHTML = `
  <img height="500" width="400" src="${src.replace(
    `200`,
    `500`
  )}" alt="${name}"/>
  <p>${description}</p>
  `;
  // Show modal
  modalOuter.classList.add(`open`);
};

const closeModal = () => {
  modalOuter.classList.remove(`open`);
};

modalOuter.addEventListener(`click`, e => {
  const isOutside = !e.target.closest(`.modal-inner`);
  if (isOutside) {
    closeModal();
  }
});

// MY SOLUTION
// modalOuter.addEventListener(`click`, e => {
//   if (e.target.classList.value.includes(`modal-outer`)) {
//     closeModal();
//   }
// });

cardButtons.forEach(button =>
  button.addEventListener(`click`, handleCardButtonClick)
);

window.addEventListener(`keydown`, e => {
  if (e.key === `Escape`) {
    closeModal();
  }
});
