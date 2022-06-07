window.addEventListener('load', (event) => {
    placeAnswers(document.getElementById("anwserlist").innerHTML)
});

function placeAnswers(answerList) {
    for (i = 0; i < answerList.length; i++) {
        if (answerList[i] == ' ') {
            answerText = `<li>Question crossed out</li>`
        } else {
            answerText = `<li>${answerList[i]}</li>`
        }

        document.getElementById("answers").innerHTML += answerText
    }
}