let ogrenciler = [
  {
    cinsiyet: "E",
    yas: 15,
    ayakkabiNo: 37,
    okulNo: 1366,
    donemOdevi: "MATEMATİK",
  },
  {
    cinsiyet: "K",
    yas: 13,
    ayakkabiNo: 36,
    okulNo: 108,
    donemOdevi: "FEN BILGISI",
  },
  {
    cinsiyet: "E",
    yas: 14,
    ayakkabiNo: 35,
    okulNo: 99,
    donemOdevi: "BEDEN EĞİTİM",
  },
  {
    cinsiyet: "K",
    yas: 13,
    ayakkabiNo: 35,
    okulNo: 99,
    donemOdevi: "BEDEN EĞİTİM",
  },
  {
    cinsiyet: "E",
    yas: 12,
    ayakkabiNo: 37,
    okulNo: 47,
    donemOdevi: "TÜRKÇE",
  },
  {
    cinsiyet: "K",
    yas: 13,
    ayakkabiNo: 39,
    okulNo: 50,
    donemOdevi: "MATEMATİK",
  },
];

for (let i = 0; i < ogrenciler.length; i++) {
  if (ogrenciler[i].donemOdevi == "MATEMATİK") {
    console.log(
      `${ogrenciler[i].okulNo} nolu öğrencinin dönem ödevi ${ogrenciler[i].donemOdevi}`
    );
  }
}

for (let i = 0; i < ogrenciler.length; i++) {
  if (ogrenciler[i].ayakkabiNo < 38) {
    console.log(
      `${ogrenciler[i].okulNo} nolu öğrencinin ayakkabı no ${ogrenciler[i].ayakkabiNo}`
    );
  }
}
