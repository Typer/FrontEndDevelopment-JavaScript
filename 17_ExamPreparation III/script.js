let locationP01 = { 
    name: 'Izgrev', 
    longitude: '95.243', 
    latitude: '94.231', 
    pokemons: { 
        0: { 
            name: 'Pikachu', 
            power: 2000, 
            evolvedFrom: 'none', 
            evolvesTo: 'Raichu' 
        }, 
        1: { 
            name: 'Wartortle', 
            power: 500, 
            evolvedFrom: 'Squirtle', 
            evolvesTo: 'Blastoise' 
        }, 
        2: { 
            name: 'CherryBerry', 
            power: 9999, 
            evolvedFrom: 'Cherry', 
            evolvesTo: 'Berry' 
        } 
    } 
};
let locationP02 = { 
    name: 'Dianabad', 
    longitude: '95.242', 
    latitude: '94.123', 
    pokemons: { 
        0: { 
            name: 'Pikachu', 
            power: 2000, 
            evolvedFrom: 'none', 
            evolvesTo: 'Raichu' 
        }, 
        1: { 
            name: 'Bulbasaur', 
            power: 1000, 
            evolvedFrom: 'Something', 
            evolvesTo: 'Something else' 
        } 
    } 
};

// Problem 1

function renderData(location){

    console.log('Location: ' + location['name']);
    console.log('Longitude: ' + location['longitude'] + ' ' + 'Latitude: ' + location['latitude']);

    if(location['pokemons']){
        let pokemons = location['pokemons'];

        for(let key in pokemons){
            let pokemon = pokemons[key];
                console.log('###Name: ' + pokemon['name']);
                console.log('###Power: ' + pokemon['power'] + 'pp');
                console.log('###Evolved From: ' + pokemon['evolvedFrom']);
                console.log('###Evolves To: ' + pokemon['evolvesTo']);
        }
    }else{
        console.log('Error');
    }
}

// Problem 2

function renderDataInHTML(location){

    $('body').prepend($('<div class="container">'));
    $('.container').append($('<div class="result">'));
    $('.result')
        .append($('<div class="location">'))
        .append($('<div class="pokemons">'));

    let pokemons = location['pokemons'];

    renderLocation(location);
    renderPokemons(pokemons);

}

function renderLocation(location){

    let longtitude = location['longitude'];
    let latitude = location['latitude'];

    console.log(longtitude);

    $('.location')
        .append($('<h1 class ="location-name">Location: ' + location['name'] + '</h1>'))
        .append($('<div class ="location-coordinates">'));

    $('.location-coordinates')
        .append($('<div class ="location-longitude">Longitude: ' + longtitude + '</div>'))
        .append($('<div class ="location-latitude">Latitude: ' + latitude + '</div>'));
}

function renderPokemons(pokemons){

    for(let key in pokemons){

        let pokemon = pokemons[key];
        let pokemonDiv = $('<div class="pokemon">')
            .append($('<div class ="pokemon-title">' + pokemon['name'] + '</div>'))
            .append($('<div class ="pokemon-stats">'));

        renderEachPokemon(pokemon);

        console.log(pokemon);

        $('.pokemons').append(pokemonDiv);
    }
}

function renderEachPokemon(pokemon){
    $('.pokemon-stats')
        .append($('<div class="pokemon-name">Name: ' + pokemon['name'] + '</div>'))
        .append($('<div class="pokemon-power">Power: ' + pokemon['power'] + 'pp</div>'))
        .append($('<div class="pokemon-evolved-from">Evolved From: ' + pokemon['evolvedFrom'] + '</div>'))
        .append($('<div class="pokemon-evolves-to">Evolves To: ' + pokemon['evolvesTo'] + '</div>'));
}

// Problem 3

function attachEvents() { 
    $('.location-form button').on('click', function(e){
        e.preventDefault();

        let inputValue = $('.location-input').val();
        // console.log(inputValue);

        if(inputValue.length > 0){
            $('.result').append($('<div class="result-element">' + inputValue + '</div>'));
            $('.location-input').val('');
        }
    });
}

// Problem 4

function rednderingObtainingData(){
    attachEventPokemon();
}

function attachEventPokemon(){
    $('.location-form button').on('click', function(e) {
        e.preventDefault();

        let inputValue = $('.location-input').val();
        if(inputValue.length>0){

           $.ajax({
              url:'https://pokemoncodex.firebaseio.com/locations/' + inputValue + '.json',
               success:printData,
               error: displayError
           });

            $('.location-input').val('');
            // console.log(inputValue);
        }
    });
}

function printData(location){

    if(location === null){
        displayError();
    }else{
        $('.result').empty();
        $('.result').show();

        $('.result')
            .append($('<div class="location">'))
            .append($('<div class="pokemons">'));

        let pokemons = location['pokemons'];

        renderLocation(location);
        renderPokemonsP04(pokemons);
        simpleAccordion();
    }

}

function displayError(){
    $('.result').empty();
     $('.result').append('<div class="error">Error loading location.</div>');
}

function renderPokemonsP04(pokemons){
    for(let key in pokemons){

        let pokemon = pokemons[key];
        let pokemonDiv = $('<div class="pokemon">')
            .append($('<div class ="pokemon-title">' + pokemon['name'] + '</div>'))
            .append($('<div class ="pokemon-stats">'));

        renderEachPokemon(pokemon);

        // console.log(pokemon);

        $('.pokemons').append(pokemonDiv);
    }
}

function simpleAccordion(){
    $('.pokemon-title').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('.pokemon-stats').removeClass('show');
            $this.parent().parent().find('.pokemon-stats').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
}




// renderData(locationP01);
// renderDataInHTML(locationP02);
// attachEvents();
rednderingObtainingData();