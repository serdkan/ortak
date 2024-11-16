const text = `Amentü şöyledir:
Âmentü billahi ve melaiketihi ve kütübihi ve rüsülihi vel yevmil ahiri ve bilkaderi hayrihi ve şerrihi minallahi teâlâ vel ba'sü ba'del mevti hakkun. Eşhedü en lâ ilahe illallah ve eşhedü enne Muhammeden abdühü ve resülühü.
[Yani, Allah’a, meleklerine, gönderdiği kitaplarına, peygamberlerine, ahiret gününe, kadere, hayrın ve şerrin Allah’tan olduğuna, öldükten sonra dirilmeye inanıyorum. Allah’tan başka ilah olmadığına ve Muhammed aleyhisselamın da Allah’ın kulu ve son Peygamberi olduğuna şehadet ediyorum.]

İman, Muhammed aleyhisselamın, Peygamber olarak bildirdiği dini, akla, tecrübeye ve felsefeye uygun olup olmadığına bakmadan tasdik etmek yani kabul edip, beğenip, inanmaktır. Akla uygun olduğu için tasdik etmek, aklı tasdik etmek olur, Resulü tasdik etmek olmaz. Yahut Resulü ve aklı birlikte tasdik etmek olur ki, o zaman Peygambere itimat tam olmaz. Tam olmayınca, iman olmaz. Allahü teâlâ, (Onlar gayba [görmedikleri halde Resulümün bildirdiği her şeye] iman ederler) buyuruyor. (Bekara 3) Resulü de, (Dini [hükümleri, dinde bildirilenleri] aklı ile ölçenden daha zararlısı yoktur) buyurdu. (Taberani)

Nazara yani göz değmesine inanmayan bir kimse, (Bugün fen, gözle görülemeyen şuaların iş yaptığını açıklıyor. Mesela bir kumanda ile TV’yi, radyoyu veya arabamızı açıp kapatabiliyoruz. Bunun için gözlerden çıkan şuanın zarar verebileceğine artık inanıyorum) dese bunun kıymeti olmaz. Çünkü bu insan dine değil, kumandadan çıkan şuaya inanıyor. Yahut şua ile birlikte Peygambere inanıyor. Yani fen kabul ettiği için, şuaların etkisini gözü ile gördüğü için inanıyor ki bu iman olmaz. Dinde bildirilen her şeyi, fen ispat edemese de, fayda veya zararını gözü ile görmese de, yine inanmak lazımdır. Hakiki iman gayba inanmaktır yani görmeden inanmaktır. Gördükten sonra artık o iman olmaz. Gördüğünü itiraf etmek olur. Bekara suresinin 3. âyetinde, gayba inanmak, görmeden inanmak övülüyor. İmanın altı şartı da gayba inanmayı gerektirmektedir. Çünkü hiç birini görmüş değiliz.`;

const yazisisi = text.split(" ");

for (let i = 0; i < yazisisi.length; i++) {
  setTimeout(() => {
    document.getElementById("yazi").innerHTML = yazisisi[i];
  }, i * 300);
}
