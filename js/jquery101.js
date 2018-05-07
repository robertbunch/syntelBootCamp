// console.log("Sanity Check")
// console.log(jQuery);
// console.log($)

// Targeting, follows CSS rules. 
// # for id
// . for class
// just the tag name for a tag
// $('')

// Native JS...
// var header = document.getElementById('header');
// console.dir(header);
// var header = $('#header');
// document.getElementById = $('#')

// var colsm12 = document.getElemntsByClassName('col-sm-12');
// var colsm12 = $('.col-sm-12');
// document.getElemntsByClassName = $('.');

// var colsm12 = $('body');
// document.getElemntsByTagName = $('')

// WAIT UNTIL THE DOM IS READY...
// First... target the document
// var dom = $(document);
// console.dir(dom);
// console.dir(document);

// Call the ready method. 
// It is an event listener. 
// It will fire when ALL the HTML is loaded.
// It takes 1 arg... the function to run when the event happens

// The difference between window.load and document.ready, is that window.onload
// will wait until images/videos/etc. are done loading too.
// .on takes 2 args, 1. the event, 2. the functino to run
// $(window).on('load', function() {
//   console.log("Window finished loading.")
// });

$(document).ready(function(){
	// code to run when teh DOM is finished loading...
	// var header = $('#header')
	// console.log(header);
	// console.log("DOM is loaded...")
	// document.getElementById('thing').addEventListener('click',function(){
	// 	console.log("User clicked on the green button")
	// })
	// $('#thing').click(function(){
	// 	console.log("User click on the green button")
	// })
	// Add a click listener to all buttons

	// var squares = document.getELementsbyClassName('square');

	$('button').click(function(){
		// console.log(this)
		console.log($(this).attr('daffyDuck'));
		var whatToDo = $(this).attr('toDo');
		console.log(whatToDo);
		if(whatToDo == 'hide'){
			$('#thing').hide();
			// document.getElementById('thing').style.display = 'none'
		}else if(whatToDo == 'show'){
			$('#thing').show();
		}else if(whatToDo == 'toggle'){
			$('#thing').toggle();
		}else if(whatToDo == 'html'){
			// if we don't pass anything to html() it will return current innerHTML.
			$('#thing').html('<strong>Someone changed my HTML</strong>');
		}else if(whatToDo == 'text'){
			// if we don't pass anything to html() it will return current innerHTML.
			$('#thing').text('<strong>Someone changed my text</strong>');
		}else if(whatToDo == 'css'){
			// css method takes a JS object...
			// key is a string, for any css property
			// value is teh value you watn to apply
			$('#thing').css({
				'background-color': 'orange',
				'border-radius':'50%',
				'font-size':'100px'
			})
		}else if(whatToDo == 'addClass'){
			// if we don't pass anything to html() it will return current innerHTML.
			$('#thing').addClass('btn-danger');
		}else if(whatToDo == 'removeClass'){
			// if we don't pass anything to html() it will return current innerHTML.
			$('#thing').removeClass('btn-danger');
		}else if(whatToDo == 'toggleClass'){
			// if we don't pass anything to html() it will return current innerHTML.
			$('#thing').toggleClass('btn-danger');
		}else if(whatToDo == 'prepend'){
			// prepend is innerHTML = ... + .innerHTML
			// var header = document.getElementById('header');
			// header.innerHTML = "New STuff " + header.innerHTML
			$('#thing').prepend('THis is some prepended text.');
		}else if(whatToDo == 'append'){
			// prepend is teh same as innerHTML += ...
			// var header = document.getElementById('header');
			// header.innerHTML += "New STuff"
			$('#thing').append('THis is some appended text.');
		}else if(whatToDo == 'toggleFade'){
			$('#thing').fadeToggle(1500);
		}else if(whatToDo == 'slideToggle'){
			$('#thing').slideToggle(1500);
		}else if(whatToDo == 'animate'){
			// Animate takes 2 args:
			// 1. an object of css properties to animate too
			// 2. how long you want it to animate over (in mili)
			$('#thing').animate({
				'width': "40%",
				'opacity': .3,
				'font-size': "100px",
				'border-width': "10px"
			},1500)
		}else if(whatToDo == 'goodbye'){
			$('#thing').animate({
				'margin-left': "-3000px",
			},1500)
		}else if(whatToDo == 'hello'){
			$('#thing').animate({
				'margin-left': "0px",
			},1500)
		}else if(whatToDo == 'loop'){
			$('button').each(function(){
				console.log(this)
			})
		}
	});
	// $('div').click(function(){
	// 	console.log(this)
	// })

});


// console.log("JS is running...");




