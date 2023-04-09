var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchEl = document.querySelector("#search-form")
var curForecastEl = document.querySelector('#current-forecast')
var fiveDayFore = document.querySelector('#five-day-fore')


function getParams() {
    var searchParamsArr = document.location.search.split("&");
    console.log(searchParamsArr)
    var search = searchParamsArr[0].split("=").pop();
    console.log(search)
    searchApi(search);
}

function searchApi(search) {
var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=search&limit=5&appid=8769b4d0770daebeae124bc25c6c4a1e'
if (search) {
    weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + search + '&limit=5&appid=8769b4d0770daebeae124bc25c6c4a1e'
}
fetch(weatherURL)
.then(function(res){
    if (!res.ok) {
        alert("Not a city!")
        throw res.json();
    }
    return res.json();
})
.then(function(data){
    resultTextEl.textContent = data.city.name;
    showResults(data);
})
}

function showResults(results) {

    var celNum = []
    var celcius = []
    for (let i = 0; i < results.list.length; i++) {
        var num = results.list[i].main.temp;
        celNum.push(num)
    }
    for (let i = 0; i < celNum.length; i++) {
        const element = Math.round(celNum[i]-273.15);
        celcius.push(element)
    }

    let cityForecast = document.createElement('div');
    curForecastEl.append(cityForecast);

    let cityName = document.createElement('h1');
    cityName.textContent = results.city.name + ', ' + results.city.country;
    let date = document.createElement('h2');
    date.textContent = results.list[0].dt_txt;

    let cardContent = document.createElement('p');
    cardContent.innerHTML += 'Temp: ' + celcius[0] + '℃' +'</br>' + '</br>';
    cardContent.innerHTML += 'Wind Speed: ' + results.list[0].wind.speed + '</br>' + '</br>';
    cardContent.innerHTML += 'Humidity: ' + results.list[0].main.humidity;

    cityForecast.append(cityName, date, cardContent);
    curForecastEl.append(cityForecast);

    let foreCard = document.createElement('div');
    foreCard.classList.add('foreCard')

    let title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = 'The Next Five Days:';
    foreCard.append(title)
    // 
    // 
    let monday = document.createElement('div');
    monday.classList.add('days')

    let monDate = document.createElement('h3');
    monDate.textContent = results.list[7].dt_txt;
    let mcardContent = document.createElement('p');
    mcardContent.innerHTML += 'Temp: ' + celcius[7] + '℃' + '</br>' + '</br>';
    mcardContent.innerHTML += 'Wind: ' + results.list[7].wind.speed + '</br>' + '</br>';
    mcardContent.innerHTML += 'Humidity: ' + results.list[7].main.humidity;
    monday.append(monDate, mcardContent);
    // 
    // 
    let tuesday = document.createElement('div');
    tuesday.classList.add('days')
    
    let tueDate = document.createElement('h3');
    tueDate.textContent = results.list[15].dt_txt;
    let tcardContent = document.createElement('p');
    tcardContent.innerHTML += 'Temp: ' + celcius[15] + '℃' + '</br>' + '</br>';
    tcardContent.innerHTML += 'Wind: ' + results.list[15].wind.speed + '</br>' + '</br>';
    tcardContent.innerHTML += 'Humidity: ' + results.list[15].main.humidity;
    tuesday.append(tueDate, tcardContent);
    // 
    // 
    let wednesday = document.createElement('div');
    wednesday.classList.add('days')

    let wedDate = document.createElement('h3');
    wedDate.textContent = results.list[23].dt_txt;
    let wcardContent = document.createElement('p');
    wcardContent.innerHTML += 'Temp: ' + celcius[23] + '℃' + '</br>' + '</br>';
    wcardContent.innerHTML += 'Wind: ' + results.list[23].wind.speed + '</br>' + '</br>';
    wcardContent.innerHTML += 'Humidity: ' + results.list[23].main.humidity;
    wednesday.append(wedDate, wcardContent);
    // 
    // 
    let thursday = document.createElement('div');
    thursday.classList.add('days')

    let thuDate = document.createElement('h3');
    thuDate.textContent = results.list[31].dt_txt;
    let thcardContent = document.createElement('p');
    thcardContent.innerHTML += 'Temp: ' + celcius[31] + '℃' + '</br>' + '</br>';
    thcardContent.innerHTML += 'Wind: ' + results.list[31].wind.speed + '</br>' + '</br>';
    thcardContent.innerHTML += 'Humidity: ' + results.list[31].main.humidity;
    thursday.append(thuDate, thcardContent);
    // 
    // 
    let friday = document.createElement('div');
    friday.classList.add('days')

    let friDate = document.createElement('h3');
    friDate.textContent = results.list[39].dt_txt;
    let fcardContent = document.createElement('p');
    fcardContent.innerHTML += 'Temp: ' + celcius[39] + '℃' + '</br>' + '</br>';
    fcardContent.innerHTML += 'Wind: ' + results.list[39].wind.speed + '</br>' + '</br>';
    fcardContent.innerHTML += 'Humidity: ' + results.list[39].main.humidity;
    friday.append(friDate, fcardContent);


    foreCard.append(monday, tuesday, wednesday, thursday, friday)
    fiveDayFore.append(foreCard);
}

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector("#search-input").value;

    var queryString = './search-results.html?q=' + searchInputVal;

    location.assign(queryString);
}

searchEl.addEventListener("submit", handleSearchFormSubmit)

getParams()