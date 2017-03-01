function start() {
	$('#q-1, #restart, #if-red, #if-blue, #if-big-red, #if-underdog-red, #if-underdog-blue, #if-other, #if-search-by-animal, #man-utd, #arse-liv, #bournemouth, #stoke-city, #southampton, #chelsea-man-city, #hull-city, #watford, #tottenham, #swansea, #west-ham-burnley, #if-lions, #if-wings, #if-mammals').hide();
}

start();

$('#start').on('click', function() {
	$('#start').hide();
	$('#restart').show();
	$('#q-1').fadeIn();
})

$('#red').on('click', function() {
	$('#blue, #other, #search-by-animal').fadeOut();
	$('#if-red').fadeIn();
})

$('#blue').on('click', function() {
	$('#red, #other, #search-by-animal').fadeOut();
	$('#if-blue').fadeIn();
})

$('#other').on('click', function() {
	$('#red, #blue, #search-by-animal').fadeOut();
	$('#if-other').fadeIn();
})

$('#search-by-animal').on('click', function() {
	$('#red, #blue, #other').fadeOut();
	$('#if-search-by-animal').fadeIn();
})

$('#big-red').on('click', function() {
	$('#underdog-red').fadeOut();
	$('#if-big-red').fadeIn();
})

$('#big-blue').on('click', function() {
	$('#underdog-blue').fadeOut();
	$('#chelsea-man-city').fadeIn();
})

$('#red-spend').on('click', function() {
	$('#red-sustain').fadeOut();
	$('#man-utd').fadeIn();
})

$('#red-sustain').on('click', function() {
	$('#red-spend').fadeOut();
	$('#arse-liv').fadeIn();
})

$('#underdog-red').on('click', function() {
	$('#big-red').fadeOut();
	$('#if-underdog-red').fadeIn();

})

$('#underdog-blue').on('click', function() {
	$('#big-blue').fadeOut();
	$('#if-underdog-blue').fadeIn();
})

$('#cherries').on('click', function() {
	$('#pottery, #black-white, .remove').fadeOut();
	$('#bournemouth').fadeIn();
})

$('#pottery').on('click', function() {
	$('#cherries, #black-white, .remove').fadeOut();
	$('#stoke-city').fadeIn();
})

$('#black-white').on('click', function() {
	$('#cherries, #pottery, .remove').fadeOut();
	$('#southampton').fadeIn();
})

$('#orange').on('click', function() {
	$('#yellow, #white, #claret').fadeOut();
	$('#hull-city').fadeIn();
})

$('#yellow').on('click', function() {
	$('#orange, #white, #claret').fadeOut();
	$('#watford').fadeIn();
})

$('#white').on('click', function() {
	$('#orange, #yellow, #claret').fadeOut();
	$('#tottenham, #swansea').fadeIn();
})

$('#claret').on('click', function() {
	$('#orange, #yellow, #white').fadeOut();
	$('#west-ham-burnley').fadeIn();
})

$('#lions').on('click', function() {
	$('#wings, #mammals').fadeOut();
	$('#if-lions').fadeIn();
})

$('#wings').on('click', function() {
	$('#lions, #mammals').fadeOut();
	$('#if-wings').fadeIn();
})

$('#mammals').on('click', function() {
	$('#lions, #wings').fadeOut();
	$('#if-mammals').fadeIn();
})


$('.btn').on('click', function() {
	window.scrollBy(0, 200);
})




 






