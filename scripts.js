const elementos = document.querySelectorAll('.animar, .evento'); 

elementos.forEach(e => {
    const top = e.getBoundingClientRect().top;
    if (top < trigger) {
        e.classList.add('visible');
    }
});
const musica = document.getElementById("musica");
const btn = document.getElementById("btnMusica");

btn.onclick = () => {
    if (musica.paused) {
        musica.play().catch(()=>alert("Toca el botón otra vez"));
        btn.innerText = "⏸";
    } else {
        musica.pause();
        btn.innerText = "▶";
    }
};