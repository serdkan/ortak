async function Odev(isim, soyisim) {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );

  for (let veri of data) {
    const [first, last] = veri.name.split(" ");
    if (first === isim && last === soyisim) {
      return true;
    }
  }
  return false;
}
Odev("John", "Doe").then(result => console.log(result));
