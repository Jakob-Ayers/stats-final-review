window.addEventListener('load', (event) => {
    placeAnswers(document.getElementById("anwserlist").innerHTML)
});

function placeAnswers(answerList) {
    for (i = 0; i < answerList.length; i++) {
        document.getElementById("answers").innerHTML += `<li>${answerList[i]}</li>`
    }
}