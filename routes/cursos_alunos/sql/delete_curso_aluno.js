module.exports = function(matricula, codigo) {
    return 'DELETE FROM curso_aluno WHERE codigo = "' + codigo + '" AND matricula = ' + matricula  + ';';
}