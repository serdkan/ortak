async function getInfo() {
  const data = await fetch("https://valorant-api.com/v1/weapons");
  const ozellik = await data.json();
  console.log(ozellik.data[0].skins[0].displayIcon);
  document.getElementById(
    "resim"
  ).innerHTML = `<img src="${ozellik.data[0].displayIcon}"/>`;

  document.getElementById("silahadi").innerHTML = ozellik.data[0].displayName;
for(let item of ozellik.data[0].skins) {
  
}
}
getInfo();
