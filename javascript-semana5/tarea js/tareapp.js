// creo la constante para tomar la Url
const urlAdvengers = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&"
// creo la constante para atrapar el container del html
const container = document.querySelector(".container");


// Declaro la funcion readAdvengers
async function readAdvengers() 
{
    // creo la const con fetch ingreso a la url
    const respuesta = await fetch(urlAdvengers);
    // creo la const con await respuesta.json() para tomar la data interna de la url 
    const data = await respuesta.json();
    // creo la const con data.Search tomo los arrays de la url
    const advengers = data.Search;
    // console.log(advengers);

    // Limpio el container para iniciar
    container.innerHTML="";

    // con forEach voy a recorrer la const advengers=data.Search;
    advengers.forEach
    ((advenger) => 
        {
             container.innerHTML +=
             `
             <div class="card">
                <h2>${advenger.Title}</h2>
                <h4>${advenger.Year}</h4>
                <img src="${advenger.Poster}" alt="">
                <h2>${advenger.Type}</h2>
             </div>
             `;
        }
    );
}

// Activo la funcion readAdvengers
readAdvengers ();