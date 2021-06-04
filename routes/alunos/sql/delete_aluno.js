module.exports = function(matricula) {
    return 'DELETE FROM aluno WHERE matricula = "' + matricula + '";';
}