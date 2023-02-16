const inpDate = document.getElementById('validation-input');
const inpDateCount = inpDate.getAttribute('data-length');

function colorBord() {
    let countInp = inpDate.value.trim().length;
    if (countInp == inpDateCount) {
        document.querySelector('#validation-input').className = "valid"
    } else {
        document.querySelector('#validation-input').className = "invalid"
    }
    console.log(countInp)
}

inpDate.addEventListener("blur", colorBord);
