document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const respostasCorretas = {
        q1: 'b',
        q2: 'a',
        q3: 'a',
        q4: 'c',
        q5: 'b'
    };

    let pontuacao = 0;
    let respostasErradas = [];
    const respostasUsuario = new FormData(document.getElementById("quizForm"));

    for (let [questao, resposta] of respostasUsuario.entries()) {
        if (respostasCorretas[questao] === resposta) {
            pontuacao++;
        } else {
            respostasErradas.push(questao);
        }
    }

    let mensagem = `Você acertou ${pontuacao} de 5 questões.<br>`;
    if (respostasErradas.length > 0) {
        mensagem += `Você errou as seguintes questões: ${respostasErradas.join(', ')}.`;
    } else {
        mensagem += "Parabéns! Você acertou tudo!";
    }

    document.getElementById('resultado').innerHTML = mensagem;
});

function limparQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('resultado').innerHTML = '';
}