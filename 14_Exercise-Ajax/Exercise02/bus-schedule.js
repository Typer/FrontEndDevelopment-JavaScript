let busId = 'depot';

function depart(){
    $.ajax({
        url:'https://judgetests.firebaseio.com/schedule/' + busId + '.json',
        success: function(data){
            console.log(data);
            busId = data.next;
            console.log(busId);
            $('#depart').attr('disabled', true);
            $('#arrive').attr('disabled', false);
            $('span.info').text(data.name);
        }
    });
}

function arrive(){
    $.ajax({
        url:'https://judgetests.firebaseio.com/schedule/' + busId + '.json',
        success: function(data){
            console.log(data);
            busId = data.next;
            console.log(busId);
            $('#arrive').attr('disabled', true);
            $('#depart').attr('disabled', false);
            $('span.info').text(data.name);
        }
    });
}