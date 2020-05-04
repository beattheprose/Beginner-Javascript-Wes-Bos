const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const canvasOptions = document.querySelector(`#continuousOptions`);
const shakeBtn = document.querySelector(`.shake`);

const { width, height } = canvas;
const MOVE_AMOUNT = 10;

let x = Math.floor(Math.random() * (width - 15));
let y = Math.floor(Math.random() * (height - 15));

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 25;
ctx.strokeStyle = `#DF2020`;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

const handleOptions = e => {
  const sliderValue = e.currentTarget.querySelector(`[name="sizeSlider"]`)
    .value;
  const colorValue = e.currentTarget.querySelector(`[name="lineColor"]`).value;
  ctx.lineWidth = sliderValue;
  ctx.strokeStyle = colorValue;
};

const draw = ({ key }) => {
  // set our pen down on the paper
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move the cursor according to user input
  switch (key) {
    default:
      break;
    case `ArrowUp`:
      y -= MOVE_AMOUNT;
      break;
    case `k`:
      y -= MOVE_AMOUNT;
      break;
    case `ArrowDown`:
      y += MOVE_AMOUNT;
      break;
    case `j`:
      y += MOVE_AMOUNT;
      break;
    case `ArrowRight`:
      x += MOVE_AMOUNT;
      break;
    case `l`:
      x += MOVE_AMOUNT;
      break;
    case `ArrowLeft`:
      x -= MOVE_AMOUNT;
      break;
    case `h`:
      x -= MOVE_AMOUNT;
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
};
const handleKey = e => {
  // execute draw once key is pressed
  if (
    e.key.includes(`Arrow`) ||
    e.key.includes(`h`) ||
    e.key.includes(`j`) ||
    e.key.includes(`k`) ||
    e.key.includes(`l`)
  ) {
    e.preventDefault();
    draw({ key: e.key });
  }
};

const clearCanvas = () => {
  // Wipe the board when shake is clicked
  canvas.classList.add(`shake`);
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    `animationend`,
    () => {
      canvas.classList.remove(`shake`);
    },
    { once: true }
  );
};

const shakeShortcut = e => {
  // Enables clearCanvas to be fired on ctrl+enter
  if (e.ctrlKey && e.key === `Enter`) {
    console.log(e.key);
    clearCanvas();
  }
};

window.addEventListener(`keydown`, handleKey);
shakeBtn.addEventListener(`click`, clearCanvas);
window.addEventListener(`keydown`, shakeShortcut);
canvasOptions.addEventListener(`change`, handleOptions);
canvasOptions.addEventListener(`change`, handleOptions);
