function dynamicForm(selector){
// Main div container
    let container = $(selector);

// Div Add Content
    let divAdd = $('<div>');
    let inputLabel = $ ('<label>Enter text: </label>');
    let inputFeald = $('<input>');
    let addBtn = $('<a>Add</a>');

// Div Result Content
    let divResult = $('<div>');
    let results = $('<ul>');

    divAdd.addClass('add-controls');
    inputFeald.val(' ');
    addBtn.addClass('button');
    addBtn.css('cursor','pointer');

    divResult.addClass('result-controls');
    results.addClass('items-list');


    // Events

    $(addBtn).on("click", function() {

        let list = $('<li>');
        let resultat = $(`<strong>${inputFeald.val()}</strong>`);
        let btn = $('<a>X</a>');

        list.addClass('list-item');
        btn.addClass('button');
        btn.css('cursor','pointer');

        btn.appendTo(list);
        resultat.appendTo(list);
        list.css('list-style','none');
        list.appendTo(results);

        //Remove elements from list
        $('li>a').click(function (event) {
            $(this).parent().fadeOut();
            event.preventDefault();
            event.stopPropagation();
        });
    });

    inputFeald.appendTo(inputLabel);
    inputLabel.appendTo(divAdd);
    addBtn.appendTo(divAdd);
    container.append(divAdd);

    results.appendTo(divResult);
    container.append(divResult);

}

dynamicForm('#content');