// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const greetingDiv = document.querySelector('#greeting');
    const clockDiv = document.querySelector('#clock');
    const dateDiv = document.querySelector('#date');
    
    const userName = prompt("Lütfen isminizi giriniz:");

    if (userName && userName.trim() !== '') {
        greetingDiv.innerText = `Merhaba, ${userName}!`;
        updateClock(clockDiv, dateDiv);
        setInterval(() => updateClock(clockDiv, dateDiv), 1000);
    } else {
        greetingDiv.innerText = "Lütfen geçerli bir isim giriniz.";
    }
});

function updateClock(clockDiv, dateDiv) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = now.toLocaleDateString('tr-TR', { weekday: 'long' });
    const date = now.toLocaleDateString('tr-TR');

    clockDiv.innerText = `Şu anki saat: ${hours}:${minutes}:${seconds}`;
    dateDiv.innerText = `Bugün: ${day}, ${date}`;
}
