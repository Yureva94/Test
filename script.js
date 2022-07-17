let button = document.getElementById("total");
let positiveDiv = document.getElementById("positive-result");
let negativeDiv = document.getElementById("negative-result");
button.addEventListener('click', checkTest);

function checkTest() {
    let i = 0;
    let q1 = document.getElementById("question1").value;
    if (q1 === "4") {
        i++
    }
    let q2 = document.getElementById("question2").value;
    if (q2 === "11") {
        i++
    }
    let q3 = document.getElementById("question3").value;
    if (q3 === "10") {
        i++
    }
    let q4 = document.getElementById("question4").value;
    if (q4 === "2") {
        i++
    }
    let q5 = document.getElementById("question5").value;
    if (q5 === "1") {
        i++
    }
    if (q1 === '' || q2 === '' || q3 === '' || q4 === '' || q5 === '') {
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

