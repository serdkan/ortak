async function kontrol() {
  const gelenArray = await fetch("http://45.132.181.68/user").then((response) =>
    response.json()
  );
  F;
  for (let bilgi of gelenArray) {
    if (bilgi.Name == Fatih && bilgi.Password == 357) {
      console.log("BABA PUROSUN");
    } else {
      console.log("GİRİŞ BAŞARISIz");
    }
  }
}
kontrol();
