  async function veriAl() {

    const data = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello");
    const ozellik = await data.json();

    const odevVerisi = ozellik[0].meanings[0].definitions[0].definition;

    console.log(odevVerisi);

    document.getElementById("container").innerHTML = `<h1> ${odevVerisi} </h1>`;

  }
  
  veriAl();
