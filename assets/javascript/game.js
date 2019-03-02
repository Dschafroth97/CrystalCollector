var wins = 0;
var loss = 0;
var random_Num;
var scoreDisplay = 0;

// Generate random Num to try and match
random_Num = [Math.floor(Math.random() * 90) + 30];

function resetGame(){

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
            crystals.html(random);
        $("#crystalsEmpty").append(crystals);
    }
}

resetGame();

$(".crystals").on("click", function(){


    var num = parseInt($(this).attr("data-random"));

    scoreDisplay += num;

    if(scoreDisplay > random_Num){
        
        loss++
        $("#losses").html("Losses: " + loss);
    }
    else if(scoreDisplay === random_Num){
        
        win++

        $("#wins").html("Wins: " + wins);
    }

});

// when clicking crystal, add to scoreDisplay

// when scoreDisplay === randomNum increment wins, otherwise increment losses

// generate new randomNum and crystal values
