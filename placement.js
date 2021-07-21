var quizzes = [
    'CS',
    'Math',
];
//quizzes are stored separate from questions in case the name of the objects CS and Math are minified.
var questions = {
    CS:
        [
            {
                prompt: 'Sample CS question text 1',
                answers: {
                    a: 'Answer choice a',
                    b: 'Answer choice b',
                    c: 'Answer choice c'
                },
                correctAnswer: 'a'
            },
            {
                prompt: 'Sample question text 2 ',
                answers: {
                    a: 'Answer choice a',
                    b: 'Answer choice b',
                    c: 'Answer choice c'
                },
                correctAnswer: 'b'
            },
            {
                prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut faucibus. Feugiat in ante metus dictum at tempor. Enim nunc faucibus a pellentesque. Mi tempus imperdiet nulla malesuada. ',
                answers: {
                    a: 'a',
                    b: 'b',
                    c: 'c'
                },
                correctAnswer: 'a'
            }
        ],
    Math:
        [
            {
                prompt: 'Math question 1',
                answers: {
                    a: 'Math answer a',
                    b: 'Math answer b',
                    c: 'Math answer c'
                }
            },
            {
                prompt: 'Math question 2',
                answers: {
                    a: 'Math answer a',
                    b: 'Math answer b',
                    c: 'Math answer c'
                }
            }
        ]
};

function buildQuizButtons() {
    var selectionContainer = document.getElementById('selection-container');

    selectionContainer.innerHTML = '';
    quizzes.forEach((e) => {
        selectionContainer.innerHTML += '<button class="quiz-button" id="quiz-button-' + e + '">' + e + '</button>'
    })
    
    quizzes.forEach((e) => {
        document.getElementById('quiz-button-' + e).addEventListener('click', function() {buildQuiz(e)} );
    })
}

buildQuizButtons();

function buildQuiz(quiz) {
    var quizContainer = document.getElementById('quiz-container');

    quizContainer.innerHTML='<div class="question-number" id="question-number"></div><div class="question-title" id="question-title"></div><form class="quiz-form" id="quiz-form"><div class="answers" id="answers"></div><div class="submit-button-container" id="submit-button-container"></div></form>'

    buildQuestion(0, quiz, {correct: 0, total: 0});
}


function buildQuestion(question, quiz, results) {
    if(question >= questions[quiz].length) {
        showResults(results, quiz);
        return;
    }

    var questionNumber = document.getElementById('question-number');
    var questionTitle = document.getElementById('question-title');
    var answers = document.getElementById('answers');
    var submitButtonContainer = document.getElementById('submit-button-container');
    var quizForm = document.getElementById('quiz-form');

    questionNumber.innerHTML = 'Question ' + (question + 1);
    questionTitle.innerHTML = questions[quiz][question].prompt;

    answers.innerHTML = '';
    Object.keys(questions[quiz][question].answers).forEach( (key) => {
        answers.innerHTML += '<div class="answer-container"><input type="radio" name="' + question + '" class="quiz-choice" id="q' + question + key + '"><label class="answer-label" for="q' + question + key + '" id="l' + question + key + '"><div class="answer-button"></div><div class="answer-text">' + questions[quiz][question].answers[key] + '</div></label></div>';
    });
    
    submitButtonContainer.innerHTML = '<button type="button" id="submit-button">Button</button>';
    document.getElementById('submit-button').addEventListener('click', function() {submitQuestion(question, quiz, results)});

    
}

function submitQuestion(question, quiz, results) {
    results.total++;
    var choices = document.getElementsByClassName('quiz-choice');

    var selected = null;
    var answerChosen = false;
    for(const choice of choices) {
        if(choice.checked) {
            selected = choice.id;
            answerChosen = true;
        }
    }
    if(!answerChosen) {
        return;
    }

    selected = selected[selected.length - 1];

    if(selected === questions[quiz][question].correctAnswer) {
        results.correct++;
    }

    results[question] = {yourAnswer: selected, correctAnswer: questions[quiz][question].correctAnswer};
    buildQuestion(question + 1, quiz, results);
}

function showResults(results, quiz) {
    var quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '<div class="results-container"><div class="results-title">' + quiz + ' Quiz' + '</div><div class="results-display">Score: ' + results.correct + '/' + results.total + '</div></div>'
}
