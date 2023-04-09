var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchEl = document.querySelector("#search-form")
var currentForecastEl = document.querySelector('#current-forecast')
var fiveDayFore = document.querySelector('#five-day-fore');
var weatherSection = document.querySelector('#the-weather');


function getParams() {
    var searchParamsArr = document.location.search.split("&");
    console.log(searchParamsArr)
    var search = searchParamsArr[0].split("=").pop();
    console.log(search)
    searchApi(search);
}

function searchApi(search) {
var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=search&limit=5&appid=8769b4d0770daebeae124bc25c6c4a1e&units=imperial'
if (search) {
    weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + search + '&limit=5&appid=8769b4d0770daebeae124bc25c6c4a1e&units=imperial'
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
    console.log(results)
    var theDate = [];
    var icon = [];

    for (let i = 0; i < results.list.length; i++) {
        var num = results.list[i].dt_txt;
        var dateNum = dayjs(num).format("dddd MMM D[, ]YYYY h:mm a");
        theDate.push(dateNum);
        var iconID = results.list[i].weather[0].icon
        icon.push(iconID);
    }

    let currentWeatherIcon = document.createElement('img');
    currentWeatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + icon[0] + '@2x.png');
    currentWeatherIcon.setAttribute('style', 'width: 80px;')

    let cityForecast = document.createElement('div');
    currentForecastEl.append(cityForecast);

    let cityName = document.createElement('h1');
    cityName.textContent = results.city.name + ', ' + results.city.country;
    let date = document.createElement('h2');
    date.textContent = theDate[0];
    let cardContent = document.createElement('p');
    cardContent.innerHTML += 'Temp: ' + results.list[0].main.temp + '℉' +'</br>' + '</br>';
    cardContent.innerHTML += 'Wind Speed: ' + results.list[0].wind.speed + ' MPH' + '</br>' + '</br>';
    cardContent.innerHTML += 'Humidity: ' + results.list[0].main.humidity + '%';

    cityForecast.append(cityName, currentWeatherIcon, date, cardContent);
    currentForecastEl.append(cityForecast);


    // Everything beyond this point is 5 day
    let nextFiveDays = document.createElement('div');
    nextFiveDays.classList.add('bruh')
    let title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = 'The Next Five Days:';
    nextFiveDays.append(title);
    // 
    // 
    let monWeatherIcon = document.createElement('img');
    monWeatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + icon[7] + '@2x.png');
    monWeatherIcon.setAttribute('style', 'width: 30px;')

    let monday = document.createElement('div');
    monday.classList.add('days')

    let monDate = document.createElement('h3');
    monDate.textContent = theDate[7];
    let mcardContent = document.createElement('p');
    mcardContent.innerHTML += 'Temp: ' + results.list[7].main.temp + '℉' + '</br>' + '</br>';
    mcardContent.innerHTML += 'Wind: ' + results.list[7].wind.speed + ' MPH' + '</br>' + '</br>';
    mcardContent.innerHTML += 'Humidity: ' + results.list[7].main.humidity + '%';
    monday.append(monDate, monWeatherIcon, mcardContent);
    // 
    // 
    let tueWeatherIcon = document.createElement('img');
    tueWeatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + icon[15] + '@2x.png');
    tueWeatherIcon.setAttribute('style', 'width: 30px;')

    let tuesday = document.createElement('div');
    tuesday.classList.add('days')
    
    let tueDate = document.createElement('h3');
    tueDate.textContent = theDate[15];
    let tcardContent = document.createElement('p');
    tcardContent.innerHTML += 'Temp: ' + results.list[15].main.temp + '℉' + '</br>' + '</br>';
    tcardContent.innerHTML += 'Wind: ' + results.list[15].wind.speed + ' MPH' + '</br>' + '</br>';
    tcardContent.innerHTML += 'Humidity: ' + results.list[15].main.humidity + '%';
    tuesday.append(tueDate, tueWeatherIcon, tcardContent);
    // 
    // 
    let wedWeatherIcon = document.createElement('img');
    wedWeatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + icon[23] + '@2x.png');
    wedWeatherIcon.setAttribute('style', 'width: 30px;')

    let wednesday = document.createElement('div');
    wednesday.classList.add('days')

    let wedDate = document.createElement('h3');
    wedDate.textContent = theDate[23];
    let wcardContent = document.createElement('p');
    wcardContent.innerHTML += 'Temp: ' + results.list[23].main.temp + '℉' + '</br>' + '</br>';
    wcardContent.innerHTML += 'Wind: ' + results.list[23].wind.speed + ' MPH' + '</br>' + '</br>';
    wcardContent.innerHTML += 'Humidity: ' + results.list[23].main.humidity + '%';
    wednesday.append(wedDate, wedWeatherIcon, wcardContent);
    // 
    // 
    let thuWeatherIcon = document.createElement('img');
    thuWeatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + icon[31] + '@2x.png');
    thuWeatherIcon.setAttribute('style', 'width: 30px;')

    let thursday = document.createElement('div');
    thursday.classList.add('days')

    let thuDate = document.createElement('h3');
    thuDate.textContent = theDate[31];
    let thcardContent = document.createElement('p');
    thcardContent.innerHTML += 'Temp: ' + results.list[31].main.temp + '℉' + '</br>' + '</br>';
    thcardContent.innerHTML += 'Wind: ' + results.list[31].wind.speed + ' MPH' + '</br>' + '</br>';
    thcardContent.innerHTML += 'Humidity: ' + results.list[31].main.humidity + '%';
    thursday.append(thuDate, thuWeatherIcon, thcardContent);
    // 
    // 
    let friWeatherIcon = document.createElement('img');
    friWeatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + icon[39] + '@2x.png');
    friWeatherIcon.setAttribute('style', 'width: 30px;')

    let friday = document.createElement('div');
    friday.classList.add('days')

    let friDate = document.createElement('h3');
    friDate.textContent = theDate[39];
    let fcardContent = document.createElement('p');
    fcardContent.innerHTML += 'Temp: ' + results.list[39].main.temp + '℉' + '</br>' + '</br>';
    fcardContent.innerHTML += 'Wind: ' + results.list[39].wind.speed + ' MPH' + '</br>' + '</br>';
    fcardContent.innerHTML += 'Humidity: ' + results.list[39].main.humidity + '%';
    friday.append(friDate, friWeatherIcon, fcardContent);


    fiveDayFore.append(nextFiveDays, monday, tuesday, wednesday, thursday, friday);
}

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector("#search-input").value;

    var queryString = './search-results.html?q=' + searchInputVal;

    location.assign(queryString);
}

searchEl.addEventListener("submit", handleSearchFormSubmit)

getParams()