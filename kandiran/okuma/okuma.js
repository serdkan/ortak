function baslat() {
  const text = document.getElementById("gelenYazi").value;

  const yazisisi = text.split(" ");

  for (let i = 0; i < yazisisi.length; i++) {
    setTimeout(() => {
      document.getElementById("yazi").innerHTML = yazisisi[i];
    }, i * 200);
  }
}
