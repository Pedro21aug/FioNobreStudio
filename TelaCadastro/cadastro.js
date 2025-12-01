function validarSenhas() {
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

if (senha != confirmarSenha) {
    alert("As senhas não coincidem! Por favor, verifique.");
    return false; 
}
            
window.location.href = 'http://127.0.0.1:5500/TelaServicos/servicos.html';
    return false; 
}