let button = document.getElementById("total");
let positiveDiv = document.getElementById("positive-result");
let negativeDiv = document.getElementById("negative-result");
button.addEventListener('click', checkTest);

function checkTest() {
    let i = 0;
    let questionOne = document.getElementById("question1").value;
    if (questionOne === "4") {
        i++
    }
    let questionTwo = document.getElementById("question2").value;
    if (questionTwo === "11") {
        i++
    }
    let questionThree = document.getElementById("question3").value;
    if (questionThree === "10") {
        i++
    }
    let questionFour = document.getElementById("question4").value;
    if (questionFour === "2") {
        i++
    }
    let questionFive = document.getElementById("question5").value;
    if (questionFive === "1") {
        i++
    }
    if (questionOne === '' || questionTwo === '' || questionThree === '' || questionFour === '' || questionFive === '') {
        negativeDiv.innerHTML = `Ответьте пожалуйста на все вопросы`
        positiveDiv.innerHTML = ''
    } else if (i === 3 || i === 4) {
        positiveDiv.innerHTML = `Вы ответили правильно на ${i} вопроса, тест сдан!`
        negativeDiv.innerHTML = '';
    } else if (i === 5) {
        positiveDiv.innerHTML = `Вы ответили правильно на ${i} вопросов, тест сдан!`
        negativeDiv.innerHTML = '';
    } else if (i === 0) {
        positiveDiv.innerHTML = '';
        negativeDiv.innerHTML = `Вы ответили правильно на ${i} вопросов, тест не сдан!`
    } else if (i === 1) {
        positiveDiv.innerHTML = '';
        negativeDiv.innerHTML = `Вы ответили правильно только на ${i} вопрос, тест не сдан!`
    } else {
        positiveDiv.innerHTML = '';
        negativeDiv.innerHTML = `Вы ответили правильно только на ${i} вопроса, тест не сдан!`
    }
}

