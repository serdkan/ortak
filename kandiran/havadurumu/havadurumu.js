async function havadurumugetir() {
    const sehir = document.getElementById("sehir").value;
  const result = await fetch(
    `https://api.weatherstack.com/current?access_key=b91f177c320db9d50760c18cb93e4ec9&query=${sehir}`
  );

  const havadurumu = await result.json();

  document.getElementById("derece").innerHTML = havadurumu.current.temperature;

  document.getElementById("ruzgarhizi").innerHTML =
    havadurumu.current.wind_speed;

  document.getElementById(
    "icon"
  ).innerHTML = `<img src="${havadurumu.current.weather_icons[0]}"></img>`;

  document.getElementById("city").innerHTML = havadurumu.location.name;

  if (havadurumu.current.temperature <= 0) {
    document.getElementById("video").innerHTML = `<video autoplay muted loop>
            <source src="snow.mp4" type="video/mp4">
            Tarayıcınız video etiketini desteklemiyor.
        </video>`;
  } else {
    document.getElementById("video").innerHTML = `<video autoplay muted loop>
    <source src="gunesli.mp4" type="video/mp4">
    Tarayıcınız video etiketini desteklemiyor.
</video>`;
  }
}

