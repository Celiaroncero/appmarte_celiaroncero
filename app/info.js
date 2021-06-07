window.onload = function(){
    
    fetch('https://mars-weather-rems.netlify.app/rems.json')
      .then((inapp) => inapp.json()) // the .json() method parses the JSON response into a JS object literal
      .then((inf) => {
        let info = document.getElementById("appinformacion");
        info.innerHTML = `
        <div>${inf.weather_report.sol_desc[0].en}</div>
        <div>${inf.weather_report.terrestrial_date_desc[0].en}</div>
        <div>${inf.weather_report.magnitudes[0].temp_desc[0].en}</div>
        <div>${inf.weather_report.magnitudes[0].pressure_desc[0].en}</div>
        <div>${inf.weather_report.magnitudes[0].local_uv_irradiance_index_desc[0].en}</div>
        `;     
    });  
}