async function kontrol() {
  const gelenArray = await fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );
  


    console.log(gelenArray);

}
kontrol();





// koşul neydi // name ve password

// Id: 5,
// Name: 'Ömer',
// Surname: 'Test',
// School: 'Gültepe Orta okulu',
// Number: 326,
// Password: '159'