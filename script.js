document.getElementById("generate-btn").addEventListener("click", () => {
    const input = document.getElementById("qr-input").value;
    const qrContainer = document.getElementById("qr-container");

    if (input.trim() === "") {
        qrContainer.innerHTML = "<p style='color: red;'>Please enter text or a URL</p>";
        return;
    }

    // Очистка предыдущего QR-кода
    qrContainer.innerHTML = "";

    // Генерация QR-кода
    const canvas = document.createElement("canvas");
    const qr = new QRious({
        element: canvas,
        value: input,
        size: 200,
    });

    // Добавление QR-кода в контейнер
    qrContainer.appendChild(canvas);

    // Добавление кнопки скачивания
    const downloadBtn = document.createElement("a");
    downloadBtn.textContent = "Download QR Code";
    downloadBtn.style.display = "block";
    downloadBtn.style.marginTop = "10px";
    downloadBtn.style.textDecoration = "none";
    downloadBtn.style.color = "#007BFF";
    downloadBtn.style.fontWeight = "bold";

    downloadBtn.href = canvas.toDataURL("image/png");
    downloadBtn.download = "qr-code.png";

    qrContainer.appendChild(downloadBtn);
});
