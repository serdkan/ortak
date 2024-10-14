async function kontrol() {
  const result = await fetch("https://jsonplaceholder.org/users").then(
    (response) => response.json()
  );

  for (let item of result) {
    let first = item.firstname;
    let last = item.lastname;

    if (first == "Jane" && last == "Smith") {
      return true;
    }

    else{
      return false;
    }
  }
}

let gelen = kontrol();
console.log(gelen);
