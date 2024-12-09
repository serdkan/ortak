const tabukelimeler = [
  {
    kelime: ["yasemin", "çiçek", "koku", "bahce", "güzel", "renk"],
  },
  {
    kelime: ["futbol", "top", "saha", "oyuncu", "kaleci", "futbolcu"],
  },
  {
    kelime: ["tatil", "seyahat", "araba", "gezi", "kamp", "biz"],
  },
  {
    kelime: ["turkiye", "ülke", "bayrak", "hilal", "ay", "yıldız"],
  },
];

document.getElementById("kelime").innerHTML =
  "<h1>" + tabukelimeler[3].kelime[0].toUpperCase() + "</h1>";
document.getElementById("birincikelime").innerHTML =
  tabukelimeler[3].kelime[1].toUpperCase();
document.getElementById("ikincikelime").innerHTML =
  tabukelimeler[3].kelime[2].toUpperCase();
document.getElementById("ucuncukelime").innerHTML =
  tabukelimeler[3].kelime[3].toUpperCase();
document.getElementById("dorduncukelime").innerHTML =
  tabukelimeler[3].kelime[4].toUpperCase();
document.getElementById("besincikelime").innerHTML =
  tabukelimeler[3].kelime[5].toUpperCase();



  for i in range(n):
    x = int(input("Enter the next value "))
    a.append(x)