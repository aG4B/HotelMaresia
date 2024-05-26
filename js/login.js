// JavaScript para autenticação do usuário
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coletando os dados do formulário de login
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aqui você pode adicionar a lógica para autenticar o usuário no backend
    // Por exemplo, fazer uma requisição AJAX para um endpoint no servidor que verifica as credenciais do usuário

    // Simulação de autenticação do usuário
    if (email === "usuario@email.com" && password === "senha123") {
        // Se as credenciais estiverem corretas, redireciona para a página de reserva
        window.location.href = "./reserva.html";
    } else {
        // Se as credenciais estiverem incorretas, exibe uma mensagem de erro
        alert("E-mail ou senha incorretos. Por favor, tente novamente.");
    }
});
