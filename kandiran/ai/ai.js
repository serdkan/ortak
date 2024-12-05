// Brain.js ve gerekli modülleri yükleme
const brain = require("brain.js");

// Eğitim verileri (örnek hikayeler)
const trainingData = [
  {
    input: "Once upon a time, a little rabbit named Bunny went to",
    output: "the forest to play.",
  },
  {
    input: "The sun was shining, and the birds were singing as",
    output: "Bunny hopped along the path.",
  },
  {
    input: "Bunny found a shiny golden key and wondered",
    output: "what it could unlock.",
  },
  {
    input: "Suddenly, a friendly fox appeared and said",
    output: '"I can help you find the treasure!"',
  },
  {
    input: "Together, Bunny and the fox walked towards",
    output: "a big old tree with a hidden door.",
  },
];

// Bir RNN (Recurrent Neural Network) modeli oluşturma
const net = new brain.recurrent.LSTM();

// Modeli eğitme
net.train(trainingData, {
  iterations: 2000,
  log: true, // Eğitim sırasında ilerlemeyi görmek için
  logPeriod: 100,
});

// Kullanıcıdan giriş alarak hikaye tamamlayan bir fonksiyon
function continueStory(start) {
  const output = net.run(start);
  console.log("Hikayenin Devamı:", output);
}

// Bir giriş hikayesi
const startStory = "Once upon a time, Bunny found a mysterious map and";
continueStory(startStory);
