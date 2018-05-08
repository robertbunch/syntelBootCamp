$(document).ready(()=>{
	console.log("Sanity Check");
	$('#weather-form').submit((event)=>{
		// By default, the browser will try and submit this form.
		// We dont wnat that.
		// It's JS job to handle the submission.		
		event.preventDefault();
		// console.log("FORM SUBMITTED!!");
		// get the city the user searched for fro the input box
		const userCity = $('#city').val()
		// const userCity = document.getElmenetById('city').value
		// console.log(userCity);
		const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&appid=${apiKey}`
		// console.log(weatherUrl);
		// getJSON:
		// 1. WHERE (url)
		// 2. Callback to run when done
		$.getJSON(weatherUrl,(weatherData)=>{
			console.log(weatherData);
			const currTemp = weatherData.main.temp;
			const icon = weatherData.weather[0].icon;
			const high = weatherData.main.temp_max;
			const weatherHTML = `
				<div>
					<img src="http://openweathermap.org/img/w/${icon}.png" />
					<div class="col-sm-3">The temp in ${weatherData.name} is ${currTemp}</div>
					<div class="col-sm-3">The high is forecasted at ${high}</div>
				</div>
			`
			$('#weather-info').html(weatherHTML);
		})
	});
})