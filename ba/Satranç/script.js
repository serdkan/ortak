function hareket()
{
  let at = prompt("Atı hareket ettirmek istediğiniz kareyi seçiniz (6a-6c)");

  if (at=="6c") {
      document.getElementById("att").className = "at1";
      setTimeout(() => {
         alert("at hareket etti");
      }, 3000);
  }
  else if (at=="6a")
  {
    document.getElementById("att").className = "at2";
    setTimeout(() => {
         alert("at hareket etti");
      }, 3000);
  }
}