let currentQuestion = 0;
let rightQuestions = 0;
let auidoSuccess = new Audio("audio/success.mp3");
let audioFail = new Audio("audio/fail.mp3");

function init() {
    document.getElementById('numberAllQuestions').innerHTML = questions.length;


    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {  //show Endscreen
        document.getElementById('contentContainer').classList.add('d-none');
        document.getElementById('endscreenContainer').classList.remove('d-none');

        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;

    } else {    //show Question
        let percent = (currentQuestion + 1) / questions.length;
        percent = percent * 100;
        console.log(percent);
        let question = questions[currentQuestion];

        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style.width = `${percent}%`;

        document.getElementById('numberCurrentQuestion').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question.question;
        document.getElementById('answer_1').innerHTML = question.answer_1;
        document.getElementById('answer_2').innerHTML = question.answer_2;
        document.getElementById('answer_3').innerHTML = question.answer_3;
        document.getElementById('answer_4').innerHTML = question.answer_4;
    }
}


function answer(selection) {
    let selectedNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${questions[currentQuestion].right_answer}`;

    if (selectedNumber == questions[currentQuestion].right_answer) {
        document.getElementById(selection).classList.add('bg-success');
        auidoSuccess.play();
        rightQuestions++;
    } else {
        console.log('Falsch');
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        audioFail.play();
    }
    document.getElementById('btnNextQuestion').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('btnNextQuestion').disabled = true;
    resetAnswerButtons();
    showQuestion();


}

function resetAnswerButtons() {
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
}

function restartGame() {
    document.getElementById('contentContainer').classList.remove('d-none');
    document.getElementById('endscreenContainer').classList.add('d-none');
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}