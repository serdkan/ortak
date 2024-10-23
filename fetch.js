async function kontrol() {
  const gelenArray = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );
  for (let item of gelenArray) {
    document.getElementById("data").innerHTML += `<h4>${item.title}</h4><br> <img src=${item.image} width='200px'></img><br>`;
  }
}

kontrol();

// gelen verileri bir tane HTML sayfası açılıpı içine basılacak
// document get elemen by ıd ile
