//  sincronizar a musica
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "“Tantas lutas e problemas, na vida eu tive já. Mas eu subi montanha, atravessei o rio. Estou chegando lá.”", time: 15 },
  { text: "“Me prometa só uma coisa? Que você nunca, nunca vai esquecer o que é realmente importante.”", time: 18 },
  { text: "“No céu a estrela vai brilhar. O seu pedido iluminar. A mágica está no ar. E nada é impossível.”", time: 27 },
  { text: "“O único jeito de conseguir alguma coisa nesse mundo, é trabalhando muito.”", time: 32 },
  { text: "“Meu sonho não estaria completo sem você nele”", time: 36 },
  { text: "“Isso é o que eu quero pra você, querida. Que conheça seu príncipe encantado. Dance com ele e sejam sempre felizes.”", time: 41 },
  { text: "“Então, o sapo foi transformado em um lindo príncipe. Eles se casaram e viveram felizes para sempre.”", time: 47 },
  { text: "“Se você faz sempre o seu melhor, trás o que é bom pro seu redor.”", time: 54 },
  { text: "“As coisas vão fluir. Só preciso insistir mais um pouco e conseguir.”", time: 59 },
  { text: "“Tudo pode acontecer. Ver o sonho realizado só depende de você.”", time: 67 },
  { text: "“Faça um pedido, querida. E, deseje e sonhe com muita fé no coração.”", time: 72 },
  { text: "“Eu tava começando a pensar que pedido pra estrela era uma coisa imatura pra crianças e gente bem maluca.”", time: 78 },
  { text: "“Você nunca será velha demais para fazer um pedido a uma estrela.”", time: 83 },
  { text: "“Só desejar algo, não o torna real”", time: 91 },
  { text: "“Tenho que desejar com mais força.”", time: 97 },
  { text: "“Aproveite a vida pra ter um pouco de diversão. É assim que as coisas são.”", time: 104 },
  { text: "“Toda minha vida li sobre amor de verdade em contos de fadas e você conseguiu achar.”", time: 108 },
  { text: "“Acho que a gente pode se conhecer melhor.”", time: 144 },
  { text: "“Eu amo a maneira como se anima quando fala do seu sonho.”", time: 148 },
  { text: "“Você teve uma grande influência sobre mim.”", time: 153 },
  { text: "“Você tá mais linda do que as flores da primavera.”", time: 158 },
  { text: "“Sempre tive certeza do que queria.”", time: 164 },
  { text: "“Tenho certeza que um dia seremos um casal.”", time: 169 },
  { text: "“A beleza está não só no que vemos, mas no que sentimos.”", time: 176 },
  { text: "“Eu te amo Evangeline”", time: 188 },
  { text: "“Quase lá”", time: 183 },
  { text: "“Eu te amo ❤.”", time: 190 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);