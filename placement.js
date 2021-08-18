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


//I gave each question an id. So for example the below question has an id of grade. In order to more efficiently display the math and cs questions, I made it so that if the id is in the format Math-[LevelNumber]-[QuestionNumber] then it would be a math question (for example, Math-3-4 or CS-0-1)
var questions = {
    'grade': new Question('What grade are you in?', 
        [
            new Answer('K', 'grade K', 'Math-0-0'),
            new Answer('1', 'grade 1', 'Math-0-0'),
            new Answer('2', 'grade 2', 'Math-1-0'),
            new Answer('3', 'grade 3', 'Math-1-0'),
            new Answer('4', 'grade 4', 'Math-2-0'),
            new Answer('5', 'grade 5', 'Math-2-0'),
            new Answer('6', 'grade 6', 'Math-3-0'),
            new Answer('7', 'grade 7', 'Math-3-0'),
            new Answer('8', 'grade 8', 'Math-3-0')
        ]
    ),
    'CSstart': new Question('Start CS section',
        [
            new Answer('Begin', 'began cs section', '0exp')
        ]
    ),
    '0exp': new Question('Do you have any prior experience with Scratch?', 
        [
            new Answer('Yes', 'Has experience with Scratch', 'CS-0-0'),
            new Answer('No', 'No experience with Scratch', '1exp')
        ]
    ),
    '1exp': new Question('Do you have any prior experience with Python?', 
        [
            new Answer('Yes', 'Has experience with Python', 'CS-1-0'),
            new Answer('No', 'No experience with Python', '2exp')
        ]
    ),
    '2exp': new Question('Do you have any prior experience with Java?', 
        [
            new Answer('Yes', 'Has experience with Java', 'CS-2-0'),
            new Answer('No', 'No experience with Java', '3exp')
        ]
    ),
    '3exp': new Question('Do you have any prior experience with HTML, CSS, and/or Javascript?', 
        [
            new Answer('Yes', 'Has experience with web', 'CS-3-0'),
            new Answer('No', 'No experience with web', 'End')
        ]
    ),
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

var CSQuestions = [
    [
        ['Which of the following buttons is the create sprite button?\n<img src="scratchPlacementImages/image3.png" class="center" style="width:50%">', [['Option 1', 'f'], ['Option 2', 'f'], ['Option 3', 't'], ['Option 4', 'f']]],
        
        ['Which option below would you choose to draw your own backdrop?\n<img src="scratchPlacementImages/image8.png" class="center" style="width:50%">', [['Option 1', 'f'], ['Option 2', 'f'], ['Option 3', 't'], ['Option 4', 'f']]],
        
        ['What will the following snippet of code do when the green flag is clicked?\n<img src="scratchPlacementImages/image6.png" class="center" style="width:50%">', [['Say “Hello!” for 2 seconds, then change color effect by 25, then change size by 10.', 'f'], ['Say “Hello!” for 2 seconds, and at the same time, change color effect by 25 and size by 10.', 'f'], ['Say “Hello!” for 2 seconds.', 'f'], ['Nothing', 't']]],
        
        ['How many steps forward will the Scratch cat move in total, when the green flag is clicked?\n<img src="scratchPlacementImages/image4.png" class="center" style="width:50%">', [['50 steps', 'f'], ['60 steps', 't'], ['30 steps', 'f'], ['10 steps', 'f']]],
        
        ['The scratch cat is currently at the coordinates (300, 200). Where will the scratch cat go if I click the green flag?\n<img src="scratchPlacementImages/image2.png" class="center" style="width:50%">', [['(289, 215)', 't'], ['(311, 215)', 'f'], ['(311, 185)', 'f'], ['(289, 185)', 'f']]],
        
        ['What does the broadcast block do?\n<img src="scratchPlacementImages/image7.png" class="center" style="width:50%">', [['The broadcast block sends a message to the user via a popup on their screen', 'f'], ['The broadcast block sends out radio signals to other computers around you with your chosen message.', 'f'], ['The broadcast block sends the chosen message to the scratch console.', 'f'], ['The broadcast block sends a message to other sprites, which can trigger the “when I receive _____” event block.', 'f']]],
        
         ['Under what conditions will the Scratch cat say “Hello!” when the green flag is clicked?\n<img src="scratchPlacementImages/image5.png" class="center" style="width:50%">', [['The scratch cat will say “Hello!” regardless of conditions', 'f'], ['The scratch cat will say “Hello!” if touching the mouse pointer or edge', 'f'], ['The scratch cat will say “Hello!” if not touching both the mouse pointer and edge', 't'], ['The scratch cat will say “Hello!” if not touching the mouse pointer or the edge', 'f']]],
        
        ['If I type in “Sarah” when prompted, what will the Scratch cat say in return?\n<img src="scratchPlacementImages/image1.png" class="center" style="width:50%">', [['The scratch cat will say “Hi, Sarah”', 't'], ['The scratch cat will say “Hi”, then “Sarah”', 'f'], ['The scratch cat will not say anything', 'f'], ['The scratch cat will say “Hi, Answer”', 'f']]],
        
         ['Which of the following is the best description of a variable?', [['A variable is an unknown factor which makes our code work or not work', 'f'], ['A variable is a variance from what we expect to happen when we run a program.', 'f'], ['A variable is like a container, it can hold different values in our program depending on what we put into it.', 't'], ['A variable is a mysterious mystery which I don’t understand', 'f']]],
        
        ['What will happen when the green flag is clicked?\n<img src="scratchPlacementImages/image9.png" class="center" style="width:50%">', [['An error occurs', 'f'], ['The sprite points in the direction 60 degrees, and moves 5 steps forward', 'f'], ['The sprite points in the direction 5 degrees, and moves 60 steps forward', 't'], ['he sprite prompts the user to specify x and y, then points in direction x degrees, and moves y steps.', 'f']]],
        
    ],
    [
        ['What would be printed when the following code is run?\nprint("Hello World")', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Python question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Python question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Python question', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Python question', [['Correct', 't'], ['Incorrect', 'f']]],
    ],
    [
        ['Assume x is any integer, which of the expressions can replace the following code segment so that the program will always print the same result when executed?\n\nif (x > 0)\n{ \n&emsp;x = -x;\n}\nif (x < 0) \n{\n&emsp;x = 0;\n}\n\nSystem.out.print(x); \n', [['Correct', 't'], ['Incorrect', 'f']]],
        ['JWhich of the following expressions is equivalent to the following code segment? \n&emsp;\n&emsp;!(a || b) \n', [['Correct', 't'], ['Incorrect', 'f']]],
        ['What are the values of a and b after the for loop finishes?\n\nint a = 10;\nint b = 3;\nint x;\nfor (int i = 1; i <= 6; i++) \n{\n&emsp;x = a; \n&emsp;a = i + b;\n&emsp;b = t - i; \n}\n', [['Correct', 't'], ['Incorrect', 'f']]],
        ['At a high school students receive letter grades based on the following scale: 93 or above is an A, 84 to 92 inclusive is a B, and below 83 is a C. Which of the following code segments will assign the correct letter to grade for a given integer score?\n\n\nI.\n\nif (score >= 93)\n{\n&emsp;&emsp;grade = “A”; \n&emsp;}\nif (score >= 84 && score <= 92)\n{\n&emsp;&emsp;grade = “B”;\n&emsp;}\nif (score < 83)\n{\n&emsp;&emsp;grade = “C”;\n&emsp;}\n\n\nII.\nif (score >= 93)\n{\n&emsp;&emsp;grade = “A”; \n&emsp;}\nif (score >= 84)\n{\n&emsp;&emsp;grade = “B”;\n&emsp;}\nif (score < 83)\n{\n&emsp;&emsp;grade = “C”;\n&emsp;}\n\n\nIII.\nif (score >= 93)\n{\n&emsp;&emsp;grade = “A”; \n&emsp;}\nelse if (score >= 84)\n{\n&emsp;&emsp;grade = “B”;\n&emsp;}\nelse \n{\n&emsp;&emsp;grade = “C”;\n&emsp;}\n', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Given the following method declaration, and int[] array = {8, 3, 1}, what is the value in array[1] after test(a); is run?\n\n&emsp;public static int test(int [] array)\n{\n&emsp;&emsp;array[1]--; \n&emsp;&emsp;return (array[1] * 3);&emsp;\n&emsp;} \n', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Which statement best describes the purpose of a class constructor? ', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Given the following code segment, what will be printed when it is executed?\n\nArrayList<Integer> list1 = new ArrayList<Integer>();\nlist1.add(new Integer(1));\nlist1.add(new Integer(2));\nlist1.add(new Integer(3));\nlist1.set(2, new Integer(4));\nlist1.add(2, new Integer(5));\nlist1.add(new Integer(6));\nSystem.out.println(list1); \n', [['Correct', 't'], ['Incorrect', 'f']]],
        ['Mary is 5 years older than James. Three years in the future Mary’s age will be twice Jame’s age. What should replace  “condition” in line 3 to solve this problem? \n\n&emsp;for (int m = 1; m <= 100; m++)\n{\n&emsp;&emsp;for (int j = 1; j <= 100; j++)\n&emsp;{\n&emsp;&emsp;&emsp;if (condition)\n&emsp;&emsp;&emsp;{\n&emsp;&emsp;&emsp;&emsp;System.out.println(“Mary is “ + m + “ and James is “ + j); \n&emsp;&emsp;&emsp;}\n&emsp;&emsp;}\n&emsp;} \n', [['Correct', 't'], ['Incorrect', 'f']]],
         ['Which of the following is printed as the result of the call m(1234);?\n\n&emsp;public void m(int x)\n{\n&emsp;&emsp;System.out.print (x % 10);\n\n&emsp;    if ((x / 10) != 0)\n    {\n&emsp;&emsp;&emsp;m(x / 10); \n&emsp;    }\n\n&emsp;    System.out.print(x % 10); \n&emsp;} \n', [['Correct', 't'], ['Incorrect', 'f']]],
        ['When will a sequential search be faster than a binary search?', [['Correct', 't'], ['Incorrect', 'f']]],
    ],
    [
        ['When will a sequential search be faster than a binary search?', [['Correct', 't'], ['Incorrect', 'f']]],
    ]
    
]

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

    loadQuestion(startingQuestion, {quizStarted: false, level: 0, lQuestion: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], csQuestion: [[0, 0], [0, 0], [0, 0], [0, 0]]});
}

function loadQuestion(questionId, results) {
    console.log(questionId);
    var questionSplit = questionId.split('-');
    if (questionSplit[0] === "End"){
        showResults(results);
        return;
    }
    if(questionSplit[0] === 'Math' || questionSplit[0] === 'CS') {
        buildQuizQuestion(questionId, questionSplit[0], questionSplit[1], questionSplit[2], results);
    }
    else
    {
        buildQuestion(questions[questionSplit[0]], results, 0);
    }
}

function buildQuestion(question, results, timer) {

//    if(question.answers.length === 0) {
//        showResults(results);
//        return;
//    }

    var questionTitle = document.getElementById('question-title');
    var answers = document.getElementById('answers');
    var submitButtonContainer = document.getElementById('submit-button-container');
    var quizForm = document.getElementById('quiz-form');


    var questionSplit = question.prompt.split('\n');
    questionTitle.innerHTML = ''
    questionSplit.forEach(line => {
        questionTitle.innerHTML += '<p>' + line + '</p>' ;
    });
    
    

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
            results.quizStarted = false
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
            if (!CSQuestions[parseInt(level)+1] ){
                loadQuestion('End', results);
            }
            else{
                loadQuestion(String(parseInt(level) + 1) + 'exp', results);
                results.quizStarted = false
            }
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
        if(choice.checked) {
            selected = choice.dataset.child;
            selectedStatus = choice.dataset.status;
            answerChosen = true;
        }
    }
    if(!answerChosen) {
        selectedStatus = 'f';
    }
    var selectedSplit = selected.split('-');
    
    if(results.quizStarted) {
        if (selectedSplit[0] === 'Math'){
            if(selectedStatus === 't') {
                results.lQuestion[selectedSplit[1]][0] += 1;
            }
            
            results.lQuestion[selectedSplit[1]][1] += 1;
            
            var correct = results.lQuestion[selectedSplit[1]][0]
            var total = results.lQuestion[selectedSplit[1]][1]
            if(total != 0 && total % 5 === 0) {
                if(correct/total <= 0.5) {
                    if(selectedSplit[1] != 0) {
                        selectedSplit[1]--;
                        selectedSplit[2] = results.lQuestion[selectedSplit[1]][1];
                    }
                    else
                    {
                        selectedSplit[2]++;
                    }
                }
                else if(correct >= 0.5) {
                    if(selectedSplit[1] != 4) {
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
            }
            else
            {
                selectedSplit[2]++;
            }
        }
        else if (selectedSplit[0] === 'CS'){
            if(selectedStatus === 't') {
                results.csQuestion[selectedSplit[1]][0] += 1;
            }
            results.csQuestion[selectedSplit[1]][1] += 1;
            var correct = results.csQuestion[selectedSplit[1]][0]
            var total = results.csQuestion[selectedSplit[1]][1]
            console.log('correct: ' + correct)
            console.log('total: ' + total)
            if(total >=5 && (correct / total) <= 0.2){
                if (selectedSplit[1] != 3){
                    selectedSplit[0] = String(parseInt(selectedSplit[1]) + 1) + "exp";
                    results.quizStarted = false;
                }
                else{
                    selectedSplit[0] = 'End'
                }
            }
            else{
                selectedSplit[2]++;
            }
        }
        selected = selectedSplit[0] + '-' + selectedSplit[1] + '-' + selectedSplit[2]; 
    }
    console.log(results);
   
    loadQuestion(selected, results);
}

function enoughMath(results, csClass, recommendedMathClass){
    var requiredMath = [2,4,6,4];
    return (recommendedMathClass >= (requiredMath[csClass]));
}

function enoughCS(results, csClass){
    var requiredCSfluency = [1,2,3,2];
    var csFluency = 0;
    if (results.csQuestion[2][1] != 0 && (results.csQuestion[2][0] / results.csQuestion[2][1] >= 0.4)){
        csFluency += 3
    }
    else if (results.csQuestion[1][1] != 0 && (results.csQuestion[1][0] / results.csQuestion[1][1] >= 0.6)){
        csFluency += 3
    }
    else if (results.csQuestion[1][1] != 0 && (results.csQuestion[1][0] / results.csQuestion[1][1] >= 0.4)){
        csFluency += 2
    }
    else if (results.csQuestion[0][1] != 0 && (results.csQuestion[0][0] / results.csQuestion[0][1] >= 0.6)){
        csFluency += 2
    }
    else if (results.csQuestion[3][1] != 0 && (results.csQuestion[3][0] / results.csQuestion[3][1] >= 0.4)){
        csFluency += 2
    }
    else if (results.csQuestion[2][1] != 0 && (results.csQuestion[2][0] / results.csQuestion[2][1] >= 0.4)){
        csFluency += 2
    }
    else if (results.csQuestion[0][1] != 0 && (results.csQuestion[0][0] / results.csQuestion[0][1] >= 0.4)){
        csFluency += 1
    }
    
    return (csFluency >= (requiredCSfluency[csClass]));
}



function showResults(results) {
    var quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '<div class="results-container"><div class="results-title">Quiz Results</div><div class="results-display">'
    var recommendedMathClass = 0;
    var recommendedCSclasses = [];
    var recommendedEngineeringClass = 'None';

    var code = 'm'
    for(var i = 0; i < 5; i++) {
        code += results.lQuestion[i][0] + '/' + results.lQuestion[i][1] + '-'
        if (results.lQuestion[i][1] != 0 && results.lQuestion[i][0] / results.lQuestion[i][1] >= 0.8){
            recommendedMathClass = i + 1
        }

    }
    code += 'c'
    
    for(var i = 0; i < 4; i++) {
        code += results.csQuestion[i][0] + '/' + results.csQuestion[i][1] + '-'
        if (enoughMath(results, i, recommendedMathClass) || enoughCS(results ,i)){
            recommendedCSclasses.push(i)
        }
    }
    
    
    if (recommendedMathClass >= 4){
        recommendedEngineeringClass = 'Engineering II'
    }
    else if (recommendedMathClass >= 2){
        recommendedEngineeringClass = 'Engineering I'
    }
    
    var csClasses = ['Scratch','Python','Java','Web development']
    quizContainer.innerHTML += '<div class="results-text"><p>Suggested computer science classes: </p></div></div></div>'
    if (recommendedCSclasses.length == 0){
        quizContainer.innerHTML += '<div class="results-text"><p>None</p></div></div></div>'
    }
    for(var i = 0; i < recommendedCSclasses.length; i++) {
        quizContainer.innerHTML += '<div class="results-text"><p>' + csClasses[i] + '</p></div></div></div>'
    }
    
    var recommendedMathClassFormatted = 'None';
    if (recommendedMathClass != 0){
        recommendedMathClassFormatted = 'Mathematics ' + recommendedMathClass 
    }
    
    quizContainer.innerHTML += '<div class="results-text"><p>Recommended math class: ' + recommendedMathClassFormatted + '</p></div></div></div>'
    
    quizContainer.innerHTML += '<div class="results-text"><p>Recommended engineering class: ' + recommendedEngineeringClass + '</p></div></div></div>'
    
    quizContainer.innerHTML += '<div class="results-text"><p>Please paste the following code onto the registration form: ' + code + '</p></div></div></div>'
}
