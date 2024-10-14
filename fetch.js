async function kontrol() {
  const gelenArray = await fetch("https://jsonplaceholder.org/users").then(
    (response) => response.json()
  );
}


