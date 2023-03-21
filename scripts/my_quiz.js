const allQuestions = ["2 + 2 = ?", "2 - 10 = ?", "20 * 10 = ?"];
const allAnswears = [["4", "3", "2"], ["5", "-8", "-2"], ["200", "1000", "500"]];
const answers = ['a', 'b', 'a'];
const finish = "The End";

const userAnswears = [];

let intervalId;
var currentQuestionNumber = 0;
const questionTime = 6000;
const updateQuestionTime = 1200;
let currentQuestion = '';
let numberOfQuestions = 0;

function onLoad() {
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
    getAnswears()
    document.getElementById("question").innerText = currentQuestion;
    document.getElementById("answear1-label").innerText = allAnswears[currentQuestionNumber][0];
    document.getElementById("answear2-label").innerText = allAnswears[currentQuestionNumber][1];
    document.getElementById("answear3-label").innerText = allAnswears[currentQuestionNumber][2];
    document.getElementById("quiz").style.opacity = '1';
}

function closeQuiz() {
    getAnswears()
    document.getElementById("question").innerText = finish;
    document.getElementById("user-answears").style.display = "none";

    const redirect = document.createElement("a");
    redirect.href="statistics.html";
    redirect.innerText="Check, how you did";

    document.getElementById("quiz-form").appendChild(redirect);
    document.getElementById("quiz").style.opacity = '1';
    checkAnswears();
}

function getAnswears() {
    const form = document.getElementById("quiz-form");
    const answer = form["answear"].value;
    const radios = document.getElementsByTagName("input");
    radios[0].checked = false;
    radios[1].checked = false;
    radios[2].checked = false;

    userAnswears.push(answer);
}

function checkAnswears() {
    for (let i = 0; i < allAnswears.length; i++) {
        if (userAnswears[i] === answers[i]) {
            document.cookie = (String)(i + 1) + "=correct";
        } else {
            document.cookie = (String)(i + 1) + "=incorrect";
        }
    }
    console.log(document.cookie);
}