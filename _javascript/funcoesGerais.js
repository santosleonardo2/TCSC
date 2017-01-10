/**
 * Created by Leonardo on 1/9/2017.
 */
function tryLogin(nomeUsuarioId, senhaUsuarioId) {
    var nomeUsuario = document.getElementById(nomeUsuarioId).value;
    var senhaUsuario = document.getElementById(senhaUsuarioId).value;
    if (true) {
        window.location = "espaco_do_cursista.html";
    } else {
        alert("Nome do usuário ou senha inválidos!");
    }
}

function goToRegister() {
    window.location = "inscricao.html";
}

function goToSituacoesClinicas() {
    window.location = "situacoes_clinicas.html";
}

function mudaIconeCor(id, nomeIcone, isMouseOver) {
    if (isMouseOver == true) {
        document.getElementById(id).src = "_imagens/"+nomeIcone+"_colorido.png";
        document.getElementById(id+"_texto").style.color = "#00AA18";
    } else {
        document.getElementById(id).src = "_imagens/"+nomeIcone+".png";
        document.getElementById(id+"_texto").style.color = "#000000";
    }
}

function mostrarCadastroLoginSenha(id, isVisible) {
    if (isVisible == true) {
        document.getElementById(id).style.visibility = 'visible';
    } else {
        document.getElementById(id).style.visibility = 'hidden';
    }
}

function checkform(formId, tipo) {
    var possuiEspacosVazios = false;
    var form = document.getElementById(formId);
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required")){
            if((inputs[i].value == "") || ((inputs[i].type == 'radio') && (inputs[i].checked == false))){
                possuiEspacosVazios = true;
            }
        }
    }
    if (possuiEspacosVazios == true) {
        alert("Preencha todos os campos obrigatórios!");
    } else {
        if (tipo == 1) {
            mostrarCadastroLoginSenha("lateral_cadastro_online", true);
        } else if (tipo == 2) {
            validarCadastro(inputs);
        }
    }
}

function validarCadastro(inputs) {
    var senha = "";
    var senhaConfirmacao = "";
    for (var i = 0; i < inputs.length; i++) {
        switch (inputs[i].name) {
            case "senha":
                senha = inputs[i].value;
                break;

            case "senhaConfirmacao":
                senhaConfirmacao = inputs[i].value;
                break;

            default:
                break;
        }
    }
    if (senha.localeCompare(senhaConfirmacao) == 0) {
        window.location = "espaco_do_cursista.html";
    } else {
        alert("Senhas diferentes!");
    }
}