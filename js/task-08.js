const formElem = document.querySelector('.login-form');

function pageNot(event) {
    event.preventDefault();
    const date = formDate(formElem);
    console.log(date);
    if (Object.values(date).includes('')) {
        alert('Поле не заполнено')
    } else {

        //function - передать данные на сервер

        formElem.reset()
    }
}

function formDate(nodeElem) {
    const date = {};
    Array.from(nodeElem)
        .filter((item) => !!item.name)
        .map((elem) => date[elem.name] = elem.value);
    return date
}

formElem.addEventListener('submit', pageNot);
