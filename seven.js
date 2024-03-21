//
var idade = prompt ("Qual é a sua idade?"); // Pergunta a idade do usuário
if (idade < 16) {
    alert("Você não pode votar!");
}
else if (idade < 18 || idade > 65) {
    alert("Seu voto é opcional!");
}
else {
    alert("Seu voto é obrigatório!");
}