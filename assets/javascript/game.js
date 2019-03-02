var wins = 0;
var loss = 0;
var random_Num;
var scoreDisplay = 0;

//  wrapped entire number generator in function to make new randomNum and crystal values 
//  when called in later conditionals
function resetGame(){
    var images = [
        "assets/images/blueCrystal.png",
        "assets/images/greenCrystal.jpg",
        "assets/images/orangeCrystal.jpg",
        "assets/images/redCrystal.jpg",
    
    ];
    
    scoreDisplay = 0;

    // Generate random Num to try and match
    random_Num = [Math.floor(Math.random() * 90) + 30];
    
    $("#crystalsEmpty").empty();


    $("#randomNum").html(random_Num);

    // create 4 crystals inside of crystalsEmpty div ..
    for (var i=0; i < 4; i++){

        // every crystal needs to generate a randomNum ..
        var random = [Math.floor(Math.random() * 12) + 1];

        var crystals = $("<div>");
            crystals.attr({
                "class": "crystals",
                "data-random": random,
            });
            crystals.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover",
                "max-width":"100%",
            })
        $("#crystalsEmpty").append(crystals);
    }
}

resetGame();

$(document).on("click", ".crystals", function() {

    var num = parseInt($(this).attr("data-random"));

    scoreDisplay += num;
    
    // when clicking crystal, add to scoreDisplay ..
    $("#scoreDisplayBox").html(scoreDisplay);

    // when scoreDisplay === randomNum increment wins, otherwise increment losses
    if(scoreDisplay == random_Num){
        
        wins++;

        $("#wins").html("Wins: " + wins);

        resetGame();
    }
    else if(scoreDisplay > random_Num){
        
        loss++;

        $("#losses").html("Losses: " + loss);

        resetGame();
    }
});






