document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const qrCodeBtn = document.querySelector("#qr-form button");
    const qrCodeInput = document.querySelector("#qr-form input");
    const qrCodeImg = document.querySelector("#qr-code img");

    // Função para gerar o código QR
    function generateQrCode() {
        let qrCodeInputValue = qrCodeInput.value;

        if (!qrCodeInputValue) return;

        qrCodeBtn.innerText = "Gerando código...";

        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeInputValue)}`;

        qrCodeImg.addEventListener("load", () => {
            container.classList.add("active");
            qrCodeBtn.innerText = "QR Code gerado";
        }, { once: true }); // Adicionar { once: true } para remover o ouvinte após a execução
    }

    // Adiciona o evento de clique ao botão para gerar o QR Code
    qrCodeBtn.addEventListener("click", generateQrCode);

    qrCodeInput.addEventListener("keydown", (e) =>{
        if(e.code === 'Enter') {
            generateQrCode();
        }
    });


    // Limpar área do código
    qrCodeInput.addEventListener("keyup", () => {
        if(!qrCodeInput.value){
            container.classList.remove("active");
            qrCodeBtn.innerText = "Gerar QR Code";
        }
    });

});
