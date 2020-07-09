function cadastrarUsuario() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var nasc = document.getElementById("nascimento").value;
    var cep = document.getElementById("cep").value;
    var cnh = document.getElementById("cnh").value;
    var placa = document.getElementById("placa").value;
    var tipo = document.getElementById("tipo").value;

    if (nome != "" && cpf != "" && email != "" && nasc != "" && cep != "" && cnh != "" && placa != "" && tipo != "") {
        alert("Cadastro Realizado com Sucesso!!!");
        redirecionar();
    }
    else {
        alert("Complete se cadastro para prosseguir!!!");
        return;
    }
}

function redirecionar() {
    window.open("https://pauloegidiocardoso.github.io/siteProjetoIntegradorGit/")
}

$(document).ready(function () {
    $('#cpf').mask('000.000.000-00');
    $('#nascimento').mask('00/00/0000');
    $('#cep').mask('00000-000');
    $('#cnh').mask('000000000')
    $('#placa').mask('AAA-0000')
});

