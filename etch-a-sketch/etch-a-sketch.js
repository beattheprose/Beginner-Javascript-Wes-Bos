const canvas = document.querySelector(`#etch-a-sketch`);
const canvasOptions = document.querySelector(`[name="canvasOptions"]`);
const ctx = canvas.getContext(`2d`);
const shakeBtn = document.querySelector(`.shake`);
const { width, height } = canvas;
const MOVE_AMOUNT = 10;

let x = Math.floor(Math.random() * (width - 15));
let y = Math.floor(Math.random() * (height - 15));
let hue = 0;

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 25;
ctx.strokeStyle = `hsl(${hue} 100% 75%)`;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

const draw = ({ key }) => {
  // set our pen down on the paper
  ctx.beginPath();
  ctx.moveTo(x, y);
  // increment the hue
  hue += MOVE_AMOUNT;
  ctx.strokeStyle = `hsl(${hue} 75% 50%)`;
  // move the cursor according to user input
  switch (key) {
    default:
      break;
    case `ArrowUp`:
      y -= MOVE_AMOUNT;
      break;
    case `ArrowDown`:
      y += MOVE_AMOUNT;
      break;
    case `ArrowRight`:
      x += MOVE_AMOUNT;
      break;
    case `ArrowLeft`:
      x -= MOVE_AMOUNT;
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
};
const handleKey = e => {
  if (e.key.includes(`Arrow`)) {
    e.preventDefault();
    draw({ key: e.key });
  }
};

const clearCanvas = () => {
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

const change = (lineColor, enbiggen) => {
  ctx.strokeStyle = `${lineColor}`;
  console.log(lineColor);
  if (enbiggen) {
    console.log(`embiggen called`);
    ctx.lineWidth = 100;
  }
};
const handleForm = e => {
  e.preventDefault();
  // console.log({
  //   lineColor: e.currentTarget.elements[0].value,
  //   enbiggen: e.currentTarget.elements[1].checked,
  // });
  change({
    lineColor: e.currentTarget.elements[0].value,
    enbiggen: e.currentTarget.elements[1].checked,
  });
};

canvasOptions.addEventListener(`submit`, handleForm);
window.addEventListener(`keydown`, handleKey);
shakeBtn.addEventListener(`click`, clearCanvas);
