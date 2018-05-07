$(document).ready(function(){

	// The base URL for all API calls
	const apiBaseUrl = 'http://api.themoviedb.org/3';
	// The base URL image
	const imageBaseUrl = 'http://image.tmdb.org/t/p/';

// getJSON args:
// 1.url to get the JSON
// 2.callback to run when you've got it
	const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5`;
	$.getJSON(nowPlayingUrl,
		function(movieData){
			// console.log(movieData);
			let nowPlayingHTML = ``;
			movieData.results.forEach(function(movie){
				console.log(movie)
				const poster = `${imageBaseUrl}w300/${movie.poster_path}`
				nowPlayingHTML += `
				<div class="col-sm-3">
					<img src="${poster}" />
				</div>
				`
			})
			$('#movie-grid').html(nowPlayingHTML);
		})
});