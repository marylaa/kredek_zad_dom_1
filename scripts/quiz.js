const form = document.getElementById("quiz-form");
form.addEventListener('submit', (exent) => {
    event.preventDefault();
    const answers = ['b', 'c'];

    for (let i = 1; i <= 2; i++) {
        const question = 'question' + i;
        const answer = form[question].value;
        let answerNumber = "answer" + i;
        if (answer === answers[i - 1]) {
            document.cookie = answerNumber + "=correct";
        } else {
            document.cookie = answerNumber + "=incorrect";
        }
        console.log(document.cookie);
    }
    window.location.href = "statistics.html";
})