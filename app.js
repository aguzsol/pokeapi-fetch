// document.querySelector('#get-joke').addEventListener('click', function(){
//     traerDatos();
// });


// function traerDatos(){
//     const url = 'https://api.chucknorris.io/jokes/random'

//     fetch(url).
//     then(response => response.json()).
//     then(data =>displayJoke.innerHTML = data.value).
//     catch(error => console.log(error))
// }

let url_original = 'https://pokeapi.co/api/v2/pokemon/'
let url_shiny = ""

//recuperamos el select box y aplicamos el evento para este tipo de selector: el 'change'. y nombramos la funcion que se debe llamar cada vez
document.querySelector('.form-select').addEventListener('change', getNewPokemon);
//recuperamos el boton del shiny para usarlo despues en la funcion changeoshiny
document.querySelector('.btn').addEventListener('click', changeToShiny);

function getNewPokemon(event) {
    //propiedad del evento(objeto del tipo evento-change) que nos da el nombre del Pokemon. Value es el nombre tal como vemos en el html (value="pikachu")
    console.log(event.target.value)
    
    //concatenamos el nombre del pokemon al final de la url. url original es el url que nunca debemos sobreescribir, por eso tiene un nombre diferente.
    let nombrePokemon = event.target.value
    let url = url_original + nombrePokemon

    //Hacer una llamada con la Fetch API al endpoint para obtener los pokemons por nombre de pokemon. 
    fetch(url).
         //cuando tenga la respuesta ejectua la funcion response.json para que nos devuelva la info en formato json
         then(response => response.json()).
         //cuando se haya acabado y tenga los datos transformados en objeto llama a la funcion updatePokemon. // cuando se ha completado el Fetch, este debe hacer una llamada a esta función pasando por parámetro los datos recibidos.
         then(data => updatePokemon(data))
        
    }

    function updatePokemon(data) {
        console.log(data)

        // La función debe actualizar los elementos del DOM: imagen del pokemon, nombre, y guardar en algun lugar la ruta a la foto "shiny" del pokemon
        
        //quitamos esta clase d-none que ocultaba una foto con el remove
        document.querySelector('.card-img-top').classList.remove('d-none') 
        //sustituimos la src de la foto por la propiedad del objeto 'data', concretamente es: sprites y front_default
        document.querySelector('.card-img-top').src = data.sprites.front_default 
        // cambiamos el nombre del Pokemon con textContent 
        document.querySelector('.card-title').textContent = data.name;
        //actualizamos la foto del shiny que conseguimos a traves de la funcion changeToShiny
        url_shiny = data.sprites.front_shiny
    }

    function changeToShiny() {
        // esta función debe ser llamada al hacer clic en el botón "Change to Shiny"; de manera que actualice la imagen a la versión "shiny" del Pokemon
        document.querySelector('.card-img-top').src = url_shiny
    }