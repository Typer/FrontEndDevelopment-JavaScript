let continents = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};

//Problem 1

function renderAllContinents(continent) {
    for(let key in continents){
        let continent = continents[key];
        console.log(continent['name']);
    }
}
function renderSingleContinent(continent) {
    console.log(continent['name']);
    console.log('Countries:');

    for(let key in continent['countries']){
        let country = continent['countries'][key];
        console.log('$$$' + country['name']);
    }
}
function renderSingleCountry(country) {
    console.log(country['name']);
    console.log('Capital:' + ' ' + country['capital']);
    console.log('Official Language:'+ ' ' + country['officialLanguage']);
    console.log('Population:'+ ' ' + country['population']);
    console.log('Area:'+ ' ' + country['area'] + 'km2');
    console.log('Political Status:'+ ' ' + country['politicalStatus']);

    if(country['politicalStatus'] === 'Monarchy'){
        console.log('Monarch:'+ ' ' + country['monarch']);
    }else if(country['politicalStatus'] === 'Republic'){
        console.log('President:'+ ' ' + country['president']);
    }
    console.log('Official Currency:'+ ' ' + country['officialCurrency']);
}

//Problem 2

function renderAllContinents(continents){
    for(let key in continents){
        let continent = continents[key];

        let continentDiv = $('<div class="continent">')
            .append($('<h5 class="continent-title">' + continent['name'] + '</h5>'));

        let continentName = continent['name'];
        let continentCountries = continent['countries'];

        renderAllContinentCountries(continentName, continentCountries);

        $('.continents').append(continentDiv);

    }
}

function renderAllContinentCountries(continent, countries){

    $('.continent-data')
        .append($('<h2 class="continent-title">' + continent + '</h2>'))
        .append($('<h3 class="countries-title">Countries</h3>'))
        .append($('<div class="countries">'));

    let dropdownSelect = $('<select class="dropdown-select">')
        .append($('<option disabled selected value> -- select an option -- </option>'));

    let continentCountry = $('<div class="continent-country">');

    for(let key in countries){

        let country = countries[key];

        dropdownSelect
            .append($('<option value="' + country['name'] + '">' + country['name'] + '</option>'));

        renderSingleCountry(country, continentCountry);
    }

    let imageDiv = $('<div class="continent-image"</div>')
        .append($('<img src="images/europe.png">'));

    $('.continent-data .countries')
        .append(dropdownSelect);
    $('.continent-data')
        .append(imageDiv);
    $('content')
        .append(continentCountry)
}

function renderSingleCountry(country, continentCountry){
    $('.continent-country')
        .append($('<div class="country-title">'))
        .append($('<div class="country-data">'));
    $('.country-title')
        .append($('<h2>' + country['name'] + '</h2>'));
    $('.country-data')
        .append($('<div class="country-capital"><strong>Capital:</strong> <div>' + country['capital'] + '</div></div>'))
        .append($('<div class="country-official-language"><strong>Official Language:</strong> <div>' + country['officialLanguage'] + '</div></div>'))
        .append($('<div class="country-population"><strong>Population:</strong> <div>' + country['population'] + '</div></div>'))
        .append($('<div class="country-area"><strong>Area:</strong> <div>' + country['area'] + 'km2</div></div>'))
        .append($('<div class="country-political-status"><strong>Political Status:</strong> <div>' + country['politicalStatus'] + '</div></div>'))
        .append(
            country['politicalStatus'] === 'Republic'
                ? $('<div class="country-president"><strong>President:</strong> <div>' + country['president'] + '</div></div>')
                : $('<div class="country-monarch"><strong>Monarch:</strong> <div>' + country['monarch'] + '</div></div>'))
        .append($('<div class="country-official-currency"><strong>Official Currency:</strong> <div>' + country['officialCurrency'] + '</div></div>'));


}


// Problem 3

function attachEvents(continents) {
    attachContinentEvents(continents);
}

function attachCountryEvents(continent){
    $('.dropdown-select').change(function (e) {
        e.preventDefault();

        let countryName = $(this).val();

        clearCountryData();

        renderSingleCountry(continent['countries'][countryName]);
    });
}

function attachContinentEvents(continents){
    $('.continent').click(function (e) {
        e.preventDefault();

        if($(this).hasClass('shown')){
            $(this).removeClass('shown');

            hidenData();
            clearData();
        }else{
            clearData();

            $(this).parent().find('.shown').removeClass('shown');
            $(this).addClass('shown');

            let continentName = $(this).find('.continent-title').text();

            renderAllContinentCountries(continents, continentName);

            attachCountryEvents(continents[continentName]);

            showData();
        }
    });
}

function showData(){
    $('.continent-data').show();
    $('.continent-country').show();
}

function hidenData(){
    $('.continent-data').hide();
    $('.continent-country').hide();
}

function clearData(){
    $('.continent-data').empty();
    $('.continent-country').empty();
}

function clearCountryData(){
    $('.continent-country').empty();
}

function renderAllContinents(continents){
    for(let key in continents){
        let continent = continents[key];

        let continentDiv = $('<div class="continent">')
            .append($('<h5 class="continent-title">' + continent['name'] + '</h5>'));

        let continentName = continent['name'];
        let continentCountries = continent['countries'];


        $('.continents').append(continentDiv);

    }
}

function renderAllContinentCountries(continents,continentName){

    $('.continent-data')
        .append($('<h2 class="continent-title">' + continentName + '</h2>'))
        .append($('<h3 class="countries-title">Countries</h3>'))
        .append($('<div class="countries">'));

    let dropdownSelect = $('<select class="dropdown-select">')
        .append($('<option disabled selected value> -- select an option -- </option>'));

    let continentCountry = $('<div class="continent-country">');

    for(let key in continents[continentName]['countries']){

        let countries = continents[continentName]['countries'][key];
        console.log(countries);

        dropdownSelect
            .append($('<option value="' + countries['name'] + '">' + countries['name'] + '</option>'));
    }

    let imageDiv = $('<div class="continent-image"</div>')
        .append($('<img src="images/europe.png">'));

    $('.continent-data .countries')
        .append(dropdownSelect);
    $('.continent-data')
        .append(imageDiv);
    $('content')
        .append(continentCountry)
}

function renderSingleCountry(country){
    console.log(country);

    $('.continent-country')
        .append($('<div class="country-title">'))
        .append($('<div class="country-data">'));
    $('.country-title')
        .append($('<h2>' + country['name'] + '</h2>'));
    $('.country-data')
        .append($('<div class="country-capital"><strong>Capital:</strong> <div>' + country['capital'] + '</div></div>'))
        .append($('<div class="country-official-language"><strong>Official Language:</strong> <div>' + country['officialLanguage'] + '</div></div>'))
        .append($('<div class="country-population"><strong>Population:</strong> <div>' + country['population'] + '</div></div>'))
        .append($('<div class="country-area"><strong>Area:</strong> <div>' + country['area'] + 'km2</div></div>'))
        .append($('<div class="country-political-status"><strong>Political Status:</strong> <div>' + country['politicalStatus'] + '</div></div>'))
        .append(
            country['politicalStatus'] === 'Republic'
                ? $('<div class="country-president"><strong>President:</strong> <div>' + country['president'] + '</div></div>')
                : $('<div class="country-monarch"><strong>Monarch:</strong> <div>' + country['monarch'] + '</div></div>'))
        .append($('<div class="country-official-currency"><strong>Official Currency:</strong> <div>' + country['officialCurrency'] + '</div></div>'));


}



renderAllContinents(continents);
attachEvents(continents);

// renderAllContinents(continents);
// renderSingleContinent(continents['Europe']);
// renderSingleCountry(continents['Europe']['countries']['Bulgaria']);
// renderAllContinents(continents);
// attachEvents(continents);