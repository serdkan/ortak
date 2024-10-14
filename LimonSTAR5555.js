async function limonababadir() {
  const result = await fetch("https://jsonplaceholder.org/users").then(
    (response) => response.json()
  );

  for (let item of result) {
    let first = item.firstname;
    let last = item.lastname;

    if (first == "Jane" && last == "Smith") {
      return true;
    }
    
  }
  return false;
}

let gelen = limonababadir();
console.log(gelen);

















// ("https://www.rekoroyun.com/resim/skibidi-toilet.jpg")