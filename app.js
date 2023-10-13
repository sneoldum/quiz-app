const quizData = [
          {
                    question: "Start Quiz",
                    a: "",
                    b: "",
                    c: "",
                    d: "",
                    correct: "a",
          },
          {
                    question: "What is the most used programming language in 2019?",
                    a: "Java",
                    b: "C",
                    c: "Python",
                    d: "JavaScript",
                    correct: "d",
          },
          {
                    question: "Who is the President of US?",
                    a: "Florin Pop",
                    b: "Joe Biden",
                    c: "Ivan Saldano",
                    d: "Donald Trump",
                    correct: "b",
          },
          {
                    question: "What does HTML stand for?",
                    a: "Hypertext Markup Language",
                    b: "Cascading Style Sheet",
                    c: "Jason Object Notation",
                    d: "Helicopters Terminals Motorboats Lamborginis",
                    correct: "a",
          },
          {
                    question: "What year was JavaScript launched?",
                    a: "1996",
                    b: "1995",
                    c: "1994",
                    d: "none of the above",
                    correct: "b",
          },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const a_radio = document.getElementById("a");
const b_radio = document.getElementById("b");
const c_radio = document.getElementById("c");
const d_radio = document.getElementById("d");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
          deselectAnswers();

          const currentQuizData = quizData[currentQuiz];
          if (currentQuiz == 0) {
                    a_radio.checked = true;
                    a_text.style.display = "none";
                    b_text.style.display = "none";
                    c_text.style.display = "none";
                    d_text.style.display = "none";
                    a.style.display = "none";
                    b.style.display = "none";
                    c.style.display = "none";
                    d.style.display = "none";
          } else {
                    a_text.style.display = "inline-block";
                    b_text.style.display = "inline-block";
                    c_text.style.display = "inline-block";
                    d_text.style.display = "inline-block";
                    a.style.display = "inline-block";
                    b.style.display = "inline-block";
                    c.style.display = "inline-block";
                    d.style.display = "inline-block";
          }

          questionEl.innerText = currentQuizData.question;
          a_text.innerText = currentQuizData.a;
          b_text.innerText = currentQuizData.b;
          c_text.innerText = currentQuizData.c;
          d_text.innerText = currentQuizData.d;

}
function getSelected() {
          let answer = undefined;

          answerEls.forEach((answerEl) => {
                    if (answerEl.checked) {
                              answer = answerEl.id;
                    }
          });

          return answer;
}

function deselectAnswers() {
          answerEls.forEach((answerEl) => {
                    answerEl.checked = false;
          });
}

submitBtn.addEventListener("click", () => {
          // check to see the answer
          const answer = getSelected();

          if (answer) {
                    if (answer === quizData[currentQuiz].correct) {
                              score++;
                    }
                    currentQuiz++;
                    if (currentQuiz < quizData.length) {
                              loadQuiz();
                    } else {
                              quiz.innerHTML = `
                      <h2>You answered correctly at ${score - 1}/${quizData.length - 1} questions.</h2>
                      
                      <button onclick="location.reload()">Reload</button>
                  `;
                    }
          }
});