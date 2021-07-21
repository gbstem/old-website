var startingQuestion = 'grade';

class Question {
    //typed variables: id: string, prompt: string, answers: array of Answer objects
    constructor(prompt, answers) {
        this.prompt = prompt;
        this.answers = answers;
    }
}

//WARNING: ids have to be added if js is minified

class Answer {
    //typed variables: text: string, status: string, children: string (id of the question this answer links to)
    constructor(text, status, children) {
        this.text = text;
        this.status = status;
        this.children = children;
    }
}

//quizzes are stored separate from questions in case the name of the objects CS and Math are minified.


var questions = {
    'grade': new Question('What grade are you in?', 
        [
            new Answer('K', 'grade K', 'K-1'),
            new Answer('1', 'grade 1', 'K-1'),
            new Answer('2', 'grade 2', '2-5'),
            new Answer('3', 'grade 3', '2-5'),
            new Answer('4', 'grade 4', '2-5'),
            new Answer('5', 'grade 5', '2-5'),
            new Answer('6', 'grade 6', '6-8'),
            new Answer('7', 'grade 7', '6-8'),
            new Answer('8', 'grade 8', '6-8'),
            new Answer('9+', 'grade 9+', '6-8'),
        ]
    ),
    'K-1': new Question('Sample', []),
    '2-5': new Question('Sample', []),
    '6-8': new Question('Sample', []),
    'CSexp': new Question('Do you have any prior experience in CS?', 
        [
            new Answer('Yes', 'Has experience with CS', 'Scratchpriorexp'),
            new Answer('No', 'No experience with CS', 2)
        ]
    ),
    'Scratchexp': new Question('Do you have any prior experience with Scratch?', 
        [
            new Answer('Yes', 'Has experience with OOP', 3),
            new Answer('No', 'Has experience with OOP', 3)
        ]
    )
};

/*
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

*/

function buildQuizStart() {
    var quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '<div class="quiz-start-title">Placement Test</div><div id="quiz-start-button-container"><button id="quiz-start-button">Start</button></div>'
    document.getElementById('quiz-start-button').addEventListener('click', (e) => {
        buildQuiz();
    });
}

buildQuizStart();

function buildQuiz() {
    var quizContainer = document.getElementById('quiz-container');

    quizContainer.innerHTML = '<div class="question-title" id="question-title"></div><form class="quiz-form" id="quiz-form"><div class="answers" id="answers"></div><div class="submit-button-container" id="submit-button-container"></div></form>'

    buildQuestion(startingQuestion, {correct: 0, total: 0});
}

function buildQuestion(question, results) {
    if(questions[question].answers.length === 0) {
        showResults(results);
        return;
    }

    var questionTitle = document.getElementById('question-title');
    var answers = document.getElementById('answers');
    var submitButtonContainer = document.getElementById('submit-button-container');
    var quizForm = document.getElementById('quiz-form');

    questionTitle.innerHTML = questions[question].prompt;

    answers.innerHTML = '';
    Object.keys(questions[question].answers).forEach( (key) => {
        var answer = questions[question].answers[key];
        answers.innerHTML += '<div class="answer-container"><input type="radio" name="' + question + '" class="quiz-choice" data-child="' + answer.children + '" id="' + key + '"><label class="answer-label" for="' + key + '" id="l' + key + '"><div class="answer-button"></div><div class="answer-text">' + answer.text + '</div></label></div>';
    });
    
    submitButtonContainer.innerHTML = '<button type="button" id="submit-button">Submit</button>';
    document.getElementById('submit-button').addEventListener('click', function() {submitQuestion(question, results)});

    
}

function submitQuestion(question, results) {
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

    console.log(selected);

    buildQuestion(selected, results);
}

function showResults(results) {
    var quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '<div class="results-container"><div class="results-title">Quiz Results</div><div class="results-display">Suggested class: (some class)</div></div>'
}
