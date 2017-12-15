
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
            }
        }
    }
};



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

renderAllContinents(continents);