function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function numberDiv() {
  destroyBoxes();
  createBoxes(valueInp.value)
}

function destroyBoxes() {
  divBoxes.querySelectorAll('div').forEach(elem => elem.remove())
}

function createBoxes(amount) {
  const divs = [];
  for (let i = 1; i <= amount; i++) {
    let elem = document.createElement('div');
    elem.append(i);
    elem.style.cssText = `background-color: ${getRandomHexColor()};
                          display: block;
                          width: ${30+i*10}px;
                          height: ${30+i*10}px;`;
    divs.push(elem);
  }
  divBoxes.append(...divs)
}

const divBoxes = document.getElementById('boxes');
const valueInp = document.querySelector('[type="number"]');
divBoxes.style.cssText = `margin-top: 20px;
                          display: flex;`;

document.querySelector('[data-create]').addEventListener('click', numberDiv);
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
