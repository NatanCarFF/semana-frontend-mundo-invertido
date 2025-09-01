window.addEventListener("click", function () {
  const audio = document.getElementById("music");
  audio.play();
  audio.volume = 0.2;
});

let isDarkTheme = false; // Variável para rastrear o estado atual da página

function switchTheme() {
  
    // Alterna o tema da página
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  // Atualiza o áudio com base no tema
  const theme = document.body.classList.contains("dark-theme")
    ? "inverted-world.mpeg"
    : "normal-world.mpeg";
  const audio = document.getElementById("music");
  audio.src = `assets/musics/${theme}`;
  audio.play();
  audio.volume = 0.2;

  // Elementos das imagens
  const img1 = document.getElementById("img-1");
  const img2 = document.getElementById("img-2");
  const img3 = document.getElementById("img-3");

  // Alterna as imagens com base no estado
  if (!isDarkTheme) {
    img1.src = "assets/images/content/serie-image-01.jpg";
    img2.src = "assets/images/content/serie-image-02.jpg";
    img3.src = "assets/images/content/serie-image-03.jpg";
  } else {
    img1.src = "assets/images/content/serie-image-04.png";
    img2.src = "assets/images/content/serie-image-05.jpg";
    img3.src = "assets/images/content/serie-image-06.jpg";
  }

  // Atualiza o estado
  isDarkTheme = !isDarkTheme;
}