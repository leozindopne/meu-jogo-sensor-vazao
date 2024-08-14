const quizData = [
    {
        question: "Qual é o princípio físico usado pelos sensores de vazão ultrassônicos?",
        choices: ["Ondas Sonoras", "Campo Magnético", "Pressão", "Deslocamento"],
        correct: 1
    },
    {
        question: "Qual tipo de sensor de vazão é baseado na rotação de uma turbina?",
        choices: ["Eletromagnético", "Ultrassônico", "Termal", "Turbina"],
        correct: 4
    },
    {
        question: "Em qual indústria os sensores de vazão são usados para medir o fluxo de água em sistemas de abastecimento?",
        choices: ["Indústria Química", "Indústria de Alimentos", "Indústria de Água e Saneamento", "Indústria Petroquímica"],
        correct: 3
    },
    {
        question: "Qual é a importância dos sensores de vazão na segurança industrial?",
        choices: ["Aumentam a produtividade", "Melhoram a qualidade do produto", "Garantem o cumprimento de normas", "Reduzem o consumo de energia"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").textContent = quizData[currentQuestion].question;
    document.getElementById("choice1").textContent = quizData[currentQuestion].choices[0];
    document.getElementById("choice2").textContent = quizData[currentQuestion].choices[1];
    document.getElementById("choice3").textContent = quizData[currentQuestion].choices[2];
    document.getElementById("choice4").textContent = quizData[currentQuestion].choices[3];
}

function selectAnswer(choice) {
    const isCorrect = quizData[currentQuestion].correct === choice;
    if (isCorrect) {
        score++;
    }
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quiz").innerHTML = `
        <h2>Quiz Concluído!</h2>
        <p>Sua pontuação: ${score} de ${quizData.length}</p>
    `;
}

window.onload = function() {
    loadQuestion();
}
