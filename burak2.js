async function control() {
  const data = await fetch("https://jsonplaceholder.org/users").then(
    (response) => response.json()
  );

  for (let burak of data) {
    if (burak.firstname == "Jane" && burak.lastname == "Smith") {
      return true;
    }
  }
  return false;
}

let dogruglb = await control();
console.log(dogruglb);
