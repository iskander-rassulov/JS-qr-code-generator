document.getElementById("generate-btn").addEventListener("click", () => {
    const input = document.getElementById("qr-input").value.trim();
    const qrContainer = document.getElementById("qr-container");
    const downloadBtn = document.getElementById("download-btn");

    qrContainer.innerHTML = ""; // Очистка контейнера
    downloadBtn.style.display = "none"; // Скрыть кнопку при каждом новом клике

    if (!input) {
        qrContainer.innerHTML = "<p style='color: #777;'>Please enter text or a URL.</p>";
        return;
    }

    // Создание QR-кода
    const canvas = document.createElement("canvas");
    new QRious({
        element: canvas,
        value: input,
        size: 200,
        level: 'H',
    });

    qrContainer.appendChild(canvas);

    // Настройка кнопки скачивания
    downloadBtn.href = canvas.toDataURL("image/png");
    downloadBtn.download = "qr-code.png";
    downloadBtn.style.display = "block"; // Показать кнопку после генерации
});
