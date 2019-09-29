
var random_result;
var win = 0;
var lose = 0;
var previous = 0;

//Setters
//Getters


var resetAndStart = function () {

    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 101 ) + 19;

    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;
    
        

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

            crystal.html(random);
        
        $(".crystals").append(crystal);
    
    }
}

resetAndStart();

$(".crystal").on('click', function(){
    

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    console.log(previous);

    if(previous > random_result){
        lose--;

        $("#lose").html(win);

        resetAndStart();
    }
    else if(previous === random_result){
        win++;

        $("#win").html(win);

        resetAndStart();
    }

});





//Pseudocoding

//a game with 4 crystals and random result
//every crystal needs a random number between 1-12
//that number should be generated every time we win or lose
//to those 4 crystals
//when clicking any crystal, it should be adding with the previous result
//until it equals the to the random result
//If it is greater than the random result we decrement a lose counter
//If it is equal, then we increment a win counter



