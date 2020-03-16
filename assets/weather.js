function getWeather() {
    let city = document.getElementById("inputCity").value;
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=019700cd96eeb0fe38a84fff3686e27f";

    fetch(apiUrl)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      displayWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  function displayWeather( d ) {
    let celcius = Math.round(parseFloat(d.main.temp)-273.15);
    let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    let description = d.weather[0].description; 
    let icon = d.weather[0].icon;
    let windSpeedContent = "Windspeed: ";

    document.getElementById('description').innerHTML =  d.weather[0].main;
    document.getElementById('celcius').innerHTML = celcius + '&deg;C';
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;F';
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('windSpeed').innerHTML = windSpeedContent + d.wind.speed +" m/s";
   
    if( icon == '01d' ) {
      document.body.className = 'clearDay';
    } else if ( icon == '01n' ) {
      document.body.className = 'clearNight';
    } else if( icon == '02d' ) {
      document.body.className = 'fewCloudsDay';
    } else if( icon == '02n' ) {
      document.body.className = 'fewCloudsNight';
    } else if( icon == '03d' ) {
      document.body.className = 'scatteredCloudsDay';
    } else if( icon == '03n' ) {
      document.body.className = 'scatteredCloudsNight';
    } else if ( icon == '04d' ) {
      document.body.className = 'brokenCloudsDay';
    } else if ( icon == '04n' ) {
      document.body.className = 'brokenCloudsNight';
    } else if( icon == '09d' ) {
      document.body.className = 'rainShowerDay';
    } else if( icon == '09n' ) {
      document.body.className = 'rainShowerNight';
    } else if( icon == '10d' ) {
      document.body.className = 'rainDay';
    } else if( icon == '10n' ) {
      document.body.className = 'rainNight';
    } else if( icon == '11d' ) {
      document.body.className = 'thunderstormDay';
    } else if( icon == '11n' ) {
      document.body.className = 'thunderstormNight';
    } else if ( icon == '13d' ) {
      document.body.className = 'snowDay';
    } else if ( icon == '13n' ) {
      document.body.className = 'snowNight';
    } else if( icon == '50d' ) {
      document.body.className = 'atmosphere';
    } else if( icon == '50n' ) {
      document.body.className = 'atmosphere';
    } else {
      document.body.className = 'clearDay';
    }
  }