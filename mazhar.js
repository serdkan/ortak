async function kontrol() {
  const gelenArray = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );
  console.log(gelenArray);
}

kontrol();
