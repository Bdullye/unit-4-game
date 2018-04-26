$(document).ready(function (){
var game = {
    target: 0,
    wins: 0,
    losses: 0,
    userScore: 0,

    start: function(){
        // sets target to a random number
        game.target=Math.floor(Math.random() * 120) +1; //researech how to set minimum to be no less than 19

        game.userScore = 0;
        
        $(".target").text(game.target);
        $(".userScore").text(game.userScore);

        //dynamical sets crystal values to random numbers
        for (var i = 0; i < 4; i++){
            $('img:eq('+ i + ')').attr('data-value', Math.floor(Math.random() * 12) +1);
        }

        $("img").click(function(){
            game.userScore += $(this).data('value');
            $(".userScore").text(game.userScore);

            if (game.userScore == game.target){
                game.wins++;
                alert('You win!!');
                $(".userWins").text(game.wins);
                game.start();
            } else if (game.userScore > game.target){
                game.losses++;
                alert('Better luck next time.');
                $(".userLosses").text(game.losses);
                game.start();
            }
        });

    },

};

game.start();

});

// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// Option 1 Game design notes
// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12.