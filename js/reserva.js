// JavaScript para tratamento do formulário de reserva
document.getElementById("reserva-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coletando os dados do formulário de reserva
    var checkInDate = document.getElementById("check-in-date").value;
    var checkOutDate = document.getElementById("check-out-date").value;
    var numRooms = document.getElementById("num-rooms").value;
    var roomType = document.getElementById("room-type").value;

    // Aqui você pode adicionar a lógica para processar e enviar os dados de reserva ao backend
    // Por exemplo, fazer uma requisição AJAX para um endpoint no servidor que lida com o processamento da reserva

    // Simulação de envio dos dados de reserva
    console.log("Data de check-in:", checkInDate);
    console.log("Data de check-out:", checkOutDate);
    console.log("Número de quartos:", numRooms);
    console.log("Tipo de quarto:", roomType);

    // Feedback ao usuário após a submissão do formulário
    alert("Sua reserva foi recebida com sucesso! Entraremos em contato em breve para confirmar os detalhes.");
});
