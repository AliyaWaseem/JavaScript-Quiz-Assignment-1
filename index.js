// Quiz questions and answers:
let quiz = [
    {
        question: "Which of the following is a JavaScript data type?\n1. String\n2. Element\n3. Tag",
        answer: "String"
    },
    {
        question: "How do you select an element with the id 'header' in CSS?\n1. .header\n2. #header\n3. header",
        answer: "#header"
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?\n1. push()\n2. pop()\n3. shift()",
        answer: "push()"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?\n1. <script src='script.js'>\n2. <script href='script.js'>\n3. <script name='script.js'>",
        answer: "<script src='script.js'>"
    },
    {
        question: "Which CSS property is used to change the text color of an element?\n1. font-color\n2. color\n3. text-color",
        answer: "color"
    },
    {
        question: "How do you declare a JavaScript variable?\n1. var myVar;\n2. variable myVar;\n3. let variable myVar;",
        answer: "var myVar;"
    },
    {
        question: "Which property is used to change the background color in CSS?\n1. color\n2. background-color\n3. bg-color",
        answer: "background-color"
    },
    {
        question: "How do you write a comment in JavaScript?\n1. <!-- This is a comment -->\n2. // This is a comment\n3. 'This is a comment'",
        answer: "// This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?\n1. onmouseover\n2. onkeydown\n3. onclick",
        answer: "onclick"
    },
    {
        question: "How do you add a class to an element in JavaScript?\n1. element.className = 'className';\n2. element.addClass('className');\n3. element.class = 'className';",
        answer: "element.className = 'className';"
    }
];

// Initialize score
let score = 0;

// Loop through each question
for (let i = 0; i < quiz.length; i++) {
    // Ask the question
    let userAnswer = prompt(quiz[i].question);

    // Check the answer
    if (userAnswer.toLowerCase() === quiz[i].answer.toLowerCase()) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer is " + quiz[i].answer);
    }
}

// Show the final score
alert("You scored " + score + " out of " + quiz.length + "!");
