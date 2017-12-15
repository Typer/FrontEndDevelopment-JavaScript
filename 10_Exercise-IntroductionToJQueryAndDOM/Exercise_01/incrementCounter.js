
function increment(selector) {

    // --------------------------------------------------------------------------------------------------------
    let container = $(selector);
    let fragment = $('<div>');
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    // --------------------------------------------------------------------------------------------------------

    //Textarea format
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    //Button formation
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    //Events
    $(incrementBtn).on("click", function() {
        textArea.val(+textArea.val()+1)
    });
    $(addBtn).on("click", function() {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);

        //Remove elements from list
        $('li').click(function (event) {
            $(this).fadeOut();
            event.preventDefault();
            event.stopPropagation();
        });
    });

    // --------------------------------------------------------------------------------------------------------

    //Add elements to the DOM
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);


}

increment('#wrapper');