const allQuestions = ["2 + 2 = ?", "2 - 10 = ?", "20 * 10 = ?"];
const allAnswears = [["4", "3", "2"], ["5", "-8", "-2"], ["200", "1000", "500"]];
const finish = "The End";

let intervalId;
var currentQuestionNumber = 0;
const questionTime = 6000;
const updateQuestionTime = 1200;
let currentQuestion = '';
let numberOfQuestions = 0;

setUpQuestionDisplay(allQuestions, allAnswears);

function setUpQuestionDisplay(allQuestions, allAnswears) {
    numberOfQuestions = allQuestions.length;
    document.getElementById("question").innerText = allQuestions[0];
    document.getElementById("answear1-label").innerText = allAnswears[0][0];
    document.getElementById("answear2-label").innerText = allAnswears[0][1];
    document.getElementById("answear3-label").innerText = allAnswears[0][2];
    intervalId = setInterval(changeQuestion, questionTime);
}

function updateQuestionDiv() {
    fadeout();
    setTimeout(updateHtml, updateQuestionTime);
}

function changeQuestion() {
    currentQuestionNumber = currentQuestionNumber + 1;
    if (currentQuestionNumber == numberOfQuestions) {
        fadeout();
        closeQuiz();
        clearInterval(intervalId);
        return;
    }
    currentQuestionNumber = currentQuestionNumber % numberOfQuestions;
    currentQuestion = allQuestions[currentQuestionNumber];
    updateQuestionDiv();
}

function fadeout() {
    document.getElementById("quiz").style.opacity = 0;
}

function updateHtml() {
    document.getElementById("question").innerText = currentQuestion;
    document.getElementById("answear1-label").innerText = allAnswears[currentQuestionNumber][0];
    document.getElementById("answear2-label").innerText = allAnswears[currentQuestionNumber][1];
    document.getElementById("answear3-label").innerText = allAnswears[currentQuestionNumber][2];
    document.getElementById("quiz").style.opacity = '1';
}

function closeQuiz() {
    document.getElementById("question").innerText = finish;
    document.getElementById("answear1-label").style.display = "none";
    document.getElementById("answear1").style.display = "none";

    const redirect = document.createElement("a");
    redirect.href="statistics.html";
    redirect.innerText="Check, how you did";

    document.getElementById("answear2-label").innerText = "";
    document.getElementById("answear2-label").appendChild(redirect)
    document.getElementById("answear2").style.display = "none";
    document.getElementById("answear3-label").style.display = "none";
    document.getElementById("answear3").style.display = "none";
    document.getElementById("quiz").style.opacity = '1';
}