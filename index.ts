const hamburger = <HTMLElement>document.querySelector(`#hamburger`);

hamburger.addEventListener(`click`, () => {
  const vertNav = <HTMLElement>document.querySelector(`#vertNav`);
  if (vertNav.style.display === `none`) {
    vertNav.style.display = `flex`;
  } else {
    vertNav.style.display = `none`;
  }
});

const headshot = <HTMLElement>document.getElementById(`headshot`);
const modalOuter = <HTMLElement>document.querySelector(`.modal-outer`);

const showModal = () => modalOuter.classList.add(`open`);
const closeModal = () => modalOuter.classList.remove(`open`);

const clickOutsideHandler = (e) => {
  const clickOutside = !e.target.closest(`.modal-inner`);
  if (clickOutside) {
    closeModal();
  }
};

headshot.addEventListener(`click`, showModal);
modalOuter.addEventListener(`click`, clickOutsideHandler);
