const data = await fetch("https://jsonplaceholder.org/users").then((response) =>
  response.json()
);

for (let veri of data) {
  let ilkkarakter = veri.company.name.substring(0, 1);
  if (ilkkarakter == "G") {
    console.log(veri.company.name);
  }
}
//ödev