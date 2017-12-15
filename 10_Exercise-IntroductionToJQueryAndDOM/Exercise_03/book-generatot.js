let bookID = 1;

function createBook(selector, title, autor, isbn){
    // --------------------------------------------------------------------------------------------------------

    let container = $(selector);
    let titleBook = $('<p>' + title + '</p>');
    let autorBook = $('<p>' + autor + '</p>');
    let number = $('<p>' + isbn + '</p>');

    let bookWrapper = $("<div>");

    let fragment = document.createDocumentFragment();

    let selectBtn = $("<button><a>Select</a></button>");
    let deselectBtn = $("<button>Deselect</button>");

    // --------------------------------------------------------------------------------------------------------

    bookWrapper.attr('id', 'book' + bookID);
    titleBook.addClass('title');
    autorBook.addClass('autor');
    number.addClass('isbn');

    // --------------------------------------------------------------------------------------------------------

    // Events
    $(selectBtn).on("click", function() {
       $(bookWrapper).css('border', '2px solid blue')
    });

    $(deselectBtn).on("click", function() {
        $(bookWrapper).css('border', 'none')
    });

    titleBook.appendTo(bookWrapper);
    autorBook.appendTo(bookWrapper);
    number.appendTo(bookWrapper);
    selectBtn.appendTo(bookWrapper);
    deselectBtn.appendTo(bookWrapper);
    bookWrapper.appendTo(fragment);

    container.append(fragment);

    bookID++;


}




