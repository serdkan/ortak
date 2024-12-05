async function getInfo() {
  const kelime = "attend"
  const data = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+kelime);
  const ozellik = await data.json();
}
getInfo();
