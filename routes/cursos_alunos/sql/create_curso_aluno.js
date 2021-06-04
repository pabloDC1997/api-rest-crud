module.exports = function(matricula, codigo, frequencia, media) {
    return 'INSERT INTO curso_aluno VALUES ("' + matricula + '", "' + codigo +  '", ' + frequencia +   ', ' + media + ');';
}