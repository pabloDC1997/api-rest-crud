module.exports = function(nome, matricula) {
    return 'UPDATE aluno SET nome = "' + nome + '" WHERE matricula = "' + matricula + '";';
}