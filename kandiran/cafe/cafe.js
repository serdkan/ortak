const text = `Herkes tarafından bilinen gerçekleri, planlanan eylemleri anlatırken, belli bir süre zarfında tekrarlanan eylemleri, değişmeyen durum, duygu ve arzuları ifade ederken kullanılır.
Simple present tense alışkanlıkları, rutinleri veya sürekli tekrarlanan eylemler anlatırken kullanılır.
I drink two cups of coffee every morning.
He goes to the theater once a week.
Değişmeyen durum, duygu ve arzuları ifade ederken kullanılır.
She works in London
I like chocolate
Planlanan eylemleri anlatırken kullanılır.
He takes an exam in April
My family come to us on Monday
Herkes tarafından bilinen gerçekleri anlatırken kullanılır.
The sun sets in the west
Water boils in 100 C
Talimat ve yön bildirirken ingilizce geniş zaman kullanılır.
The contents into hot water.
You take the No:12 bus to Kadıköy
Önceden programlanmış olayları anlatırken kullanılır. Bu kullanım türünde cümleler her ne kadar gelecek zaman anlamı taşısa bile geniş zaman kurallarına göre ifade edilir.
The exam starts at 10 o’clock tomorrow.
The ship leaves Kabatas at 10pm tonight
Özellikle çocuk kitaplarında hikaye anlatımında kullanılır.`;

const yazisisi = text.split(" ");

for (let i = 0; i < yazisisi.length; i++) {
  setTimeout(() => {
    document.getElementById("yazi").innerHTML = yazisisi[i];
  }, i * 300);
}
