
//Problem 1
function renderData(location){
    let name = location['name'];
    let longitude = location['longitude'];
    let latitude = location['latitude'];

    console.log('Location: ' + name);
    console.log('Longitude: ' + longitude + ' Latitude ' + latitude);

    let pokemons = location['pokemons'];

    if(!pokemons == false){
        console.log("Pokemons:");

        for(let key in pokemons){
            let pokemon = pokemons[key];
            let pName = pokemon['name'];
            let pPower = pokemon['power'];
            let pEvolved = pokemon['evolvedFrom'];
            let pEvolves = pokemon['evolvesTo'];

            console.log("###Name: " + pName);
            console.log("###Power: " + pPower + 'pp');
            console.log("###Evolved From: " + pEvolved);
            console.log("###Evolves To: " + pEvolves);
        }
    }
}

//Problem 2
function renderDataInHTML(location) {
    let area = location;
    let containerDiv = $('<div>');
    let resultDiv = $('<div>');
    let locationDiv = $('<div>');
    let pokemonsDiv = $('<div>');
//Function locatopn
    renderLocation(locationDiv, area);
//Function pokemons
    renderPokemons(pokemonsDiv, location);

    containerDiv.addClass('container');
    resultDiv.addClass('result');
    locationDiv.addClass('location');
    pokemonsDiv.addClass('pokemons');

    $('body').append(containerDiv);
    $('.container').append(resultDiv);
    $('.result')
        .append(locationDiv)
        .append(pokemonsDiv);
}

function renderLocation(locationDiv, location) {
    let title = $('<h1 class="location-name">Location: ' + location['name'] + '</h1>');
    let coordinatesDiv = $('<div>');
    let locationLongtitude = $('<h2 class="location-longitude">Longitude: ' + location['longitude'] + '</h2>');
    let locationLatitude = $('<h2 class="location-latitude">Latitude: ' + location['latitude'] + '</h2>');

    coordinatesDiv.addClass('location-coordinates');

    locationDiv.append(title);
    locationDiv.append(coordinatesDiv);
    coordinatesDiv
        .append(locationLongtitude)
        .append(locationLatitude);
}

function renderPokemons(pokemondiv, location){
    let pokemons = location['pokemons'];

    if(!pokemons == false){
        for(let key in pokemons){
            let pokemon = pokemons[key];
            let pokemonClass = $('<div>');
            let pokemonTitle = $('<div class="pokemon-title">' + pokemon['name'] + '</div>');
            let pokemonStatus = $('<div>');

            pokemonClass.addClass('pokemon');
            pokemonStatus.addClass('pokemon-stats');

            pokemondiv.append(pokemonClass);
            pokemonClass.append(pokemonTitle);
            pokemonClass.append(pokemonStatus);
            pokemonStatus
                .append($('<div class="pokemon-name">Name: ' + pokemon['name'] + '</div>'))
                .append($('<div class="pokemon-power">Power: ' + pokemon['power'] + '</div>'))
                .append($('<div class="pokemon-evolved-from">Evolved From: ' + pokemon['evolvedFrom'] + '</div>'))
                .append($('<div class="pokemon-evolves-to">Evolves To: ' + pokemon['evolvesTo'] + '</div>'));

        }
    }
}

//Problem 3
function attachEvents() { 
    $('.location-form>button').click(function (e) {
        e.preventDefault();

        let inputValue = $('.location-input').val();

        if(inputValue.length > 0){
            $('.result').append($('<div class="result-element">' + inputValue + '</div>'));
        }

        $('.location-input').val('');
    });
}

//Problem 4

function renderFroAttachEvent(){
    $('.location-form>button').click(function (e) {
        e.preventDefault();
        let inputValue = $('.location-input').val();

        if(inputValue.length > 0){
            obtainData(inputValue);
        }

        $('.location-input').val('');

        console.log(obtainData(inputValue));
    });


}

function obtainData(inputValue){
    $
        .get('https://pokemoncodex.firebaseio.com/locations/' + inputValue + '.json')
        .then(renderLocationData) // <--- Always return some value
        .catch(function(error){console.log('Error')});
}

function renderLocationData(location){
    $('.result').empty();
    $('.result').show();

    let locationDiv = $('<div>');
    let pokemonsDiv = $('<div>');
//Function locatopn
    renderLocation(locationDiv, location);
//Function pokemons
    renderPokemons(pokemonsDiv, location);

    locationDiv.addClass('location');
    pokemonsDiv.addClass('pokemons');

    $('.result')
        .append(locationDiv)
        .append(pokemonsDiv);

    attachAccordeonEvents();
}

function attachAccordeonEvents(){
    $('.pokemon-title').click(function (e) {
        e.preventDefault();

        var $this = $(this);

        if($this.next().hasClass('show')){
            $this.next().removeClass('show');
            $this.next().slideUp(350);

        }else{
            $this.parent().parent().find('.pokemon-stats').removeClass('show');
            $this.parent().parent().find('.pokemon-stats').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle('show');
        }
    });
}

// renderData(local);
// renderDataInHTML(direction);
// attachEvents();
renderFroAttachEvent();
