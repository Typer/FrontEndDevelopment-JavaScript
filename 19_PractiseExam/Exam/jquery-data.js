let punshes = {
    0: {
        name: "Punsh - The American Pie",
        type: "Strong",
        contents: "Some Apple Pie, Whiskey, Vodka, Orange Juice and some other things...",
        description: "By original recipe from the American Pie franchise, this punsh includes everything you would want in a college/university party."
    },
    1: {
        name: "Brendy Punsh",
        type: "Medium",
        contents: "Brendy, Apple Juice, Ice, Avocado Juice, some other strange fruits...",
        description: "The casual Brendy Punsh, quite expensive, nothing interesting here..."
    },
    2: {
        name: "Just Punsh it",
        type: "Sweet",
        contents: "Very Little Vodka, Orange Juice, Apple Juice, Banana Juice, Ice.",
        description: "A very comfortable taste for the lovers of weakly alchoholic drinks. The Just Pinsh It punsh is a sweet multi-vitamol drink, which cannot drunk you."
    }
};

function renderAllPunshesInHTML(punshes) {
    $('.navbar')
        .append('<div class="navbar-items">');

    for(let key in punshes){
        let punsh = punshes[key];
        let punshDiv = $('<div class="navbar-item">')
            .append($('<h4>' + punsh['name'] + '</h4>'));

        $('.navbar-items').append(punshDiv);
    }
}

function renderSinglePunshInHTML(punshes, punshName) {

    for(let key in punshes){
        let punsh = punshes[key];

        if(punsh['name'] === punshName){

            let contentHeader = $('<div class="content-header">')
                .append($('<div class="content-heading">' + punsh['name'] + '</div>'));
            let punshData = $('<div class="punsh-data">');
            let punshType = $('<div class="punsh-type">')
                .append($('<label>Type: </label>'))
                .append($('<h6>' + punsh['type'] + '</h6>'));
            let punshContents = $('<div class="punsh-contents">')
                .append($('<label>Contents: </label>'))
                .append($('<p>' + punsh['contents'] + '</p>'));
            let punshDescription = $('<div class="punsh-description">')
                .append($('<label>Contents: </label>'))
                .append($('<p>' + punsh['description'] + '</p>'));

            $('.content').css('cursor', "pointer");

            punshData
                .append(punshType)
                .append(punshContents)
                .append(punshDescription);

            $('.content')
                .append(contentHeader)
                .append(punshData);
        }
    }
}

// renderAllPunshesInHTML(punshes);
renderSinglePunshInHTML(punshes, "Punsh - The American Pie");
