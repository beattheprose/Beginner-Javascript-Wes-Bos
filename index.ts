const hamburger = document.querySelector(`#hamburger`) as HTMLElement;

hamburger.addEventListener(`click`, () => {
  const vertNav = document.querySelector(`#vertNav`) as HTMLElement;
  if (vertNav.style.display === `none`) {
    vertNav.style.display = `flex`;
  } else {
    vertNav.style.display = `none`;
  }
});

const headshot = document.getElementById(`headshot`) as HTMLElement;
const modalOuter = document.querySelector(`.modal-outer`) as HTMLElement;

const showModal = () => modalOuter.classList.add(`open`);
const closeModal = () => modalOuter.classList.remove(`open`);

const clickOutsideHandler = (e: any) => {
  const clickOutside = !e.target.closest(`.modal-inner`);
  if (clickOutside) {
    closeModal();
  }
};

headshot.addEventListener(`click`, showModal);
modalOuter.addEventListener(`click`, clickOutsideHandler);
