async function control() {
  const data = await fetch("https://jsonplaceholder.org/users").then(
    (response) => response.json()
  );
  for (let veri of data) {
    let firstname = veri.firstname;
    let lastname = veri.lastname;
    if (firstname == "Jane" && lastname == "Smith") {
      return true;
    }
  }
  return false;
}

let dogrumu = await control();
console.log(dogrumu);
