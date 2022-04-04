$(document).ready( function() {
    
// print joke from local storage
    $('#joke-area').html(printJoke);

// print category info
    $('#info-area').html('<h6>' + printInfo() + '</h6>');

// back button
    try {
        $('#back-button').click( function() {
            window.location.href = './../index.html';
        });
    }
    catch(e) {
        alert('Oops, something went wrong, please try again');
    }
});

// prints joke to 'joke-area'
function printJoke() {
    return localStorage.getItem('joke');
}

function getInfo() {
    return localStorage.getItem('callback');
}

// prints category descriptions
function printInfo() {
    var category;
    if(localStorage.getItem('callback') == 'Select An Option') {
        category = "Any Selection.";
    }
    else if(localStorage.getItem('callback') == 'explicit') {
        category = "Explicit selection.";
    }
    else if(localStorage.getItem('callback') == 'nerdy') {
        category = "Nerdy selection.";
    }
    else category = "Error.";

    return category;
}