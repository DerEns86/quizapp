let currentQuestion = 0;

function init() {
    document.getElementById('numberAllQuestions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
}

function answer(selection) {
    let selectedNumber = selection.slice(-1);
    
    let idOfRightAnswer = `answer_${questions[currentQuestion].right_answer}`;

    if (selectedNumber == questions[currentQuestion].right_answer) {
        console.log('check');
        document.getElementById(selection).classList.add('bg-success');
    } else {
        console.log('Falsch');
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
    }
    document.getElementById('btnNextQuestion').disabled = false;
}