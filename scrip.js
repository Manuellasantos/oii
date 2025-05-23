document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos
    const textoMarquee = document.getElementById('texto-marquee');
    const changeBgBtn = document.getElementById('change-bg-btn');
    const changeTextBtn = document.getElementById('change-text-btn');
    const playMusicBtn = document.getElementById('play-music-btn');
    const backgroundMusic = document.getElementById('background-music');

    // Animação fade-in inicial
    textoMarquee.classList.add('fade-in');

    // Mudar fundo da página
    changeBgBtn.addEventListener('click', function() {
        const randomColors = [
            'linear-gradient(135deg, #ff7e5f, #feb47b)',
            'linear-gradient(135deg, #6a11cb, #2575fc)',
            'linear-gradient(135deg, #ff9a8b, #d4a5a5)',
            'linear-gradient(135deg, #abecd6, #fbed96)'
        ];
        document.body.style.background = randomColors[Math.floor(Math.random() * randomColors.length)];
    });

    // Mudar cor do texto
    changeTextBtn.addEventListener('click', function() {
        const randomTextColors = ['#ff6f61', '#4f89e7', '#e6a0c4', '#fff'];
        textoMarquee.querySelector('p').style.color = randomTextColors[Math.floor(Math.random() * randomTextColors.length)];
    });

    // Mudança de texto ao clicar
    textoMarquee.addEventListener('click', function() {
        textoMarquee.innerHTML = "<p>Estou realmente com fome!</p>";
        textoMarquee.classList.add('fade-in');
    });
});
