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



/* Espaço do Cursista */
function goToApresentacaoCurso() {
    window.location = "apresentacao_curso.html";
}

function goToGuiaCursista() {
    window.location = "guia_do_cursista.html";
}

function goToCadernetaDaCrianca() {
    window.location = "caderneta_saude_da_crianca.html";
}




/* Casos Clinicos*/
function mudaIconeCor(id, nomeIcone, wasClicked) {
    if (wasClicked == true) {
        document.getElementById(id).src = "_imagens/"+nomeIcone+"_colorido.png";
        document.getElementById(id+"_texto").style.color = "#00AA18";
        displayOnOff(id+"_divisor", true);
    } else {
        document.getElementById(id).src = "_imagens/"+nomeIcone+".png";
        document.getElementById(id+"_texto").style.color = "#000000";
        displayOnOff(id+"_divisor", false);
    }
}

function resizeIframe(iframeID) {
    var iframe = window.parent.document.getElementById(iframeID);
    iframe.height = iframe.contentWindow.document.body.scrollHeight;
}

function mudaAba(ativaAbaId, desativaAba1Id, desativaAba2Id, desativaAba3Id) {
    var ativaAba = document.getElementById(ativaAbaId);
    var desativaAba1 = document.getElementById(desativaAba1Id);
    var desativaAba2 = document.getElementById(desativaAba2Id);
    var desativaAba3 = document.getElementById(desativaAba3Id);

    desativaAba1.style.display = "none";
    desativaAba2.style.display = "none";
    desativaAba3.style.display = "none";
    ativaAba.style.display = "block";
}

function openModal(modalId, alertId, spanId) {
    // Get the modal
    var modal = document.getElementById(modalId);

    // Get the button that opens the modal
    var btn = document.getElementById(alertId);

    // Get the <span> element that closes the modal
    var span = document.getElementById(spanId);

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function setGraphValue(x, y, xInputId, yInputId) {
    document.getElementById(xInputId).defaultValue = x;
    document.getElementById(yInputId).defaultValue = y;
}