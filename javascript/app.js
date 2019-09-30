
var random_result;
var win = 0;
var lose = 0;
var previous = 0;


var resetAndStart = function () {

    $(".crystals").empty();

    
    var images = [
        'images/crystal1.jpg',
        'images/crystal2.jpg',
        'images/crystal3.jpg',
        'images/crystal4.jpeg'
    ];

    random_result = Math.floor(Math.random() * 101 ) + 19;

    $("#result").html('Your Random Number: ' + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;
    
        

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random,
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });
        
        $(".crystals").append(crystal);
    
    }

    $("#previous").html("Total Score: " + previous);

    $("#win").html("Wins: " + win);

    $("#lose").html("Losses: " + lose);
}


resetAndStart();


$(document).on('click', ".crystal", function(){
    

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > random_result){
        lose++;

        $("#lose").html("Losses: " + lose);

        previous = 0;

        resetAndStart();
    }
    else if(previous === random_result){
        win++;

        $("#win").html("Wins: " + win);

        previous = 0;

        resetAndStart();
    }

});





//Pseudocoding

//a game with 4 crystals and random result
//every crystal needs a random number between 1-12
//that number should be generated every time we win or lose
//when clicking any crystal, it should be adding with the previous result
//until it equals the random result
//If it is greater than the random result we add to loss counter
//If it is equal, then we add to win counter



