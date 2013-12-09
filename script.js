$( document ).ready(function() {

	$( "#menu" ).click(function() {
		console.log("click")
		$("#main-nav" ).toggleClass( "open" );
	});

	$( "a" ).click(function(event) {
		event.preventDefault();
		window.location=$(this).attr("href");
		
		return;
	});
});