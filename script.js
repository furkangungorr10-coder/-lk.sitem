document.addEventListener('DOMContentLoaded', function () {
    const mesajButonu = document.getElementById('mesaj-btn');
    const temaButonu = document.getElementById('theme-toggle');

    if (mesajButonu) {
        mesajButonu.addEventListener('click', function () {
            alert('Web sitemize hoş geldiniz! Kodlama öğrenmeye devam ediyoruz.');
        });
    }

    if (temaButonu) {
        temaButonu.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                temaButonu.textContent = '☀️ Gündüz Modu';
            } else {
                temaButonu.textContent = '🌙 Gece Modu';
            }
        });
    }
});