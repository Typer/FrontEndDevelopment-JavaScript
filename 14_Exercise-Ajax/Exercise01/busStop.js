
function getInfo(){

    $.ajax({

        beforeSend:doBeforesend(),
        url: "https://judgetests.firebaseio.com/businfo/" + $('#stopId').val() + ".json",
        success: loadSuccess,
        error: displayError
    });

    function doBeforesend(){
        $('#stopName').empty();
        $('#buses').empty();
        $('#stopName').text('');
        $('#buses').text('');
    }

    function loadSuccess(data){
        let station = data.name;
        $('#stopName').append(station);

        console.log(data.buses.constructor.name);

        for(let i in data.buses){
            console.log(i);
            let time = data.buses[i];
            let li = $('<li>').text('Bus ' + i + ' arrive in ' + time + ' minutes');
            $('#buses').append(li);
        }
    }

    function displayError(){
        $('#stopName').empty();
        $('#buses').empty();
        $('#stopName').text('Error');
    }
}