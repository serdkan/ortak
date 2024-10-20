let students = [
  {
    name: "Efe",
    dersler: {
      ders1: "Web Programcılığı"
    },
    notlar: {
      sinav1: 100,
      sinav2: 88
    }
  },
  {
    name: "Sena",
    dersler: {
      ders1: "Matematik",

    },
    notlar: {
      sinav1: 100,
      sinav2: 90
    }
  },
  {
    name: "Ela",
    dersler: {
      ders1: "İngilizce"
    },
    notlar: {
      sinav1: 80,
      sinav2: 90
    }
  },
  {
    name: "Buse",
    dersler: {
      ders1: "Edebiyat"
    },
    notlar: {
      sinav1: 70,
      sinav2: 65
    }
  },
  {
    name: "Zeynep",
    dersler: {
      ders1: "Türkçe"
    },
    notlar: {
      sinav1: 90,
      sinav2: 85
    }
  }
];
students.forEach(student => {
  let ortalama = (student.notlar.sinav1 + student.notlar.sinav2) / 2;
  console.log(`İsim: ${student.name} Dersi: ${student.dersler.ders1} Not Ortalaması: ${ortalama}`);
});
