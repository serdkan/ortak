const text = `NAMÂZ BÜYÜK EMRDİR

Âdem aleyhisselâmdan beri, her dinde bir vakt namâz vardı. Hepsinin kıldığı bir araya toplanarak, Muhammed aleyhisselâma inananlara farz edildi. Namâz kılmak, îmânın şartı değildir. Fekat, namâzın farz olduğuna inanmak, îmânın şartıdır.

Namâz, dînin direğidir. Namâzını devâmlı, doğru ve tam olarak kılan kimse, dînini kurmuş, İslâm binâsını ayakda durdurmuş olur. Namâzı kılmayan, dînini ve İslâm binâsını yıkmış olur. Peygamberimiz “sallallahü aleyhi ve sellem” buyurdu ki; (Dînimizin başı, namâzdır). Başsız insan olmadığı gibi, namâzsız da, din olmaz.

Namâz, İslâm dîninde îmândan sonra ilk farz edilen emrdir. Allahü teâlâ, kullarının yalnız kendisine ibâdet etmeleri için namâzı farz etdi. Kur’ân-ı kerîmde yüzden fazla âyet-i kerîmede (Namâz kılınız!) buyurulmakdadır. Hadîs-i şerîfde, (Allahü teâlâ, hergün beş vakt namâz kılmayı farz etdi. Kıymet vererek ve şartlarına uyarak, hergün beş vakt namâz kılanı Cennete sokacağını, Allahü teâlâ söz verdi) buyuruldu.

Namâz, dînimizde yapılması emr edilen bütün ibâdetlerin en kıymetlisidir. Bir hadîs-i şerîfde, (Namâz kılmayanın, İslâmdan nasîbi yokdur!) buyuruldu. Yine bir hadîs-i şerîfde, (Mü’min ile kâfiri ayıran fark, namâzdır) buyuruldu. Ya’nî mü’min namâz kılar, kâfir kılmaz. Münâfıklar ise ba’zan kılar, ba’zan kılmaz. Münâfıklar, Cehennemde çok acı azâb görecekdir. Resûlullah “sallallahü aleyhi ve sellem” efendimiz buyurdu ki: (Namâz kılmayanlar, kıyâmet günü, Allahü teâlâyı kızgın olarak bulacaklardır.)

Namâz kılmak, Allahü teâlânın büyüklüğünü düşünerek, Onun karşısında kendi küçüklüğünü anlamakdır. Bunu anlayan kimse, hep iyilik yapar. Hiç kötülük yapamaz. Hergün beş kerre, Rabbinin huzûrunda olduğunu niyyet eden kimsenin kalbi ihlâs ile dolar. Namâzda yapılması emr olunan her hareket, kalbe ve bedene fâideler sağlamakdadır.

Câmi’lerde cemâ’at ile namâz kılmak, müslimânların kalblerini birbirine bağlar. Aralarında sevgiyi sağlar. Birbirlerinin kardeş olduklarını anlarlar.`;

const yazisisi = text.split(" ");

for (let i = 0; i < yazisisi.length; i++) {
  setTimeout(() => {
    document.getElementById("yazi").innerHTML = yazisisi[i];
  }, i * 400);
}
