function resetAll() {
    localStorage.clear();
}

$(document).ready(function() {
    resetAll();

// function calls
    initCategory();// build intial drop down list
    getCategories();// get categories from api

// point to selected option (category)
    $('#joke-categories').change( function() {
        var categories = $('#joke-categories option:selected');
        localStorage.setItem('callback', categories.text());
    });

// click on button, get jokes
    try {
        $('#make-laugh').click( function() {
            getJoke();
        })
    }
    catch(e) {
        alert('Oops, something went wrong, please try again');
    }
});

function initCategory() {
    // make category drop down list
    $('#joke-categories').html('<option><i>Select An Option</i></option>');
}

function getCategories() {
    $.ajax({
        type : 'GET',
        url : 'http://api.icndb.com/categories',
        data : {format : 'json'},
        dataType : 'jsonp',

        success: function(data) {
            $('#info-area').html('<h6>Categories successfully loaded.</h3>');

    // add data from api call
            for(var i=0;i<data.value.length;i++) {
                 $('#joke-categories').append(`<option value="${i}">${data.value[i]}</option>`);
            }
        },

        error: function(e) {
            $('#info-area').html('<h6>There was an error getting categories, this site may not work if you\'re using a vpn.</h3>');
            resetAll();
        }
    });
}

function getJoke() {
    var storage = localStorage.getItem('callback');

// modifies callback string (url) to limit joke categories
    if(storage == 'explicit' || storage == 'nerdy') {
        var builtString = `http://api.icndb.com/jokes/random?limitTo=[${storage}]`;
    }
    else builtString = 'http://api.icndb.com/jokes/random';

    $.ajax({
        type : 'GET',
        url : builtString,
        data : { format : 'json' },
        dataType : 'jsonp',

// set items in localStorage
        success : function(data) {
            localStorage.setItem('joke', data.value.joke);
            localStorage.setItem('callback', $('#joke-categories option:selected').text());
// go to next page
            window.location.href = './pages/quote';
        },
        error : function(e) {
            $('#info-area').html('<h6>There was an error getting categories, this site may not work if you\'re using a vpn..</h3>');
            resetAll();
        }
    });
}
