module.exports = function(matricula, codigo, frequencia, media) {
    return 'UPDATE curso_aluno SET' 
        + ' frequencia = ' + frequencia + ', ' 
        + ' media = ' + media
        + ' WHERE codigo = "' + codigo + '" AND matricula = ' + matricula  + ';';
}