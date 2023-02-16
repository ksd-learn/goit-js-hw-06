const inpValue = document.getElementById('name-input');

function setValue() {
    let valueInp = inpValue.value.trim();
    
    if (valueInp) {
        document.getElementById('name-output').textContent = valueInp
    } else {
        document.getElementById('name-output').textContent = 'Anonymous'
    }
    
console.log(valueInp)
    
} 

inpValue.addEventListener("input", setValue);