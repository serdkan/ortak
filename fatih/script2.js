let menus = ["anasayfa"," | ","ürünler"," | ","hakkımızda"," | ","iletişim"," | " ,"Referanslar"];

for(let data of menus){
    document.getElementById("data3").innerHTML+=`<li>${data}</li>`;
}
