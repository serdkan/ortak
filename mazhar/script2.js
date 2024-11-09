let menus = ["Ana menu" , "Ürünler" , "Hakkımızda" , "İletişim" , "Referanslar" , "Şikayet hattı"];

for(let data of menus){
    document.getElementById("menu").innerHTML += `<li>${data}</li>`;
}
