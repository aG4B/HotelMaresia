// Verifica se o cadastro já foi concluído
function verificarCadastroAnterior() {
    return localStorage.getItem('cadastroRealizado') === 'true';
}

// Função para definir que o cadastro foi realizado
function marcarCadastroRealizado() {
    localStorage.setItem('cadastroRealizado', 'true');
}

// Função para exibir a mensagem de aviso
function exibirAvisoCadastro() {
    document.getElementById('aviso-cadastro').style.display = 'block';
}

// Se o cadastro já foi realizado, exibe a mensagem de aviso
if (verificarCadastroAnterior()) {
    exibirAvisoCadastro();
}

// Função para validar o formulário de cadastro
function validarCadastro() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar-senha").value;

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        mostrarAlerta("Por favor, preencha todos os campos.");
        return false;
    }

    if (senha !== confirmarSenha) {
        mostrarAlerta("As senhas não coincidem.");
        return false;
    }

    // Aqui você pode adicionar mais validações, como verificar se o e-mail já está cadastrado no banco de dados

    return true;
}

// Adiciona um ouvinte de evento para o envio do formulário de cadastro
document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    // Impede o envio do formulário se a validação falhar
    if (!validarCadastro()) {
        event.preventDefault();
    } else {
        // Marca o cadastro como realizado ao enviar o formulário com sucesso
        marcarCadastroRealizado();
    }
});

// Ouvinte de evento para o botão "Voltar para a página inicial"
document.getElementById("voltar-inicio").addEventListener("click", function() {
    window.location.href = "./index.html"; // Altere para o caminho correto da página inicial
});
