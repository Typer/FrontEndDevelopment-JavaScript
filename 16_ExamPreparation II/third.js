let continents = {
    "Africa": {
        "name": "Africa"
    },
    "Antarctica": {
        "name": "Antarctica"
    },
    "Asia": {
        "countries": {
            "China": {
                "area": 9596961,
                "capital": "Beijing",
                "name": "China",
                "officialCurrency": "Renminbi(CNY)",
                "officialLanguage": "Chinese",
                "politicalStatus": "Republic",
                "population": 1403500365,
                "president": "Xi Jinping"
            },
            "India": {
                "area": 3287263,
                "capital": "New Delhi",
                "name": "India",
                "officialCurrency": "Indian rupee(INR)",
                "officialLanguage": "Hindi",
                "politicalStatus": "Republic",
                "population": 1324171354,
                "president": "Ram Nath Kovind"
            },
            "Japan": {
                "area": 377972,
                "capital": "Tokyo",
                "monarch": "Akihito",
                "name": "Japan",
                "officialCurrency": "Yen(JPY)",
                "officialLanguage": "Japanese",
                "politicalStatus": "Monarchy",
                "population": 126672000
            },
            "Kazakhstan": {
                "area": 2724900,
                "capital": "Astana",
                "name": "Kazakhstan",
                "officialCurrency": "Tenge(KZT)",
                "officialLanguage": "Kazakh",
                "politicalStatus": "Republic",
                "population": 18000000,
                "president": "Nursultan Nazarbayev"
            },
            "Russia": {
                "area": 17075200,
                "capital": "Moscow",
                "name": "Russia",
                "officialCurrency": "Russian ruble(RUB)",
                "officialLanguage": "Russian",
                "politicalStatus": "Republic",
                "population": 144463451,
                "president": "Vladimir Putin"
            }
        },
        "name": "Asia"
    },
    "Atlantida": {
        "name": "Atlantida"
    },
    "Australia": {
        "countries": {
            "Australia": {
                "area": 377972,
                "capital": "Tokyo",
                "monarch": "Akihito",
                "name": "Australia",
                "officialCurrency": "Yen(JPY)",
                "officialLanguage": "Japanese",
                "politicalStatus": "Monarchy",
                "population": 126672000
            }
        },
        "name": "Australia"
    },
    "Europe": {
        "countries": {
            "Bulgaria": {
                "area": 111000,
                "capital": "Sofia",
                "name": "Bulgaria",
                "officialCurrency": "LEV(BGN)",
                "officialLanguage": "Bulgarian",
                "politicalStatus": "Republic",
                "population": 7000000,
                "president": "Rumen Radev"
            },
            "France": {
                "area": 640000,
                "capital": "Paris",
                "name": "France",
                "officialCurrency": "CPF franc(XPF)",
                "officialLanguage": "French",
                "politicalStatus": "Republic",
                "population": 67158000,
                "president": "Emmanuel Macron"
            },
            "Germany": {
                "area": 357000,
                "capital": "Berlin",
                "name": "Germany",
                "officialCurrency": "Euro(EUR)",
                "officialLanguage": "German",
                "politicalStatus": "Republic",
                "population": 82300000,
                "president": "Frank Walter"
            },
            "Vatican": {
                "area": 0.44,
                "capital": "Vatican City",
                "monarch": "Francis",
                "name": "Vatican",
                "officialCurrency": "Euro(EUR)",
                "officialLanguage": "Italian",
                "politicalStatus": "Monarchy",
                "population": 1000
            }
        },
        "name": "Europe"
    },
    "North America": {
        "countries": {
            "Canada": {
                "area": 9984670,
                "capital": "Ottawa",
                "monarch": "Elizabeth II",
                "name": "Canada",
                "officialCurrency": "Canadian dollar(CAD)",
                "officialLanguage": "English",
                "politicalStatus": "Monarchy",
                "population": 35151728
            },
            "Cuba": {
                "area": 11239224,
                "capital": "Havana",
                "name": "Cuba",
                "officialCurrency": "Peso(CUP)",
                "officialLanguage": "Spanish",
                "politicalStatus": "Republic",
                "population": 109884,
                "president": "Raul Castro"
            },
            "Mexico": {
                "area": 1972550,
                "capital": "Mexico City",
                "name": "Mexico",
                "officialCurrency": "Peso(MXN)",
                "officialLanguage": "Spanish",
                "politicalStatus": "Republic",
                "population": 119530753,
                "president": "Enrique Pena Nieto"
            },
            "United States": {
                "area": 3796742,
                "capital": "Washington DC",
                "name": "United States",
                "officialCurrency": "United States Dollar(USD)",
                "officialLanguage": "English",
                "politicalStatus": "Republic",
                "population": 325365189,
                "president": "Donald Trump"
            }
        },
        "name": "North America"
    },
    "Papadopoulos": {
        "countries": {
            "Carcera": {
                "area": 50000,
                "capital": "Dun",
                "name": "Carcera",
                "officialCurrency": "Cidian(CI)",
                "officialLanguage": "Dunian",
                "politicalStatus": "Republic",
                "population": 10000,
                "president": "Gosho"
            },
            "Orthidoxia": {
                "area": 200000,
                "capital": "Balea",
                "monarch": "Pesho",
                "name": "Orthidoxia",
                "officialCurrency": "BOD(XES)",
                "officialLanguage": "Body",
                "politicalStatus": "Monarchy",
                "population": 1000000
            },
            "Vangalia": {
                "area": 5000000,
                "capital": "Areal",
                "name": "Vangalia",
                "officialCurrency": "Udix(DIX)",
                "officialLanguage": "Vangalian",
                "politicalStatus": "Republic",
                "population": 15050505,
                "president": "Gosho"
            }
        },
        "name": "Papadopoulos"
    },
    "South America": {
        "name": "South America"
    }
};

// Problem 3

function attachEvents(continents) {
    attachContinentEvents(continents);
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

function attachCountryEvents(continent){
    $('.dropdown-select').change(function (e) {
        e.preventDefault();

        let countryName = $(this).val();

        clearCountryData();

        renderSingleCountry(continent['countries'][countryName]);
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

    attachContinentEvents(continents);
}

function renderAllContinentCountries(continents,continentName){

    $('.continent-data')
        .append($('<h2 class="continent-title">' + continentName + '</h2>'))
        .append($('<h3 class="countries-title">Countries</h3>'))
        .append($('<div class="countries">'));

    let dropdownSelect = $('<select class="dropdown-select">')
        .append($('<option disabled selected value> -- select an option -- </option>'));

    let continentCountry = $('<div class="continent-country">');

    let imageDiv = $('<div class="continent-image"</div>')
        .append($('<img src="images/' + continentName.toLowerCase() + '.png">'));

    for(let key in continents[continentName]['countries']){

        let countries = continents[continentName]['countries'][key];
        console.log(countries);

        dropdownSelect
            .append($('<option value="' + countries['name'] + '">' + countries['name'] + '</option>'));
    }

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

// Problem 4

// function getContinents(){
//     let requestURL = 'https://continental-drift.firebaseio.com/continents.json';
//     $.ajax({
//             url:requestURL,
//         success:renderAllContinents
//         });
// }

renderAllContinents(continents);
attachEvents(continents);
// getContinents();