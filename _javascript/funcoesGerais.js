/**
 * Created by Leonardo on 1/9/2017.
 */

/* TELA INICIAL DE LOGIN */
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


/* TELA DE INSCRIÇÃO */
function displayOnOff(id, isVisible) {
    if (isVisible == true) {
        document.getElementById(id).style.visibility = 'visible';
    } else {
        document.getElementById(id).style.visibility = 'hidden';
    }
}

function checkform(formId) {
    var possuiEspacosVazios = false;
    var form = document.getElementById(formId);
    var inputs = form.getElementsByTagName('input');
    var inputSexo = form.sexo_usuario;

    // if(((inputSexo[0].type == 'radio') && (inputSexo[0].checked == true)) || ((inputSexo[1].type == 'radio') && (inputSexo[1].checked == true))) {
    //     //Sexo não está vazio
    // } else {
    //     possuiEspacosVazios = true
    // }

    if (possuiEspacosVazios == true) {
        alert("Preencha todos os campos obrigatórios!");
    } else {
        validarCadastro(inputs);
    }
}

function validarCadastro(inputs) {
    var validCPF = false;
    var validEmail = false;
    var senha = "";
    var senhaConfirmacao = "";
    for (var i = 0; i < inputs.length; i++) {
        switch (inputs[i].id) {
            case "cpfId":
                validCPF = validateCPF(inputs[i]);
                break;

            case "loginId":
                validEmail = validateEmail(inputs[i]);
                break;

            case "senhaId":
                senha = inputs[i].value;
                break;

            case "confirmacaoSenhaId":
                senhaConfirmacao = inputs[i].value;
                break;

            default:
                break;
        }
    }
    if (validCPF == false) {
        alert("CPF inválido!");
    } else {
        if (validEmail == false) {
            alert("Email inválido!");
        } else {
            if (senha.localeCompare(senhaConfirmacao) != 0) {
                alert("Senhas diferentes!");
            } else {
                window.location = "espaco_do_cursista.html";
            }
        }
    }
}

function validateEmail(email) {
    return true
}

function validateCPF(cof) {
    return true;
}



function goToSituacoesClinicas() {
    window.location = "situacoes_clinicas.html";
}

function mudaIconeCor(id, nomeIcone, isMouseOver) {
    if (isMouseOver == true) {
        document.getElementById(id).src = "_imagens/"+nomeIcone+"_colorido.png";
        document.getElementById(id+"_texto").style.color = "#00AA18";
        displayOnOff(id+"_divisor", true);
    } else {
        document.getElementById(id).src = "_imagens/"+nomeIcone+".png";
        document.getElementById(id+"_texto").style.color = "#000000";
        displayOnOff(id+"_divisor", false);
    }
}



/* Espaço do Cursista */
function goToApresentacaoCurso() {
    window.location = "apresentacao_curso.html";
}

function goToGuiaCursista() {
    window.location = "guia_do_cursista.html";
}



/* Avaliação Final */
function salvarAvaliacaoFinal() {
    var p2Text = document.getElementById("p2_avaliacao_final_id").value;
    alert("Dados Salvos!!!");
    window.location = "espaco_do_cursista.html";
}