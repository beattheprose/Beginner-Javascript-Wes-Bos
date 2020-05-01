const alexList = document.querySelector(`.alex`);
console.log(alexList.textContent);

alexList.insertAdjacentText(`afterbegin`, `ALEX!!`);

console.log(alexList.textContent);
