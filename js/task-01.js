const liEl = document.querySelectorAll('.item');

console.log('Number of categories: ', liEl.length);

for (let txt of liEl) {
    console.log('Category: ', txt.querySelector('h2').textContent);
    console.log('Elements: ', txt.querySelectorAll('li').length)
}

 