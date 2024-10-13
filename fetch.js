const gelenArray = await fetch("https://jsonplaceholder.org/users").then((response) => response.json());

for (let kalem of gelenArray) {
  console.log(kalem.firstname);
}
