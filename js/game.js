document.addEventListener("DOMContentLoaded", function () {
    const perguntas = [
        {
            pergunta: "Qual é o nome do protagonista de Breaking Bad?",
            opcoes: ["Jesse Pinkman", "Saul Goodman", "Walter White", "Gustavo Fring"],
            resposta: "Walter White"
        },
        {
            pergunta: "Qual é o apelido de Jesse Pinkman para Walter White?",
            opcoes: ["Mr. Pink", "Mr. White", "Sr. White", "Heisenberg"],
            resposta: "Sr. White"
        },
        {
            pergunta: "Qual era a profissão de Walter White antes de se tornar um fabricante de metanfetamina?",
            opcoes: ["Policial", "Médico", "Professor de química", "Advogado"],
            resposta: "Professor de química"
        },
        {
            pergunta: "Em que cidade se passa a série Breaking Bad?",
            opcoes: ["Albuquerque, Novo méxico", "Los Angeles, Califórnia", "Miami, Flórida", "Dallas, Texas"],
            resposta: "Albuquerque, Novo méxico"
        },
        {
            pergunta: "Qual doença é diagnosticada em Walter White no início da série?",
            opcoes: ["Alzheimer", "Diabetes", "Câncer de pulmão", "Doença cardíaca"],
            resposta: "Câncer de pulmão"
        },
        {
            pergunta: "Qual é o pseudônimo usado por Walter White no mundo do crime?",
            opcoes: ["Walter White", "Gustavo Fring", "Gale Boetticher", "Heisenberg"],
            resposta: "Heisenberg"
        },
        {
            pergunta: "Quem é o chefe do cartel de drogas que se torna inimigo de Walter White?",
            opcoes: ["Gustavo Fring", "Tuco Salamanca", "Hector Salamanca", "Jack Welker"],
            resposta: "Gustavo Fring"
        },
        {
            pergunta: "Quem foi a primeira vítima de Walter White na série?",
            opcoes: ["Emilio Koyama", "Krazy-8", "Tuco Salamanca", "Jane Margolis"],
            resposta: "Emilio Koyama"
        },
        {
            pergunta: "Qual é o nome do restaurante de fast-food que Gustavo Fring usa como fachada?",
            opcoes: ["Popayes", "Burger King", "Los Pollos Hermanos", "KFC"],
            resposta: "Los Pollos Hermanos"
        },
        {
            pergunta: "Quem foi o advogado que auxiliou Walter e Jesse em seus negócios?",
            opcoes: ["Hank Schrader", "Skyler White", "Saul Goodman", "Gustavo Fring"],
            resposta: "Saul Goodman"
        }

    ];

    let currentQuestion = 0;
    let score = 0;

    const container = document.getElementById("game");
    const intro = document.querySelector(".intro");
    const startButton = document.getElementById("startGame");

    startButton.addEventListener("click", function () {
        intro.style.display = "none";
        container.style.display = "block";
        exibirPergunta();
    });

    function exibirPergunta() {
        container.innerHTML = `
            <h2>${perguntas[currentQuestion].pergunta}</h2>
            ${perguntas[currentQuestion].opcoes.map((opcao, index) => `
                <div>
                    <input type="radio" id="opcao${index}" name="opcoes" value="${opcao}">
                    <label for="opcao${index}">${opcao}</label>
                </div>
            `).join("")}
            <button onclick="verificarResposta()">Responder</button>
        `;
    }

    window.verificarResposta = function () { 
        const opcoes = document.getElementsByName("opcoes");
        let respostaUsuario = "";

        for (let i = 0; i < opcoes.length; i++) {
            if (opcoes[i].checked) {
                respostaUsuario = opcoes[i].value;
                break;
            }
        }

        const respostaCorreta = perguntas[currentQuestion].resposta;

        if (respostaUsuario === respostaCorreta) {
            score++;
            alert("Resposta correta!");
        } else {
            alert("Resposta incorreta!");
        }

        currentQuestion++;

        if (currentQuestion < perguntas.length) {
            exibirPergunta();
        } else {
            finalizarJogo();
        }
    }

    function finalizarJogo() {
        container.innerHTML = `
            <h2>Jogo finalizado!</h2>
            <p>Você acertou ${score} de ${perguntas.length} perguntas.</p>
        `;
    }
});