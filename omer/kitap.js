const text = `Yüksek rûhlar, sevdikleri rûhları yukarı çekerler. Alçak rûhlar da, aşağı çeker. İnsan, öldükden sonra, rûhunun nereye gideceğini, dünyâda sevdiklerinin hâlinden anlamalıdır. İnsan, başkasını tabî’at îcâbı veyâ akl îcâbı veyâ kendisine yapdığı iyilikler îcâbı veyâ Allahü teâlânın rızâsı için sever. Dünyâda sevişen kimselerin rûhları birbirlerini cezb etdiği gibi, kıyâmetde de birbirlerini cezb ederler. Enes bin Mâlik “radıyallahü anh” diyor ki, müslimânları yukardaki hadîs-i şerîf sevindirdiği kadar, hiçbir şey sevindirmemişdir. Kâfirleri seven onlarla birlikde Cehenneme gidecekdir. Sevgilisine tâbi’ olmamak, insanın elinde değildir. Sevmenin en kuvvetli alâmeti, sevgilinin sevdiklerini sevmek, sevmediklerini sevmemekdir.

FİTNE

29 - İnsanları sıkıntıya, belâya düşürmek, ihtilâle sebeb olmak, fitne çıkarmakdır. Hadîs-i şerîfde, (Fitne, uykudadır. Bunu uyandırana Allah la’net etsin!) buyuruldu. İnsanları, hükûmete karşı, kanûnlara karşı isyâna teşvîk etmek, fitne olur. Fitne çıkarmak harâmdır. Haksız yere adam öldürmekden dahâ büyük günâhdır. Zâlim olan hükûmete karşı isyân etmek de harâmdır. Mazlûmlar isyân ederse, bunlara yardım etmek de harâmdır. İsyân etmenin zararı, günâhı, zulmün zararından ve günâhından dahâ çokdur.

İmâmın, sünnet olan mikdârdan fazla okuyarak nemâzı uzatması da, fitne çıkarmakdır. Cemâ’atin hepsi râzı olursa, fitne olmaz, câiz olur. Vâizlerin, din adamlarının, cemâ’atin anlıyamıyacakları şeyleri söylemeleri ve yazmaları da, fitne olur. Herkese, anlıyabileceği kadar söylemelidir. Müslimânlara yapamıyacakları ibâdetleri emr etmemelidir. Za’îf kavl olsa bile, yapabileceklerini söylemelidir. Emr-i ma’rûf yaparken de fitne çıkarmamağa dikkat etmek lâzımdır. Emr-i ma’rûf yaparken, kendini tehlükeye sokmak, emr olunmadı. Dîne ve başkalarına zarar vererek, dünyâ fitnesine de, sebeb olmamalıdır. Kendine dünyevî zararı dokunacak emr-i ma’rûfu yapmak câiz olur, cihâd olur. Sabr edemiyecekse, bunu da, yapmamalıdır. Fitne zemânında evinden çıkmamalı, kimse ile görüşmemelidir. Fitneye yakalanınca, sabr etmelidir.

İmâm-ı Rabbânî “rahime-hullahü teâlâ”, ikinci cildin altmışsekizinci mektûbunda buyuruyor ki: Sevgili yavrum! Tekrâr tekrâr yazıyorum ki, şimdi, günâhlarımıza tevbe edecek, Allahımızdan afv dileyecek zemândayız. Fitnelerin çoğaldığı bu zemânda, eve kapanıp, kimse ile görüşmemelidir. Fitneler, nerdeyse yağmur gibi yağarak, heryeri kaplıyacak. Hadîs-i şerîfde buyuruldu ki, (Kıyâmet kopmadan evvel, her yeri fitneler kaplıyacak.`;

const yazisisi = text.split(" ");

for (let i = 0; i < yazisisi.length; i++) {
  setTimeout(() => {
    document.getElementById("yazi").innerHTML = yazisisi[i];
  }, i * 300);
}