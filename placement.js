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


//I gave each question an id. So for example the below question has an id of grade. In order to more efficiently display the math and cs questions, I made it so that if the id is in the format Math-[LevelNumber]-[QuestionNumber] then it would be a math question (for example, Math-3-4 or CS-S-1)
var questions = {
    'grade': new Question('What grade are you in?', 
        [
            new Answer('K', 'grade K', 'Math-0-0'),
            new Answer('1', 'grade 1', 'Math-0-0'),
            new Answer('2', 'grade 2', 'Math-0-0'),
            new Answer('3', 'grade 3', 'Math-0-0'),
            new Answer('4', 'grade 4', 'Math-0-0'),
            new Answer('5', 'grade 5', 'Math-1-0'),
            new Answer('6', 'grade 6', 'Math-1-0'),
            new Answer('7', 'grade 7', 'Math-2-0'),
            new Answer('8', 'grade 8', 'Math-3-0')
        ]
    ),
    'CSstart': new Question('Start CS section',
        [
            new Answer('Begin', 'began cs section', 'CSexp')
        ]
    ),
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

var mathQuestions = [
    [
        ['Find 56 + 37.', [['83', 'f'], ['93', 't'], ['19', 'f'], ['87', 'f']], 60],
        ['What is the name of a polygon with 3 sides?', [['Square', 'f'], ['Rectangle', 'f'], ['Rhombus', 'f'], ['Triangle', 't']], 60],
        ['Joe had $63 before going to the store. He has $12 now. How much did he spend?', [['$51', 't'], ['$75', 'f'], ['$39', 'f'], ['$63', 'f']], 60],
        ['I have 4 sides, and all of my sides are the same length. What am I?', [['Pentagon', 'f'], ['Parallelogram', 'f'], ['Trapezoid', 'f'], ['Rhombus', 't']], 60],
        ['Find 90 - 20.', [['50', 'f'], ['60', 'f'], ['70', 't'], ['80', 'f']], 60],
        ['What is the tens digit of 67?', [['10', 'f'], ['6', 't'], ['7', 'f']], 60],
        ['Find 16 + 16 + 16.', [['16', 'f'], ['32', 'f'], ['48', 't'], ['64', 'f']], 60],
        ['When I am added to another number, I do not change that number. What am I?', [['1', 'f'], ['10', 'f'], ['0', 't'], ['+', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
    ],
    [
        ['What is 7 times 9?', [['81', 'f'], ['72', 'f'], ['63', 't'], ['54', 'f']], 60],
        ['Round 3.459 to the nearest tenth.', [['3', 'f'], ['3.5', 't'], ['3.4', 'f'], ['3.46', 'f']], 60],
        ['Which is larger, 1/3 or 1/5?', [['1/5', 'f'], ['1/3', 't'], ['5', 'f']], 60],
        ['Which of the answers is closest to 4231 + 12956?', [['1600', 'f'], ['1700', 'f'], ['16000', 'f'], ['17000', 't']], 60],
        ['Find 353 + 347.', [['710', 'f'], ['703', 'f'], ['700', 't'], ['696', 'f']], 60],
        ['What is the remainder when 771 is divided by 7?', [['1', 't'], ['6', 'f'], ['5', 'f'], ['2', 'f']], 60],
        ['Farmer John has 3 times as many cows as chickens. He has 36 cows. How many chickens does he have?', [['108', 'f'], ['12', 't'], ['33', 'f'], ['39', 'f']], 60],
        ['Which equation is equivalent (equal to) 7 + 7 + 7 + 7?', [['7 + 4', 'f'], ['4 + 7', 'f'], ['7 * 4', 't'], ['4 * 7', 't']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
    ],
    [
        ['Find 21 * 19.', [['400', 'f'], ['200', 'f'], ['399', 't'], ['199', 'f']], 60],
        ['What is the area of a rectangle with sidelengths 21 and 19?', [['200', 'f'], ['199.5', 'f'], ['399', 't'], ['750', 'f']], 60],
        ['3x + 4 = 34. Find x.', [['', 'f'], ['', 'f'], ['', 'f'], ['', 'f']], 60],
        ['A triangle has a base length of 12 and a height of 7. What is its area?', [['84', 'f'], ['42', 't'], ['21', 'f'], ['12', 'f']], 60],
        ['Find 7 * 7 * 7.', [['216', 'f'], ['217', 'f'], ['218', 'f'], ['343', 't']], 60],
        ['Which expression is equivalent to 7 * 7 * 7?', [['3^7', 'f'], ['3 * 7', 'f'], ['7 * 3', 'f'], ['7^3', 't']], 60],
        ['Find 3.7 * 12.1', [['44', 'f'], ['44.77', 't'], ['447.7', 'f'], ['0.4477', 'f']], 60],
        ['A circle has diameter 8. Which answer is closest to the area?', [['16', 'f'], ['32', 'f'], ['50', 't'], ['64', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
    ],
    [
        ['3x + 4y = 12. 7x - 2y = 11. Find (x, y).', [['(3, 6)', 'f'], ['(3, 3/2)', 't'], ['(23/17, 1)', 'f'], ['(2, 4)', 'f']], 60],
        ['Find 1/3 + 1/4 + 1/5.', [['1/12', 'f'], ['13/20', 'f'], ['47/60', 't'], ['73/120', 'f']], 60],
        ['A box has sidelengths a, b, c, and area 11. Find the area of a box with sidelengths 3*a, 3*b, 3*c.', [['11', 'f'], ['33', 'f'], ['99', 'f'], ['297', 't']], 60],
        ['Find 8^4 divided by 4^4.', [['2', 'f'], ['8', 'f'], ['16', 't'], ['256', 'f']], 60],
        ['A random digit from 0 to 9 is chosen. What is the probability that it is a prime?', [['2/5', 't'], ['4/9', 'f'], ['1/2', 'f'], ['4/5', 'f']], 60],
        ['Find the sum of the first 20 odd numbers.', [['210', 'f'], ['400', 't'], ['441', 'f']], 60],
        ['Find the roots of x^2-2x-35.', [['(5, 7)', 'f'], ['(-5, 7)', 't'], ['(5, -7)', 'f'], ['(-5, -7)', 'f']], 60],
        ['f(2x-1) = x^3 + 3x^2 - 9x + 1. Find f(9).', [['77', 'f'], ['156', 't'], ['891', 'f']], 60]
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
    ],
    [
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
        ['Find the exponent of 3 in the prime factorization of 63 factorial?', [['15', 'f'], ['30', 't'], ['63', 'f'], ['81', 'f']], 60],
        ['a, b, c is an increasing geometric sequence of positive numbers. c is 48 greater than a. a, b, c - 24 is an arithmetic sequence. Find b.', [['6', 'f'], ['18', 't'], ['24', 'f'], ['56', 'f']], 60],
        ['Two rectangular enclosures are to be built such that they share a wall. Farmer John has 120 feet of fencing to build the walls. What is the maximum combined area of the enclosures?', [['28800/49', 'f'], ['550', 'f'], ['600', 't'], ['648', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
        ['Sample',[['Correct', 't'], ['Incorrect', 'f']], 60],
    ]
]

var CSQuestions = {
    scratch: [
        ['What is a sprite in Scratch?', [['A kind of bug', 'f'], ['A soda company', 'f'], ['A species of deciduous tree found in North America', 'f'], ['A kind of image that can be used in Scratch ', 't']]],
        ['What is a sprite in Scratch?', [['A kind of bug', 'f'], ['A soda company', 'f'], ['A species of deciduous tree found in North America', 'f'], ['A kind of image that can be used in Scratch ', 't']]],
        ['What is a sprite in Scratch?', [['A kind of bug', 'f'], ['A soda company', 'f'], ['A species of deciduous tree found in North America', 'f'], ['A kind of image that can be used in Scratch ', 't']]],
        ['What is a sprite in Scratch?', [['A kind of bug', 'f'], ['A soda company', 'f'], ['A species of deciduous tree found in North America', 'f'], ['A kind of image that can be used in Scratch ', 't']]],
        ['What is a sprite in Scratch?', [['A kind of bug', 'f'], ['A soda company', 'f'], ['A species of deciduous tree found in North America', 'f'], ['A kind of image that can be used in Scratch ', 't']]],
    ],
    py: [
        ['Python question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Python question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Python question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Python question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Python question', [['Correct', 't'], ['Incorrect', 'f']]],
    ],
    java: [
        ['Java question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Java question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Java question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Java question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Java question', [['Correct', 't'], ['Incorrect', 'f']]],
    ]
}

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

    quizContainer.innerHTML = '<div id="quiz-timer"></div><div class="question-title" id="question-title"></div><form class="quiz-form" id="quiz-form"><div class="answers" id="answers"></div><div class="submit-button-container" id="submit-button-container"></div></form>'

    loadQuestion(startingQuestion, {correct: 0, total: 0, quizStarted: false, level: 0, lQuestion: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]});
}

function loadQuestion(questionId, results) {
    console.log(questionId);
    var questionSplit = questionId.split('-');
    if(questionSplit[0] === 'Math' || questionSplit[0] === 'CS') {
        buildQuizQuestion(questionId, questionSplit[0], questionSplit[1], questionSplit[2], results);
    }
    else
    {
        buildQuestion(questions[questionId], results, 0);
    }
}

function buildQuestion(question, results, timer) {

    if(question.answers.length === 0) {
        showResults(results);
        return;
    }

    var questionTitle = document.getElementById('question-title');
    var answers = document.getElementById('answers');
    var submitButtonContainer = document.getElementById('submit-button-container');
    var quizForm = document.getElementById('quiz-form');

    questionTitle.innerHTML = question.prompt;

    answers.innerHTML = '';
    Object.keys(question.answers).forEach( (key) => {
        var answer = question.answers[key];
        answers.innerHTML += '<div class="answer-container"><input type="radio" name="radio-group" class="quiz-choice" data-status="' + answer.status +'" data-child="' + answer.children + '" id="' + key + '"><label class="answer-label" for="' + key + '" id="l' + key + '"><div class="answer-button"></div><div class="answer-text">' + answer.text + '</div></label></div>';
    });
    
    submitButtonContainer.innerHTML = '<button type="button" id="submit-button">Submit</button>';
    document.getElementById('submit-button').addEventListener('click', function() {submitQuestion(question, results)});

}

var interval;

function buildQuizQuestion(questionId, quiz, level, question, results) {
    results.quizStarted = true;
    var prompt = '';
    var answers = [];
    var timer = 0;
    if(quiz === 'Math') {
        if(!mathQuestions[level][question]) {
            loadQuestion('CSstart', results)
            return;
        }
        prompt = mathQuestions[level][question][0];
        var arr = mathQuestions[level][question][1];
        arr.forEach((key) => {
            answers.push(new Answer(key[0], key[1], questionId) );
        })
        timer = mathQuestions[level][question][2];
    }
    else if(quiz === 'CS') {
        if(!CSQuestions[level][question]) {
            loadQuestion('CSstart', results)
            return;
        }
        prompt = CSQuestions[level][question][0];
        var arr = CSQuestions[level][question][1];
        arr.forEach((key) => {
            answers.push(new Answer(key[0], key[1], questionId) );
        })
        timer = CSQuestions[level][question][2];
    }
    
    var q = new Question(prompt, answers);

    buildQuestion(q, results, timer);

    clearInterval(interval);

    if(timer != 0) {
        var start = Date.now();
        interval = setInterval(() => {
            var delta = Date.now() - start;
            updateTimer(Math.floor(timer - (delta / 1000) ), results, q);
        }, 100)
    }


}

function updateTimer(time, results, question) {
    document.getElementById('quiz-timer').innerHTML = 'Time left for question: ' + Math.floor(time/60) + ':' + Math.round(time%60);
    if(time === 0) {
        submitQuestion(question, results);
    }
}

function submitQuestion(question, results) {
    console.log(question);
    
    var choices = document.getElementsByClassName('quiz-choice');

    var selected = null;
    var answerChosen = false;
    var selectedStatus = '';
    for(const choice of choices) {
        selected = choice.dataset.child;
        if(choice.checked) {
            selectedStatus = choice.dataset.status;
            answerChosen = true;
        }
    }
    if(!answerChosen) {
        selectedStatus = 'f';
    }
    var selectedSplit = selected.split('-');
    
    if(results.quizStarted) {
        if(selectedStatus === 't') {
            results.correct++;
        }
        results.total++;
        if(results.total != 0 && results.total % 5 === 0) {
            if(results.correct <= 2) {
                if(selectedSplit[1] != 0) {
                    results.lQuestion[selectedSplit[1]][0] += results.correct;
                    results.lQuestion[selectedSplit[1]][1] += results.total;
                    selectedSplit[1]--;
                    selectedSplit[2] = results.lQuestion[selectedSplit[1]][1];
                }
                else
                {
                    selectedSplit[2]++;
                }
            }
            else if(results.correct >= 4) {
                if(selectedSplit[1] != 4) {
                    results.lQuestion[selectedSplit[1]][0] += results.correct;
                    results.lQuestion[selectedSplit[1]][1] += results.total;
                    selectedSplit[1]++;
                    selectedSplit[2] = results.lQuestion[selectedSplit[1]][1];
                }
                else
                {
                    selectedSplit[2]++;
                }
            }
            else
            {
                selectedSplit[2]++;
            }
            results.correct = 0;
            results.total = 0;
        }
        else
        {
            selectedSplit[2]++;
        }
        selected = selectedSplit[0] + '-' + selectedSplit[1] + '-' + selectedSplit[2];
    }
    console.log(results);
    
    loadQuestion(selected, results);
}

function showResults(results) {
    var quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '<div class="results-container"><div class="results-title">Quiz Results</div><div class="results-display">'
    for(var i = 0; i < 5; i++) {
        quizContainer.innerHTML += '<div class="results-text">' + results.lQuestion[i][0] + '/' + results.lQuestion[i][1] + '</div>'
    }
    quizContainer.innerHTML += '<div class="results-text">Suggested class: (some class)</div></div></div>'
}
