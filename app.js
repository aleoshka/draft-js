'use strict';

let email = "lia@example.com";

//Пример проверки валидности емейла:
if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    console.log("Валидный емейл");
} else {
    console.log("Невалидный емейл");
}

//Пример проверки валидности кредитной карточки:
let creditCardNumber = "1234-5678-0123-1234";

if (creditCardNumber.match(/^\d{4}-\d{4}-\d{4}-\d{4}$/)) {
    console.log("Валидный номер");
} else {
    console.log("Невалидный номер");
}
