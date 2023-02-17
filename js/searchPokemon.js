// Root API call
let root = `https://pokeapi.co/api/v2/`;

// Function for searching Pokemon
let showPokemon = async () => {  

    try {
    // Name/Id of searching
    let namePokemon = document.body.getElementsByClassName("formPokemon")[0].value;
    let namePokemonNormalized = namePokemon.toLowerCase();
    // Builded url
    let url = root + "pokemon/" + namePokemonNormalized;
    // Call
    let call = await fetch(url);
    let response = await call.json();

    /* - Injection DOM - */ 

    // Id
    let idPokemon = response.id;
    document.body.getElementsByClassName("id")[0].innerText = `#${response.id}`;

    // Base stats
    document.body.getElementsByClassName("hp")[0].innerText = `HP: ${response.stats[0].base_stat}`; 
    document.body.getElementsByClassName("attack")[0].innerText = `Attack: ${response.stats[1].base_stat}`; 
    document.body.getElementsByClassName("defense")[0].innerText = `Defense: ${response.stats[2].base_stat}`; 
    document.body.getElementsByClassName("spAttack")[0].innerText = `Sp. Attack: ${response.stats[3].base_stat}`; 
    document.body.getElementsByClassName("spDefense")[0].innerText = `Sp. Defense: ${response.stats[4].base_stat}`; 
    document.body.getElementsByClassName("speed")[0].innerText = `Speed: ${response.stats[5].base_stat}`; 

    // Name
    // Clear Beppe
    document.body.getElementsByClassName("starBeppe")[0].style.display = "none";
    if (idPokemon == 9) {
        document.body.getElementsByClassName("name")[0].innerText = response.name;
        document.body.getElementsByClassName("starBeppe")[0].style.display = "block";
    } else {
        document.body.getElementsByClassName("name")[0].innerText = response.name;
    }

    // Print all types
    // Clear types
    document.body.getElementsByClassName("type2")[0].innerText = ``;
    let typeText = document.body.getElementsByClassName("type2")[0];
    const types = response.types;   
    types.map(
        (item) => {
            typeText.append(` ${item.type.name} `);
        }
    );
    
    // Height
    document.body.getElementsByClassName("height")[0].innerText = `Height: ${response.height}m`;
    // Weight
    document.body.getElementsByClassName("weight")[0].innerText = `Weight: ${response.weight}Kg`;

    // Sprites
    if (response.sprites.other.dream_world.front_default) {
        // SVG
        document.body.getElementsByClassName("img")[0].src = response.sprites.other.dream_world.front_default;
    } else {
        // PNG
        document.body.getElementsByClassName("img")[0].src = response.sprites.other["official-artwork"].front_default;
    }

    // Add Stats for Desktop
    document.body.getElementsByClassName("cardDesktop")[0].style.display = `block`;
    document.body.getElementsByClassName("spriteFront")[0].src = `${response.sprites.front_default}`;
    document.body.getElementsByClassName("spriteBack")[0].src = `${response.sprites.back_default}`;

    // Search in Jp
    let url2 = `https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json`;
    let call2 = await fetch(url2);
    let response2 = await call2.json();

    let jpName = response2[idPokemon].name.japanese;
    document.body.getElementsByClassName("jpText")[0].innerText = jpName;  
        
    // Change color Background
    let typeColor = types[0].type.name;

    if (typeColor == `normal`) {
        document.body.style.backgroundColor = '#A8A77A';
    } else if (typeColor == `fire`) {
        document.body.style.backgroundColor = '#EE8130';
    } else if (typeColor == `water`) {
        document.body.style.backgroundColor = '#6390F0';
    } else if (typeColor == `electric`) {
        document.body.style.backgroundColor = '#F7D02C';
    } else if (typeColor == `grass`) {
        document.body.style.backgroundColor = '#7AC74C';
    } else if (typeColor == `ice`) {
        document.body.style.backgroundColor = '#96D9D6';
    } else if (typeColor == `fighting`) {
        document.body.style.backgroundColor = '#C22E28';
    } else if (typeColor == `poison`) {
        document.body.style.backgroundColor = '#A33EA1';
    } else if (typeColor == `ground`) {
        document.body.style.backgroundColor = '#E2BF65';
    } else if (typeColor == `flying`) {
        document.body.style.backgroundColor = '#A98FF3';
    } else if (typeColor == `psychic`) {
        document.body.style.backgroundColor = '#F95587';
    } else if (typeColor == `bug`) {
        document.body.style.backgroundColor = '#A6B91A';
    } else if (typeColor == `rock`) {
        document.body.style.backgroundColor = '#B6A136';
    } else if (typeColor == `ghost`) {
        document.body.style.backgroundColor = '#735797';
    } else if (typeColor == `dragon`) {
        document.body.style.backgroundColor = '#6F35FC';
    } else if (typeColor == `dark`) {
        document.body.style.backgroundColor = '#705746';
    } else if (typeColor == `steel`) {
        document.body.style.backgroundColor = '#B7B7CE';
    } else if (typeColor == `fairy`) {
        document.body.style.backgroundColor = '#D685AD';
    } else {
        document.body.style.backgroundColor = 'white';
    }

    // Add class animation
    let card = document.body.getElementsByClassName("card")[0];

    card.classList.remove("cardAnimation");
    setTimeout(() => {
        card.classList.add("cardAnimation");
    }, 10) 

    } catch (error) {
        document.body.style.backgroundColor = 'white';
        document.body.getElementsByClassName("img")[0].src = `../images/qMark.png`;
        document.body.getElementsByClassName("height")[0].innerText = `Height: XX`;
        document.body.getElementsByClassName("weight")[0].innerText = `Weight: XX`;
        document.body.getElementsByClassName("name")[0].innerText = `Name: XX`;
        document.body.getElementsByClassName("type")[0].innerText = `Type:`;

        document.body.getElementsByClassName("spriteFront")[0].src = `../images/qMark.png`;
        document.body.getElementsByClassName("spriteBack")[0].src = `../images/qMark.png`;
        document.body.getElementsByClassName("hp")[0].innerText = `HP: XX`; 
        document.body.getElementsByClassName("attack")[0].innerText = `Attack: XX`; 
        document.body.getElementsByClassName("defense")[0].innerText = `Defense: XX`; 
        document.body.getElementsByClassName("spAttack")[0].innerText = `Sp. Attack: XX`; 
        document.body.getElementsByClassName("spDefense")[0].innerText = `Sp. Defense: XX`; 
        document.body.getElementsByClassName("speed")[0].innerText = `Speed: XX`;           
    }
};


// AddEventListener --- searchPokemon / showJp
let buttonSearch = document.body.getElementsByClassName("buttonSearch")[0];
buttonSearch.addEventListener("click", function() {
    showPokemon();
});

// Enter Button
document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter' || event.key == 13 || event.key == 'Enter' || event.keyCode == 13) {
        event.preventDefault();
        showPokemon();
        event.target.blur()
    }
});
