let menus = ["ana menu" , "ürünler" , "hakkımızda" , "iletişim" , "şikayet hattı" , "referanslar"];

for(let data of menus){
    document.getElementById("menu").innerHTML += `<li>${data}</li> `
}  
