$("h1").css("color", "blue");

//adding event listeners

$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("button").click(function(){
    $("h1").css("color", "purple");
});

//keypress event

$("input").keypress(function(event){
    console.log(event.key);
});

//change h1 when key is pressed and replace value

$("document").keypress(function(event){
    $("h1").text(event.key)
});

//easier way to use event listeners

$("h1").on("mouseover",function(){
    $("h1").css("color", "green");
});

//animations

// hide/show

// $("button").on("click",function(){
//     $("h1").toggle();
// });

//fade

$("button").on("click",function(){
    $("h1").fadeOut(); //opposite is fadeIn, fadeToggle to toggle in between those
});

//slide

$("button").on("click",function(){
    $("h1").slideDown(); //opposite is slideUp, slideToggle to toggle in between those
});

//custom animations

$("button").on("click",function(){
    $("h1").animate({opacity:0.5});
});

