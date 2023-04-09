let mainEl = document.querySelector("#main")
let searchEl = document.querySelector("#search-form")

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector("#search-input").value;

    var queryString = './search-results.html?q=' + searchInputVal;

    location.assign(queryString);
}

searchEl.addEventListener("submit", handleSearchFormSubmit)

let button = document.querySelector('#secret')
let space = document.querySelector('#cat')

button.addEventListener('click', function() {

    let bruh = document.createElement('img');
    bruh.setAttribute('src', './assets/images/cat.jpeg');    
    space.append(bruh);
})


