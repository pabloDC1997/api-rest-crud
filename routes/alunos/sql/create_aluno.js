module.exports = function(nome, matricula) {
    return 'INSERT INTO aluno VALUES ("' + nome + '", "' + matricula + '");';
}