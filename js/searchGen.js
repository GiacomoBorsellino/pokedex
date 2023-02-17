// Define range of indexes
let indexStart;
let indexEnd;

// Print a Generation #1 of Pokemon
let callGen1 = () => {
    indexStart = 1;
    indexEnd = 151;
    document.body.getElementsByClassName("controlCleaner")[0].innerHTML = "";
    stampGen();
};

// Print a Generation #2 of Pokemon
let callGen2 = () => {
    indexStart = 152;
    indexEnd = 251;
    document.body.getElementsByClassName("controlCleaner")[0].innerHTML = "";
    stampGen();
};

// Print a Generation #3 of Pokemon
let callGen3 = () => {
    indexStart = 252;
    indexEnd = 386;
    document.body.getElementsByClassName("controlCleaner")[0].innerHTML = "";
    stampGen();
};

// Print a Generation #4 of Pokemon
let callGen4 = () => {
    indexStart = 387;
    indexEnd = 493;
    document.body.getElementsByClassName("controlCleaner")[0].innerHTML = "";
    stampGen();
};

// Print a Generation #5 of Pokemon
let callGen5 = () => {
    indexStart = 494;
    indexEnd = 649;
    document.body.getElementsByClassName("controlCleaner")[0].innerHTML = "";
    stampGen();
};

// Print a Generation #6 of Pokemon
let callGen6 = () => {
    indexStart = 650;
    indexEnd = 721;
    document.body.getElementsByClassName("controlCleaner")[0].innerHTML = "";
    stampGen();
};

// Print a Generation #7 of Pokemon
let callGen7 = () => {
    indexStart = 722;
    indexEnd = 809;
    document.body.getElementsByClassName("controlCleaner")[0].innerHTML = "";
    stampGen();
};

// Print a Generation #8 of Pokemon
let callGen8 = () => {
    indexStart = 810;
    indexEnd = 899;
    document.body.getElementsByClassName("controlCleaner")[0].innerHTML = "";
    stampGen();
};

// Printing
let stampGen = function() {
    try {
    for(let index = indexStart;index < indexEnd;index++) {
        let urlGen = `https://pokeapi.co/api/v2/pokemon/${index}`;
        let printGen = async () => {  
            // Call
            let call = await fetch(urlGen);
            let response = await call.json();

            // Clean page XXX

            // Injection Properties

            // Create Elements
            let divControlCleaner = document.body.getElementsByClassName("controlCleaner")[0];

            let divSuperContainer = document.createElement("div");
            let divSubContainer = document.createElement("div");
            let cardPokemonContainer = document.createElement("div");
            let cardPokemon = document.createElement("div");
            let img = document.createElement("img");
            let index = document.createElement("h4");
            let name = document.createElement("h2");
            let typeAbilities = document.createElement("div");
            let type = document.createElement("h3");
            let ability = document.createElement("h3");

            // Add Classes
            divSuperContainer.classList.add("superContainer");
            divSubContainer.classList.add("divSubContainer");
            cardPokemonContainer.classList.add("cardPokemonContainer");
            cardPokemon.classList.add("cardPokemon");
            img.classList.add("imgPokemon");
            index.classList.add("index");
            name.classList.add("name");
            typeAbilities.classList.add("typeAbilities");
            type.classList.add("type");
            ability.classList.add("ability");

            // Appending
            divControlCleaner.append(divSuperContainer);
            divSuperContainer.append(divSubContainer);
            divSubContainer.append(cardPokemonContainer);
            cardPokemonContainer.append(cardPokemon);

            cardPokemon.append(img);
            cardPokemon.append(index);
            cardPokemon.append(name);
            cardPokemon.append(typeAbilities);

            typeAbilities.append(type);
            typeAbilities.append(ability);

            // Insert values fetched
            index.append(`#${response.id}`);
            name.append(response.name);
            type.append(response.types[0].type.name);
            ability.append(response.abilities[0].ability.name);

            if (response.sprites.other.dream_world.front_default) {
                img.src = response.sprites.other.dream_world.front_default;
            } else {
                img.src = response.sprites.other["official-artwork"].front_default;
            }
        };   
        printGen(); 
    } 
    } catch(error) {
        console.log(error);
        document.body.getElementsByClassName("tabErrorSuperContainer")[0].style.display = "block";
    }
     
}
  









