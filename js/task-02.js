const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulLiIngr = [];

for (let item of ingredients) {
  let li = document.createElement('li');
  li.className = 'item';
  li.append(item);
  ulLiIngr.push(li);
}

document.querySelector('#ingredients').append(...ulLiIngr)
