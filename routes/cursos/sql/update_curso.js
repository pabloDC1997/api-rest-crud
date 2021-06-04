module.exports = function(nome, codigo) {
    return 'UPDATE curso SET nome = "' + nome + '" WHERE codigo = "' + codigo + '";';
}