
let menus = ["ana menu" , "ürünler" , "hakkimizda" , "iletişim"];

let baslik = "Javascript dersleri";
document.getElementById("data2").innerHTML = "<h1>"+baslik+"</h1>";

for(let data of menus){
    document.getElementById("menu").innerHTML += `<li>${data}</li>`;
}
