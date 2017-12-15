function attachPunshesEvents(punshes) {

    $('.navbar-item').click(function (e) {
        e.preventDefault();

        let punshName = $(this).find('h4').text();
        hideItem();
        clearItems();
        renderSinglePunshInHTML(punshes, punshName);
    });
}

function hideItem(){
    $('.navbar-items').hide();
}

function clearItems(){
    $('.navbar-items').empty();
    $('.navbar-items').remove();
}

function attachBackEvents(punshes) {

    $('.content').click(function (e) {
        e.preventDefault();

        hidePunshData
        clearPunshData();
        renderAllPunshesInHTML(punshes);
    });
}

function hidePunshData(){
    $('.content').hide();
    $('.content-header').hide();
    $('.punsh-data').hide();
}

function clearPunshData(){
    $('.content').empty();
    $('.content-header').removeClass();
    $('.punsh-data').remove();
}

function renderAllPunshesInHTML(punshes) {

    $('.navbar')
        .append('<div class="navbar-items">');

    for(let key in punshes){
        let punsh = punshes[key];
        let punshDiv = $('<div class="navbar-item">')
            .append($('<h4>' + punsh['name'] + '</h4>'));

        $('.navbar-items').append(punshDiv);
    }

    attachPunshesEvents(punshes);
}

function renderSinglePunshInHTML(punshes, punshName) {

    for(let key in punshes){
        let punsh = punshes[key];

        if(punsh['name'] === punshName){
            $('.content').css('cursor', "pointer");

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

function getPunshes(){
    let requestURL = 'https://punsh-master.firebaseio.com/data/punshes.json';
    $.ajax({
        url:requestURL,
        success:renderAllPunshesInHTML
    });
}

function getBack(){
    let requestURL = 'https://punsh-master.firebaseio.com/data/punshes.json';
    $.ajax({
        url:requestURL,
        success:attachBackEvents
    });
}

getPunshes();
getBack();
