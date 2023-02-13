

function setValue() {
    let valueInp = document.getElementById('name-input').value;
    if (valueInp) {
        document.getElementById('name-output').textContent = valueInp
    } else {
        document.getElementById('name-output').textContent = 'Anonymous'
    }
console.log(valueInp)
    
} 
document.getElementById('name-input')
        .addEventListener("input", setValue);