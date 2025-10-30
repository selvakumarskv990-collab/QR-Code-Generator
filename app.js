function generateQRCode() {
    const text = document.getElementById("text").value;
    const qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = "";

    if (text.trim().length > 0) {
        new QRCode(qrcodeDiv, {
            text: text,
            width: 250,
            height: 250
        });
    }
}

