const result = await fetch("https://jsonplaceholder.org/users").then(
  (response) => response.json()
);

for (let item of result) {
  console.log(item.address.zipcode);
}
