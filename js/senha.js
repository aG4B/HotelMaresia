// JavaScript para validação e envio do formulário de recuperação de senha
document.getElementById("recuperar-senha-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Verifica se o e-mail está cadastrado
    var email = document.getElementById("email").value;
    // Aqui você pode adicionar a lógica para verificar se o e-mail está cadastrado no banco de dados
    var emailCadastrado = true; // Exemplo: supondo que o e-mail esteja cadastrado

    if (!emailCadastrado) {
        alert("O e-mail fornecido não está cadastrado.");
        return;
    }

    // Verifica se as senhas coincidem
    var novaSenha = document.getElementById("nova-senha").value;
    var confirmarNovaSenha = document.getElementById("confirmar-nova-senha").value;

    if (novaSenha !== confirmarNovaSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    // Aqui você pode adicionar a lógica para atualizar a senha no banco de dados
    // Por exemplo, fazer uma requisição AJAX para um endpoint no servidor que atualiza a senha

    // Simulação de atualização da senha
    console.log("Nova senha definida:", novaSenha);
    alert("Senha atualizada com sucesso!");
});
