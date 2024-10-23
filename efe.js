async function kontrol() {
  const gelenArray = await fetch("http://45.132.181.68/user").then((response) =>
    response.json()
  );

  for (let bilgi of gelenArray) {
    if (bilgi.Name == "efe" && bilgi.Password == "123") {
      console.log("Giriş Başarılı");
    } else {
      console.log("Giriş Başarısız");
    }
  }
}
kontrol();
