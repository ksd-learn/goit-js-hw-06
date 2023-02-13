let counterValue = 0;

const incr = () => {
    counterValue += 1;
    setCount();
};
const decr = () => {
    counterValue -= 1;
    setCount();
};

const setCount = () => document.getElementById('value').textContent = counterValue;

document.querySelector('[data-action="decrement"]')
        .addEventListener("click", decr);

document.querySelector('[data-action="increment"]')
        .addEventListener("click", incr);
        
