// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I said, Remember this moment", time: 15 },
  { text: "In the back of my mind", time: 20 },
  { text: "The time we stood with our shaking hands", time: 26 },
  { text: "The crowds in stands went wild", time: 30 },
  { text: "We were the kings and the queens", time: 35 },
  { text: "And they read off our names", time: 40 },
  { text: "The night you danced like you knew our lives", time: 44 },
  { text: "would never be the same", time: 48 },
  { text: "You held your head like a hero", time: 54 },
  { text: "on a history book page", time: 59 },
  { text: "It was the end of a decade", time: 64 },
  { text: "But the start of an age", time: 68 },
  { text: "Long live the walls we crashed through", time: 74 },
  { text: "How the kingdom lights shined ", time: 78 },
  { text: "just for me and you", time: 81 },
  { text: "I was screaming", time: 83 },
  { text: "Long live all the magic we made", time: 84 },
  { text: "And bring on all the pretenders", time: 87 },
  { text: "One day, we will be remembered", time: 90 },
  //verso 2
  { text: "I said, Remember this feeling", time: 96 },
  { text: "I pass the pictures around", time: 99 },
  { text: "Of all the years that we stood there on the sidelines", time: 103 },
  { text: "Wishing for right now", time: 108 },
  { text: "We are the kings and the queens", time: 112 },
  { text: "You traded your baseball cap for a crown", time: 116 },
  { text: "When they gave us our trophies", time: 122 },
  { text: "And we held them up for our town", time: 125 },
  { text: "And the cynics were outraged", time: 131 },
  { text: "Screaming, *This is absurd*", time: 136 },
  { text: "Cause for a moment, a band of thieves", time: 140 },
  { text: "in ripped up jeans Got to rule the world", time: 143 },

  //otra parte 
  { text: "Long live the walls we crashed through", time: 151 },
  { text: "How the kingdom lights shined", time: 155 },
  { text: "just for me and you", time: 157 },
  { text: "I was screaming", time: 160 },
  { text: "Long live all the magic we made", time: 161 },
  { text: "And bring on all the pretenders", time: 164 },
  { text: "I'm not afraid", time: 167 },
  { text: "Long live all the mountains we moved", time: 170 },
  { text: "I had the time of my life", time: 173 },
  { text: "fighting dragons with you", time: 176 },
  { text: "I was screaming", time: 178 },
  { text: "Long live that look on your face", time: 180 },
  { text: "And bring on all the pretenders", time: 183 },
  { text: "One day, we will be remembered", time: 186 },

  //ante-ultima parte
  { text: "Hold on to spinning around", time: 195 },
  { text: "Confetti falls to the ground", time: 200 },
  { text: "May these memories break our fall", time: 204 },
  { text: "Will you take a moment?", time: 212 },
  { text: "Promise me this", time: 218 },
  { text: "That you'll stand by me forever", time: 222 },
  { text: "But if, God forbid, fate should step in", time: 226 },
  { text: "And force us into a goodbye", time: 230 },
  { text: "If you have children some day", time: 235 },
  { text: "When they point to the pictures", time: 240 },
  { text: "Please tell 'em my name", time: 245 },
  { text: "Tell 'em how the crowds went wild", time: 251 },
  { text: "Tell 'em how I hope they shine", time: 255 },
  { text: "Long live the walls we crashed through", time: 261 },
  { text: "I had the time of my life with you", time: 264 },


    //ultima parte
  { text: "Long, long live the walls we crashed through", time: 269 },
  { text: "How the kingdom lights shined", time: 273 },
  { text: "just for me and you", time: 275 },
  { text: "And I was screaming", time: 277 },
  { text: "Long live all the magic we made", time: 279 },
  { text: "And bring on all the pretenders", time: 282 },
  { text: "I'm not afraid", time: 285 },
  { text: "Singing, 'Long live all the mountains we moved'", time: 287 },
  { text: "I had the time of my life", time: 291 },
  { text: "fighting dragons with you", time: 293 },
  { text: "And long, long live that look on your face", time: 296 },
  { text: "And bring on all the pretenders", time: 301 },
  { text: "One day", time: 304 },
  { text: "we will be remembered", time: 308 },
  { text: "Te amo, mi amor ❤", time: 311 },

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

setInterval(updateLyrics, 0);

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

//setTimeout(ocultarTitulo, 216000);

setTimeout(ocultarTitulo, 200000);