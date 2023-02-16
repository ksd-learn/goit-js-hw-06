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
    
    //Вариант 1
    //const date = {};
    //Array.from(nodeElem)
    //    .filter((item) => !!item.name)
    //    .map((elem) => date[elem.name] = elem.value.trim());
    //return date

    //Вариант 2
    const date = {};
    const dateForm = new FormData(formElem);
    Array.from(dateForm)
        .forEach(([key, value]) => date[key] = value.trim());
    return date
}

formElem.addEventListener('submit', pageNot);
