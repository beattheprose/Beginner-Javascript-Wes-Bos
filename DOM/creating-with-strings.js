const item = document.querySelector(`.item`);

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `cute doggy`;
const myHTML = `
	<div class="wrapper">
		<h2>Cute dog</h2>
		<img src="${src}" alt="${desc}"/>
	</div>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);

myFragment.querySelector(`img`).classList.add(`round`);
document.body.appendChild(myFragment);
