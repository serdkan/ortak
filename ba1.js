
let ogrenciler = [
    {
      cinsiyet: "Erkek",
      yas: 15,
      ayakkabiNo: 37,
      okulNo: 1366,
      donemOdevi: "MATEMATİK",
    },
    {
      cinsiyet: "Kız",
      yas: 13,
      ayakkabiNo: 36,
      okulNo: 108,
      donemOdevi: "FEN BILGISI",
    },
    {
      cinsiyet: "Erkek",
      yas: 14,
      ayakkabiNo: 35,
      okulNo: 99,
      donemOdevi: "BEDEN EĞİTİM",
    },
    {
      cinsiyet: "Kız",
      yas: 13,
      ayakkabiNo: 35,
      okulNo: 99,
      donemOdevi: "BEDEN EĞİTİM",
    },
    {
      cinsiyet: "Erkek",
      yas: 12,
      ayakkabiNo: 37,
      okulNo: 47,
      donemOdevi: "TÜRKÇE",
    },
    {
      cinsiyet: "Kız",
      yas: 13,
      ayakkabiNo: 39,
      okulNo: 50,
      donemOdevi: "MATEMATİK",
    },
  ];



              



for (let i = 0; i < ogrenciler.length; i++) {
      

    if (ogrenciler[i].donemOdevi == "MATEMATİK") {
                
         console.log(i + ". öğrencinin dönem ödevi = " + ogrenciler[i].donemOdevi );

    }

   

}


console.log("\n \n \n");


for (let i = 0; i < ogrenciler.length; i++){


    if (ogrenciler[i].ayakkabiNo < 38){


       console.log( i + ". öğrencinin ayakkabı numarası 38den küçüktür");

}

}


console.log("\n \n \n");


for (let i = 0; i < ogrenciler.length; i++){


       if(ogrenciler[i].cinsiyet == "Erkek") {

        console.log(i + ". öğrencinin cinsiyeti = " + ogrenciler[i].cinsiyet);
       }
       

       else if (ogrenciler[i].cinsiyet == "Kız"){
        console.log(i + ". öğrencinin cinsiyeti = " + ogrenciler[i].cinsiyet);
       }

}
