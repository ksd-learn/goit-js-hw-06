function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorValue() {
  const value = getRandomHexColor();
  document.body.style.backgroundColor = `${value}`;
  document.querySelector('.color').textContent = value;
}

document.querySelector('.change-color').addEventListener('click', colorValue);
