function basla() {
  const text = document.getElementById("baba").value;

  const yazisisi = text.split(" ");

  for (let i = 0; i < yazisisi.length; i++) {
    setTimeout(() => {
      document.getElementById("yazi").innerHTML = yazisisi[i];
    }, i * document.getElementById("viana").value);
  }
}

