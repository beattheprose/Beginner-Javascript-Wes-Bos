const hamburger = document.querySelector(`#hamburger`);

hamburger.addEventListener(`click`, () => {
  const vertNav = document.querySelector(`#vertNav`);
  if (vertNav.style.display === `none`) {
    vertNav.style.display = `flex`;
  } else {
    vertNav.style.display = `none`;
  }
});

const headshot = document.getElementById(`headshot`);
const modalOuter = document.querySelector(`.modal-outer`);

const showModal = () => modalOuter.classList.add(`open`);
const closeModal = () => modalOuter.classList.remove(`open`);

const handleClickOutside = e => {
  const clickOutside = !e.target.closest(`.modal-inner`);
  if (clickOutside) {
    closeModal();
  }
};

headshot.addEventListener(`click`, showModal);
modalOuter.addEventListener(`click`, handleClickOutside);

const slugify = (sentence, lowercase) => {
  if (lowercase) {
    return sentence.replace(/\s/g, `-`).toLowerCase();
  }
  return sentence.replace(/\s/g, `-`);
};
