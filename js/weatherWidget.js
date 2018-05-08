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
		const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${apiKey}`
	});
})