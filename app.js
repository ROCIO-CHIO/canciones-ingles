// ==========================================================
// 🎵 AQUÍ ES DONDE AGREGAS O EDITAS TUS CANCIONES
// ==========================================================
// - "urlCancion": enlace de YouTube o Spotify para abrir al pulsar
//   "Reproduce la canción".
// - "gif": enlace directo a un .gif (o subes un .gif a tu carpeta/GitHub
//   y pones por ejemplo "gifs/sad-frog.gif" o la URL del GIF).
// ==========================================================

const canciones = [
  {
    id: 1,
    titulo: "You Broke Me First",
    artista: "Tate McRae",
    categoria: "Sad",
    urlCancion: "https://www.youtube.com/watch?v=AG-erEMhumc",
    gif: "https://giphy.com/embed/Ty9Sg8oHghPWg",
    letras: [
  {
    en: "Maybe you don't like talking too much about yourself",
    es: "Quizás no te gusta hablar mucho de ti mismo."
  },
  {
    en: "But you should have told me",
    es: "Pero deberías haberme dicho."
  },
  {
    en: "That you were thinking 'bout someone else",
    es: "Que estabas pensando en alguien más."
  },
  {
    en: "You're drunk at a party",
    es: "Estás borracho en una fiesta."
  },
  {
    en: "Or maybe it's just that your car broke down",
    es: "O quizás simplemente se averió tu carro."
  },
  {
    en: "Or your phone's been off for a couple of months",
    es: "O tu teléfono ha estado apagado durante un par de meses."
  },
  {
    en: "So you're calling me now",
    es: "Así que ahora me estás llamando."
  },
  {
    en: "I know you, you're like this",
    es: "Te conozco, eres así."
  },
  {
    en: "When shit don't go your way you needed me to fix it",
    es: "Cuando las cosas no salen como quieres, necesitabas que yo las arreglara."
  },
  {
    en: "And like me, I did",
    es: "Y como siempre, lo hice."
  },
  {
    en: "But I ran out of every reason",
    es: "Pero me quedé sin razones para seguir haciéndolo."
  },
  {
    en: "Now suddenly you're asking for it back",
    es: "Y ahora, de repente, quieres recuperarlo."
  },
  {
    en: "Could you tell me, where'd you get the nerve?",
    es: "¿Podrías decirme de dónde sacaste el descaro?"
  },
  {
    en: "Yeah, you could say you miss all that we had",
    es: "Sí, podrías decir que extrañas todo lo que teníamos."
  },
  {
    en: "But I don't really care how bad it hurts",
    es: "Pero realmente no me importa cuánto te duela."
  },
  {
    en: "When you broke me first",
    es: "Porque tú me rompiste primero."
  },
  {
    en: "You broke me first",
    es: "Tú me rompiste primero."
  },
  {
    en: "Took a while, was in denial when I first heard",
    es: "Me tomó un tiempo, estaba en negación cuando lo escuché por primera vez."
  },
  {
    en: "That you moved on quicker than I could've ever",
    es: "Que me superaste más rápido de lo que yo jamás habría podido."
  },
  {
    en: "You know that hurt",
    es: "Sabes que eso dolió."
  },
  {
    en: "Swear, for a while I would stare at my phone",
    es: "Lo juro, durante un tiempo me quedaba mirando mi teléfono."
  },
  {
    en: "Just to see your name",
    es: "Solo para ver tu nombre."
  },
  {
    en: "But now that it's there, I don't really know what to say",
    es: "Pero ahora que aparece, realmente no sé qué decir."
  },
  {
    en: "I know you, you're like this",
    es: "Te conozco, eres así."
  },
  {
    en: "When shit don't go your way you needed me to fix it",
    es: "Cuando las cosas no salen como quieres, necesitabas que yo las arreglara."
  },
  {
    en: "And like me, I did",
    es: "Y como siempre, lo hice."
  },
  {
    en: "But I ran out of every reason",
    es: "Pero me quedé sin razones."
  },
  {
    en: "Now suddenly you're asking for it back",
    es: "Y ahora, de repente, quieres recuperarlo."
  },
  {
    en: "Could you tell me, where'd you get the nerve?",
    es: "¿Podrías decirme de dónde sacaste el descaro?"
  },
  {
    en: "Yeah, you could say you miss all that we had",
    es: "Sí, podrías decir que extrañas todo lo que teníamos."
  },
  {
    en: "But I don't really care how bad it hurts",
    es: "Pero realmente no me importa cuánto te duela."
  },
  {
    en: "When you broke me first",
    es: "Porque tú me rompiste primero."
  },
  {
    en: "You broke me first",
    es: "Tú me rompiste primero."
  },
  {
    en: "What did you think would happen?",
    es: "¿Qué pensaste que iba a pasar?"
  },
  {
    en: "What did you think would happen?",
    es: "¿Qué pensaste que iba a pasar?"
  },
  {
    en: "I'll never let you have it",
    es: "Nunca te dejaré recuperarlo."
  },
  {
    en: "What did you think would happen?",
    es: "¿Qué pensaste que iba a pasar?"
  },
  {
    en: "Now suddenly you're asking for it back",
    es: "Y ahora, de repente, quieres recuperarlo."
  },
  {
    en: "Could you tell me, where'd you get the nerve?",
    es: "¿Podrías decirme de dónde sacaste el descaro?"
  },
  {
    en: "Yeah, you could say you miss all that we had",
    es: "Sí, podrías decir que extrañas todo lo que teníamos."
  },
  {
    en: "But I don't really care how bad it hurts",
    es: "Pero realmente no me importa cuánto te duela."
  },
  {
    en: "When you broke me first",
    es: "Porque tú me rompiste primero."
  },
  {
    en: "You broke me first (you broke me first)",
    es: "Tú me rompiste primero (tú me rompiste primero)."
  },
  {
    en: "You broke me first, ooh oh",
    es: "Tú me rompiste primero, oh, oh."
  }
],
    notas: [
      "'bout = abreviación informal de 'about' (acerca de / sobre).",
      "should have told = deberías haber dicho (estructura para lamentar algo del pasado).",
      "broke down = phrasal verb que significa averiarse o descomponerse."
    ]
  },
  {
    id: 2,
    titulo: "Happy",
    artista: "Pharrell Williams",
    categoria: "Alegre",
    urlCancion: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXJqY2N2bWl3bWZ5c2h0bG5vM2J2bWl3bWZ5c2h0bG5vM2J2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif",
    letras: [
      {
        en: "It might seem crazy what I'm 'bout to say",
        es: "Puede parecer una locura lo que voy a decir"
      },
      {
        en: "Sunshine she's here, you can take a break",
        es: "La luz del sol está aquí, puedes tomarte un descanso"
      },
      {
        en: "Because I'm happy",
        es: "Porque estoy feliz"
      },
      {
        en: "Clap along if you feel like a room without a roof",
        es: "Aplaude si te sientes como una habitación sin techo"
      }
    ],
    notas: [
      "take a break = tomarse un descanso.",
      "clap along = aplaudir al ritmo de la música."
    ]
  }
];

// ==========================================================
// ⚙️ LÓGICA DE LA APLICACIÓN (No necesitas modificar esto)
// ==========================================================

let categoriaActual = "Todas";
let textoBusqueda = "";
let traduccionesOcultas = false;

const vistaLista = document.getElementById("vista-lista");
const vistaCancion = document.getElementById("vista-cancion");
const gridCanciones = document.getElementById("grid-canciones");
const filtrosCategorias = document.getElementById("filtros-categorias");
const buscador = document.getElementById("buscador");
const contenidoCancion = document.getElementById("contenido-cancion");
const btnVolver = document.getElementById("btn-volver");
const btnToggleTraduccion = document.getElementById("btn-toggle-traduccion");

function renderizarCategorias() {
  const categoriasUnicas = ["Todas", ...new Set(canciones.map(c => c.categoria))];
  filtrosCategorias.innerHTML = "";

  categoriasUnicas.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `btn-cat ${cat === categoriaActual ? "activa" : ""}`;
    btn.textContent = cat;
    btn.onclick = () => {
      categoriaActual = cat;
      renderizarCategorias();
      renderizarLista();
    };
    filtrosCategorias.appendChild(btn);
  });
}

function renderizarLista() {
  gridCanciones.innerHTML = "";

  const filtradas = canciones.filter(c => {
    const coincideCat = categoriaActual === "Todas" || c.categoria === categoriaActual;
    const coincideTexto =
      c.titulo.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
      c.artista.toLowerCase().includes(textoBusqueda.toLowerCase());
    return coincideCat && coincideTexto;
  });

  if (filtradas.length === 0) {
    gridCanciones.innerHTML = "<p>No se encontraron canciones con ese filtro.</p>";
    return;
  }

  filtradas.forEach(cancion => {
    const card = document.createElement("div");
    card.className = "card-cancion";
    const claseCat = cancion.categoria.toLowerCase();

    card.innerHTML = `
      <h3>${cancion.titulo}</h3>
      <p>${cancion.artista}</p>
      <span class="etiqueta ${claseCat}">${cancion.categoria}</span>
    `;

    card.onclick = () => abrirCancion(cancion);
    gridCanciones.appendChild(card);
  });
}

function abrirCancion(cancion) {
  traduccionesOcultas = false;
  btnToggleTraduccion.textContent = "👁️ Ocultar traducciones";

  const claseCat = cancion.categoria.toLowerCase();

  const htmlBotonReproducir = cancion.urlCancion
    ? `
      <a
        href="${cancion.urlCancion}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-reproducir"
      >
        ▶️ Reproduce la canción
      </a>
    `
    : "";

  const htmlGif = cancion.gif
    ? `<img src="${cancion.gif}" alt="GIF de ${cancion.titulo}" class="gif-cancion" />`
    : "";

  const htmlLetras = cancion.letras
    .map(
      linea => `
      <div class="estrofa">
        <div class="linea-en">${linea.en}</div>
        <div class="linea-es">${linea.es}</div>
      </div>
    `
    )
    .join("");

  const htmlNotas =
    cancion.notas && cancion.notas.length > 0
      ? `
      <div class="notas-vocabulario">
        <h4>💡 Vocabulario y expresiones clave</h4>
        <ul>
          ${cancion.notas.map(n => `<li>${n}</li>`).join("")}
        </ul>
      </div>
    `
      : "";

  contenidoCancion.innerHTML = `
    <div class="estudio-top">
      <div class="estudio-header">
        <h2>${cancion.titulo}</h2>
        <p>${cancion.artista}</p>
        <span class="etiqueta ${claseCat}">${cancion.categoria}</span>
        <div>${htmlBotonReproducir}</div>
      </div>
      ${htmlGif}
    </div>
    <div class="cuerpo-letra">${htmlLetras}</div>
    ${htmlNotas}
  `;

  vistaLista.classList.add("oculto");
  vistaCancion.classList.remove("oculto");
  window.scrollTo(0, 0);
}

btnVolver.onclick = () => {
  vistaCancion.classList.add("oculto");
  vistaLista.classList.remove("oculto");
};

btnToggleTraduccion.onclick = () => {
  traduccionesOcultas = !traduccionesOcultas;
  const lineasEs = document.querySelectorAll(".linea-es");
  lineasEs.forEach(el => {
    el.classList.toggle("oculta", traduccionesOcultas);
  });
  btnToggleTraduccion.textContent = traduccionesOcultas
    ? "👁️ Mostrar traducciones"
    : "👁️ Ocultar traducciones";
};

buscador.addEventListener("input", e => {
  textoBusqueda = e.target.value;
  renderizarLista();
});

renderizarCategorias();
renderizarLista();
