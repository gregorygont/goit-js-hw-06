function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = +controls.querySelector('input').value;
  let boxSize = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const boxColor = getRandomHexColor();
    const boxHTML = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor};"></div>`;
    boxesHTML += boxHTML;
    boxSize += 10;
  }

  boxesContainer.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}