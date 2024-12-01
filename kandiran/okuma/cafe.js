const text = ``;

const yazisisi = text.split(" ");

for (let i = 0; i < yazisisi.length; i++) {
  setTimeout(() => {
    document.getElementById("yazi").innerHTML = yazisisi[i];
  }, i * 300);
}
