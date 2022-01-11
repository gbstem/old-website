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
        ['In the fridge, there are 4 stacks of chocolate puddings, 7 stacks of brownies and 5 stacks of cupcakes. How many stacks of dessert are there?',[['11', 'f'], ['14', 'f'], ['16', 't'], ['21', 'f']], 60],
        ['Write the addition sentence that fits this: “Jennifer prepares 3 new recipes for the next month. On top of the original 9 recipes she has, she has a total of 12 recipes.”',[['9 + 3 = 12', 't'], ['12 - 9 = 3', 'f'], ['3 + 12 = 9', 'f'], ['9 + 12 = 3', 'f']], 60],
        ['Round 195 to the nearest ten.', [['100', 'f'], ['190', 'f'], ['200', 't'], ['210', 'f']], 60],
        ['Jake spends 4 dimes on an orange envelope. Polly buys a piece of red and purple paper for 5 pennies. How much money do they spend in all?', [['35 cents', 'f'], ['50 cents', 'f'], ['25 cents', 'f'], ['45 cents', 't']], 60],
        ['What is the name of a shape with three sides?', [['Triangle', 't'], ['Rhombus', 'f'], ['Square', 'f'], ['Pentagon', 'f']], 60],
        ['14 - 9 + 4 - 6 = ?',[['3', 't'], ['5', 'f'], ['21', 'f'], ['23', 'f']], 60],
        ['School starts at 8:30 a.m. and ends after 6 and a half hours. What time does school end?', [['12 p.m.', 'f'], ['1 p.m.', 'f'],  ['3 p.m.', 't'], ['4 p.m.', 'f']], 60],
        ['Gene’s mother has 2 pairs of scissors. The blue pair of scissors is 10 inches long, and the red pair of scissors is 3 inches shorter. How long is the red pair of scissors?',[['3 inches', 'f'], ['7 inches', 't'], ['7 feet', 'f'], ['13 inches', 'f']], 60],
        ['James has a quarter, a nickel, and 4 pennies. Ian has three dimes. Who has more money?',[['Ian', 'f'], ['James', 't']], 60],
        ['To save energy, the elevator in the office building only runs from 8 o’clock to 10 o’clock in the morning and from 3 o’clock to 6 o’clock in the afternoon. How many hours does the elevator run every day?',[['3', 'f'], ['4', 'f'],['5', 't'], ['6', 'f']], 60],

    ],
    [
        ['It was 3:30 when Tina began raking the yard. She raked all the leaves into piles and stuffed them into bags. It took Tina 45 minutes to collect all the leaves. What time was it when Tina was done?', [['4:25', 'f'], ['4:15', 't'], ['3:75', 'f'], ['4:30', 'f']], 60],
        ['Jennie makes quilts. She can make 7 quilts with 21 yards of material. How many yards of material would be required to make 12 quilts?', [['33', 'f'], ['36', 't'], ['60', 'f'], ['84', 'f']], 60],
        ['There were 33 buses in a school parking lot. 14 buses arrived at the lot. Then, 21 buses drove away. How many buses are in the parking lot now?', [['25', 'f'], ['47', 'f'], ['40', 'f'], ['26', 't']], 60],
        ['A square has an area of 25. What is its perimeter?', [['10', 'f'], ['15', 'f'], ['20', 't'], ['25', 'f']], 60],
        ['What is the tens digit of 67?', [['10', 'f'], ['6', 't'], ['7', 'f']], 60],
        ['How many vertices are on a cube?', [['4', 'f'], ['6', 'f'], ['8', 't'], ['12', 'f']], 60],
        ['Find 16 + 16 + 16.', [['16', 'f'], ['32', 'f'], ['48', 't'], ['64', 'f']], 60],
        ['When I am added to another number, I do not change that number. What am I?', [['1', 'f'], ['10', 'f'], ['0', 't'], ['+', 'f']], 60],
        ['Kyle has a phone plan that costs $45 per month. How much does he have to pay for half a year of phone service?',[['$270', 't'], ['$300', 'f'], ['$540', 'f'], ['$900', 'f']], 60],
        ['Tyler saved $32.80 from his school allowance. He bought 2 superhero action figures which cost a total of $7.90 and a toy robot for $8.70. How much does he have left?',[['$8.30', 'f'], ['$16.20', 't'],['$24.10', 'f'],['$49.40', 'f']], 60],

    ],
    [
        ['A pizza is cut into twelve slices. If I eat half the pizza and my mom eats another sixth of the pizza, then how many slices are left?', [['5', 'f'], ['2', 'f'], ['4', 't'], ['5', 'f']], 60],
        ['Round 3.459 to the nearest tenth.', [['3', 'f'], ['3.5', 't'], ['3.4', 'f'], ['3.46', 'f']], 60],
        ['Which is larger, 1/3 or 1/5?', [['1/5', 'f'], ['1/3', 't']], 60],
        ['Sam wants to hang five stockings at the fireplace: three large stockings and two small stockings. Each larger stocking is 5 inches wide, and the two smaller stockings are 3 inches wide each. What is the total width of the five stockings?', [['16', 'f'], ['25', 'f'], ['6', 'f'], ['21', 't']], 60],
        ['At lunchtime, an ice cream parlor served 6 ¼ scoops of chocolate ice cream, 5 ¾ scoops of vanilla and 2 ¾ scoops of strawberry. How many scoops of ice cream did the parlor serve in total?', [['12 ½' , 'f'], ['12 ¾' , 'f'], ['13 ¾' , 'f'], ['14 ¾' , 't']], 60],
        ['What is the remainder when 771 is divided by 7?', [['1', 't'], ['6', 'f'], ['5', 'f'], ['2', 'f']], 60],
        ['Farmer John has 3 times as many cows as chickens. He has 36 cows. How many chickens does he have?', [['108', 'f'], ['12', 't'], ['33', 'f'], ['39', 'f']], 60],
        ['The school has $904 to spend on markers. Each package of markers costs $8. How many packages of markers can the school buy?',[['68', 'f'],['113', 't'], ['121', 'f'], ['138', 'f']], 60],
        ['12 of the tables at Cassies Italian Restaurant are full and the other 8 tables are empty. What is the ratio of the number of full tables to the number of empty tables?',[['3:2', 't'], ['8:20', 'f'], ['12:20', 'f'], ['8:12', 'f']], 60],
        ['A furniture maker used 1 ¾ of a can of paint to paint some chairs. She used ¼ of a can of paint for each chair. How many chairs did she paint?',[['6', 'f'], ['7', 't'], ['8', 'f'], ['9', 'f']], 60]
    ],
    [
    ['Which of the following is equivalent to 7 * 7 * 7 * 7?', [['7 + 4', 'f'], ['4 ^ 7', 'f'], ['7 ^ 4', 't'], ['4 * 7', 'f']], 60],
    ['Find 1/3 + 1/4 + 1/5.', [['1/12', 'f'], ['13/20', 'f'], ['47/60', 't'], ['73/120', 'f']], 60],
    ['A box has side lengths a, b, c, and volume 11. Find the volume of a box with side lengths 3*a, 3*b, 3*c.', [['11', 'f'], ['33', 'f'], ['99', 'f'], ['297', 't']], 60],
    ['Find 8^4 divided by 4^4.', [['2', 'f'], ['8', 'f'], ['16', 't'], ['256', 'f']], 60],
    ['A random digit from 0 to 9 is chosen. What is the probability that it is a prime?', [['2/5', 't'], ['4/9', 'f'], ['1/2', 'f'], ['4/5', 'f']], 60],
    ['Find the sum of the first 20 odd numbers.', [['210', 'f'], ['400', 't'], ['441', 'f']], 60],
    ['Cara begins delivering newspapers. On her first day at work, she delivers 32 newspapers. Every day after that, she delivers five more newspapers than she did the day before. On day 2, she delivers 37 newspapers. On day 3, she delivers 42. How many newspapers does Cara deliver on day 8?', [['57', 'f'], ['62', 'f'], ['67', 't'], ['72', 't']], 60],
    ['Terrence’s scores on his first four History tests were 80, 85, 91 and 95. To get an A in the class, he needs to have an average of 90 or better. What score must he make on the fifth test to get an A in the class?', [['85', 'f'], ['88', 'f'], ['96', 'f'], ['99', 't']], 60],
    ['A perfect circle has a circumference of 8 x pi (or 8π) inches. I split the circle in half, creating two perfect semicircles. What is the area of each semicircle?',[['4π', 't'], ['8π', 't'], ['12π', 'f'], ['16π', 'f']], 60],
    ['Annie and Bonnie are running laps around a 400-meter oval track. They started together, but Annie has pulled ahead because she runs 25% faster than Bonnie. How many laps will Annie have run when she first passes Bonnie?',[['3', 'f'], ['3 ⅓', 'f'], ['4', 'f'], ['5', 't']], 60]
        ],
    [
        ['3x + 4y = 12. 7x - 2y = 11. Find (x, y).', [['(3, 6)', 'f'], ['(2, 3/2)', 't'], ['(23/17, 1)', 'f'], ['(2, 4)', 'f']], 60],
        ['Find the roots of x^2-2x-35.', [['(5, 7)', 'f'], ['(-5, 7)', 't'], ['(5, -7)', 'f'], ['(-5, -7)', 'f']], 60],
        ['There is a rope running from the top of a flagpole to a hook in the ground. The flagpole is 8 meters high, and the hook is 15 meters from its base. How long is the rope?', [['7', 'f'], ['11', 'f'], ['17', 't'], ['23', 'f']], 60],
        ['Find the exponent of 3 in the prime factorization of 63 factorial.', [['15', 'f'], ['30', 't'], ['63', 'f'], ['81', 'f']], 60],
        ['a, b, c is an increasing geometric sequence of positive numbers. c is 48 greater than a. a, b, c - 24 is an arithmetic sequence. Find b.', [['6', 'f'], ['18', 't'], ['24', 'f'], ['56', 'f']], 60],
        ['Two rectangular enclosures are to be built such that they share a wall. Farmer John has 120 feet of fencing to build the walls. What is the maximum combined area of the enclosures?', [['28800/49', 'f'], ['550', 'f'], ['600', 't'], ['648', 'f']], 60],
        ['f(2x-1) = x^3 + 3x^2 - 9x + 1. Find f(9).', [['77', 'f'], ['156', 't'], ['891', 'f']], 60],
        ['During a basketball game, your team scored three times as many 2-point field goals than it did 3-point field goals, and scored a total of 90 points. How many field goals did your team score? There were no one-point free throws.',[['20', 'f'], ['30', 'f'],['40', 't'], ['50', 'f']], 60],
        ['A six-sided cubical die, numbered 1 through 6 inclusive, and a ten-sided decahedral die, numbered 1 through 10 inclusive, are rolled. What is the probability that the sum of the numbers shown on the top faces is less than 8 ? Express your answer as a common fraction.',[['1/4', 'f'], ['7/20', 't'], ['11/18', 'f'], ['2/9', 'f']], 60],
        ['Ernie was counting the jellybeans in his bag. He noticed that when he arranged them in rows of either 6 or 8 beans, he was always left with 3 ‘extras’, but when he arranged them in rows of 5, there were none left over. What’s the least possible number of jellybeans that he has?', [['75', 't'], ['85', 'f'], ['95', 'f'], ['100', 'f']], 60],
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
        ['Which of the following will run without errors?', [['print(“hello” + 5)', 'f'], ['print(int(“hello”) + 5)', 'f'],['print(hello + 5)', 'f'], ['print(“hello” + str(5))', 't']]],
        
        ['What would running the following code print?\na = 5\na += 5\nprint(a)\n', [['0', 'f'], ['5', 'f'],['10', 't'], ['15', 'f']]],
        
        ['Which of the following is a boolean?', [['True', 't'],['5', 'f'],['“hello”', 'f'],['2.1', 'f']]],
        
        ['What would running the following code print?\n\nnum = 20\nif (num >= 5):\n&emsp;print(“hello world”)\nelse:\n&emsp;print(“school is cool”)\nif (num > 21):\n&emsp;print(“chicken”)\n', [['hello world', 't'],['school is cool', 'f'],['chicken', 'f'],['hello world chicken', 'f'],]],
        
        ['What would running the following code print?\n\nif (5 > 2 and 2 > 9):\n&emsp;print(“hello”)\nelse:\n&emsp;print(“goodbye”)\n', [['hello', 'f'],['goodbye', 't'],['hello goodbye', 'f'],['an error occurs', 'f']]],
        
        ['\nWhat would running the following code print?\n\nmy_str = “hello”\nprint(my_str[0])', [['h', 't'],['o', 'f'],['hello', 'f'],['he', 'f']]],
        
        ['What would running the following code print?\n\na = 5\nb = a\nc = 2\nc = b\nprint(c)', [['5', 't'],['a', 'f'],['2', 'f'],['b', 'f']]],
        
        ['What would running the following code print?\n\ndef my_function(num):\n&emsp;num1 = num + 6\n&emsp;num2 = num + 8\n&emsp;return num2\n\nprint(my_function(7))', [['7', 'f'],['13', 'f'],['15', 't'],['21', 'f']]],
        
        ['What would running the following code print?\n\nnum = 5\nmy_str = “”\nwhile num > 0:\n&emsp;my_str += “a”\n&emsp;num-=1\nprint(my_str)', [['a', 'f'],['aa', 'f'],['aaa', 'f'],['aaaaa', 't']]],
        
        ['What would running the following code print?\n\nmy_list = [5,9,9,1]\nmy_list.append(4)\nprint(my_list)', [['[5,9,9,1]', 'f'],['[5,9,9,1,4]', 't'],['[4,5,9,9,1]', 'f'],['[5,9,9]', 'f']]],
    ],
    [
        ['Assume x is any integer, which of the expressions can replace the following code segment so that x will always be the same value when executed?\n\nif (x > 0)\n{ \n&emsp;x = -x;\n}\nif (x < 0) \n{\n&emsp;x = 0;\n}\n', [['x = 0; ', 't'],['if (x > 0) x = -x; else x = 0; ', 'f'],['if (x < 0) x = 0; else x = -1;', 'f'],['if (x > 0) x = 0; ', 'f'],['if (x < 0) x = 0;', 'f']]],
        
        ['Which of the following expressions is equivalent to the following code segment? \n&emsp;\n&emsp;!(a || b) \n', [['(a || b)', 'f'],['(a && b) ', 'f'],['(!a) && (!b) ', 't'],['(!a) || (!b) ', 'f'],['!(a && b) ', 'f'],]],
        
        ['What is the value of a after the for loop finishes?\n\nint a = 10;\nfor (int i = 1; i <= 6; i++) \n{\n&emsp;a = i + a;\n}\n', [['10', 'f'],['17', 'f'],['23', 'f'],['27', 'f'],['31', 't']]],
        
        ['At a high school students receive letter grades based on the following scale: 93 or above is an A, 84 to 92 inclusive is a B, and below 83 is a C. Which of the following code segments will assign the correct letter to grade for a given integer score?\n\n\nI.\n\nif (score >= 93)\n{\n&emsp;&emsp;grade = “A”; \n&emsp;}\nif (score >= 84 && score <= 92)\n{\n&emsp;&emsp;grade = “B”;\n&emsp;}\nif (score < 83)\n{\n&emsp;&emsp;grade = “C”;\n&emsp;}\n\n\nII.\nif (score >= 93)\n{\n&emsp;&emsp;grade = “A”; \n&emsp;}\nif (score >= 84)\n{\n&emsp;&emsp;grade = “B”;\n&emsp;}\nif (score < 83)\n{\n&emsp;&emsp;grade = “C”;\n&emsp;}\n\n\nIII.\nif (score >= 93)\n{\n&emsp;&emsp;grade = “A”; \n&emsp;}\nelse if (score >= 84)\n{\n&emsp;&emsp;grade = “B”;\n&emsp;}\nelse \n{\n&emsp;&emsp;grade = “C”;\n&emsp;}\n', [['I and III only', 't'],['II only', 'f'],['III only', 'f'],['I and II only', 'f'],['I, II, and III', 'f']]],
        
        ['Given the following method declaration, and int[] a = {8, 3, 1}, what is the value in a[1] after test(a); is run?\n\n&emsp;public static int test(int [] array)\n{\n&emsp;&emsp;array[1]--; \n&emsp;&emsp;return (array[1] * 3);&emsp;\n&emsp;} \n', [['6', 'f'],['2', 't'],['16', 'f'],['7', 'f']]],
        
        
        ['Given the following code segment, what will be printed when it is executed?\n\nArrayList<Integer> list1 = new ArrayList<Integer>();\nlist1.add(new Integer(1));\nlist1.add(new Integer(2));\nlist1.add(new Integer(3));\nlist1.set(2, new Integer(4));\nlist1.add(2, new Integer(5));\nlist1.add(new Integer(6));\nSystem.out.println(list1); \n', [['[1, 5, 2, 4, 6]', 'f'],['[1, 2, 4, 5, 6]', 'f'],['[1, 2, 5, 4, 6] ', 't'],['[1, 2, 3, 4, 5]', 'f'],['[1, 6, 2, 4, 5] ', 'f']]],
        
        ['Mary is 5 years older than James. What should replace  “condition” in line 3 to provide all possible ages they could have? \n\n&emsp;for (int m = 1; m <= 100; m++)\n{\n&emsp;&emsp;for (int j = 1; j <= 100; j++)\n&emsp;{\n&emsp;&emsp;&emsp;if (condition)\n&emsp;&emsp;&emsp;{\n&emsp;&emsp;&emsp;&emsp;System.out.println(“Mary is “ + m + “ and James is “ + j); \n&emsp;&emsp;&emsp;}\n&emsp;&emsp;}\n&emsp;} \n', [['j == m - 5', 't'],['j == m + 5', 'f'],['j == m', 'f'],['j != 5', 'f'],['None of the above', 'f']]],
        
         ['Which of the following is printed as the result of the call m(1234);?\n\n&emsp;public void m(int x)\n{\n&emsp;&emsp;System.out.print (x % 10);\n\n&emsp;    if ((x / 10) != 0)\n    {\n&emsp;&emsp;&emsp;m(x / 10); \n&emsp;    }\n\n&emsp;    System.out.print(x % 10); \n&emsp;} \n', [['12344321', 'f'],['3443', 'f'],['1441', 'f'],['43211234', 't'],['Many digits are printed due to infinite recursion', 'f']]],
        
        ['Which statement best describes the purpose of a class constructor? ', [['To initialize the fields of an object.', 't'],['To assign a name to an object.', 'f'],['To create a new object. ', 'f'],['To determine the amount of space needed to create an object. ', 'f'],['To perform a specific task and return the result if necessary. ', 'f']]],
        
        ['When will a sequential search be faster than a binary search?', [['The search value is not in the array', 'f'],['The value is in the middle of the array', 'f'],['The search value is the first element in the array', 't'],['The search value is the last element in the array', 'f'],['Sequential search can never be faster than binary search', 'f'],]],
    ],
    [
        ['What is the correct HTML element to define important text?', [['&ltimportant>', 'f'],['&ltb>', 'f'],['&ltstrong>', 't'],['&lti>', 'f']]],
        ['How do you make a bulleted list with indexes?', [['&ltdl>', 'f'],['&ltlist>', 'f'],['&ltul>', 't'],['&ltol>', 'f'],]],
        ['What is the correct HTML for inserting an image?', [['&ltimg href="image.gif" alt="MyImage">', 'f'],['&ltimg alt="MyImage">image.gif&lt/img>', 'f'],['&ltimage src="image.gif" alt="MyImage">', 'f'],['&ltimg src="image.gif" alt="MyImage">  ', 't'],]],
        ['What is the HTML &ltcanvas> element used for?', [['display database records', 'f'],['create draggable elements', 'f'],['draw graphics', 't'],['manipulate data in SQL', 'f'],]],
        ['What is the correct CSS syntax for color: black?', [['{body:color=black;}', 'f'],['body:color=black;', 'f'],['{body;color:black;}', 'f'],['body {color: black;} ', 't'],]],
        ['What is the HTML for referring to an external stylesheet (ie. not using &ltstyle> tags)?', [['&ltstyle src="mystyle.css">', 'f'],['&ltstylesheet>mystyle.css&lt/stylesheet>', 'f'],['&ltlink rel="stylesheet" type="text/css" href="mystyle.css">  ', 't'],['&ltstyle rel=”stylesheet” &lt/style>', 'f'],]],
        ['How do you select an element with the id ‘car’?', [['#car', 't'],['.car', 'f'],['car', 'f'],['*car', 'f'],]],
        ['Which property is used to change the left margin of an element?', [['indent', 'f'],['margin-left', 't'],['padding-left', 'f'],['left-margin', 'f'],]],
        ['In which HTML element do you put JavaScript?', [['&ltscripting>', 'f'],['&ltjs>', 'f'],['&ltscript>', 't'],['&ltjavascript>', 'f'],]],
        ['Where is the correct place to insert JavaScript?', [['&lthead>', 'f'],['&lthead> and &ltbody>', 't'],['&ltbody>', 'f'],['a new .js file', 't'],]],
        ['How do you create a function in JavaScript?', [['function newFunction()', 't'],['function: newFunction()', 'f'],['function = newFunction()', 'f'],['create newFunction()', 'f'],]],
        ['Which type of event occurs when a user clicks on a given HTML element?', [['onmouseclick', 'f'],['onmouseover', 'f'],['onclick', 't'],['onchange', 'f'],]],
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

    quizContainer.innerHTML = '<div class="question-title" id="question-title"></div><form class="quiz-form" id="quiz-form"><div class="answers" id="answers"></div><div class="submit-button-container" id="submit-button-container"></div></form>'

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

function buildQuestion(question, results) {

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
//    var timer = 0;
    if(quiz === 'Math') {
        if(!mathQuestions[level][question]) {
            results.quizStarted = false
            loadQuestion('CSstart', results)
            return;
        }
        prompt = mathQuestions[level][question][0];
        var arr = mathQuestions[level][question][1];
        console.log(mathQuestions[level][question][1])
        arr.forEach((key) => {
            answers.push(new Answer(key[0], key[1], questionId) );
        })
//        timer = mathQuestions[level][question][2];
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
//        timer = CSQuestions[level][question][2];
    }
    
    var q = new Question(prompt, answers);

    buildQuestion(q, results);

    clearInterval(interval);

//    if(timer != 0) {
//        var start = Date.now();
//        interval = setInterval(() => {
//            var delta = Date.now() - start;
//            updateTimer(Math.floor(timer - (delta / 1000) ), results, q);
//        }, 100)
//    }


}

//function updateTimer(time, results, question) {
//    document.getElementById('quiz-timer').innerHTML = 'Time left for question: ' + Math.floor(time/60) + ':' + Math.round(time%60);
//    if(time === 0) {
//        submitQuestion(question, results);
//    }
//}

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
                if(correct/total < 0.6) {
                    if(selectedSplit[1] != 0) {
                        selectedSplit[1]--;
                        selectedSplit[2] = results.lQuestion[selectedSplit[1]][1];
                    }
                    else
                    {
                        selectedSplit[2]++;
                    }
                }
                else if(correct >= 0.6) {
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
    var requiredMath = [1,3,5,3];
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
        if (results.lQuestion[i][1] != 0 && results.lQuestion[i][0] / results.lQuestion[i][1] >= 0.6){
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
    
    
    
    var csRecommendationFormatted = 'Possible computer science classes to take: '
    
    if (recommendedCSclasses.length == 0){
        csRecommendationFormatted += 'None'
    }
    for(var i = 0; i < recommendedCSclasses.length; i++) {
        csRecommendationFormatted += csClasses[recommendedCSclasses[i]]
        if (i != recommendedCSclasses.length - 1){
            csRecommendationFormatted += ', '
        }
    }
    quizContainer.innerHTML += '<div class="results-text"><p>' + csRecommendationFormatted + '</p></div></div></div>'
    
    quizContainer.innerHTML += '<div class="results-text"><p1>If there was more than one class listed above, we recommend going to gbstem.org/cs to learn about the differences between the classes to make the best choice. We encourage students to challenge themselves, so we recommend students to choose the harder class if there was more than one eligble CS class. Specifically, Scratch is the easiest, followed by Python or web development, followed by Java.</p1></div></div></div>'
    
    var recommendedMathClassFormatted = 'None';
    if (recommendedMathClass != 0){
        recommendedMathClassFormatted = 'Mathematics ' + recommendedMathClass 
    }
    
    quizContainer.innerHTML += '<div class="results-text"><p>Recommended math class: ' + recommendedMathClassFormatted + '</p></div></div></div>'
    
    quizContainer.innerHTML += '<div class="results-text"><p>Recommended engineering class: ' + recommendedEngineeringClass + '</p></div></div></div>'
    
    quizContainer.innerHTML += '<div class="results-text"><p>Please paste the following code onto the registration form:</p></div></div></div>'
    quizContainer.innerHTML += '<div class="results-text"><p>' + code + '</p></div></div></div>'
}
