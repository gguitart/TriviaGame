
var number = 100;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
$("#hello").hide();


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}

function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        alert("Time Up!");
    }
}
function stop() {
    clearInterval(intervalId);
}

run();

function end() {
    //calculate score
    //build html stuff to show
    //append to hello


    $(".text").hide();
    $("#hello").append(
        "<p>hello!</p>",
        ("Correct Answers: " + correctAnswers),
        "<br>",
        "<br>",
        ("Incorrect Answers: " + incorrectAnswers)

,);
    console.log(correctAnswers);
}




