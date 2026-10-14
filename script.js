//from google mapss
const lat = 53.3498;
const long = -6.2603;

// free api url for current weather
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`;

// fetching data fromthe api server?
fetch(url)
    .then(function(res) {
        // convert to json format>so that >js can read
        return res.json();
    })
    .then(function(data) {
        // extract temp and weathercode 
        const tempVal = data.current_weather.temperature;
        const code = data.current_weather.weathercode;

        // update dom textContent
        document.getElementById("temp").textContent = tempVal + "°C";

        // check rain/cloudy
        let text = "Clear Sky";
        if (code > 3) {
            text = "Cloudy / Rain";
        }

        // put text into condition
        document.getElementById("condition").textContent = text;
    })
    .catch(function(err) {
       //if failled//
        document.getElementById("temp").textContent = "Error loading";
        console.log("something went wrong opps:", err);
    });