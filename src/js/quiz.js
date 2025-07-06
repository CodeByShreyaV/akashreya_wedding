var counter = 0;
var right = 0;
var questions = [
  [
    "When did Shreya and Akash start dating?",
    "2010",
    "2012",
    "2014",
    "2016",
    "3",
  ],
  [
    "Where did Shreya and Akash meet?",
    "High school, they were in the same class",
    "Met online playing Pokémon",
    "College, they were project partners",
    "Family arranged meeting (surprise!)",
    "1",
  ],
  [
    "When did they get engaged?",
    "September 17 2024, in a romantic beach setting",
    "Coming soon... maybe... possibly... hopefully?",
    "Valentine's Day 2025",
    "Probably after the wedding because logic is overrated",
    "2",
  ],
  [
    "Who is smarter?",
    "Akash, just because he thinks he is",
    "Shreya, she emotionally outsmarts *everyone*",
    "Depends, math test or handling human drama?",
    "Neither, they just Google it together",
    "3",
  ],
  [
    "Who is more likely to cry during the wedding vows?",
    "Shreya, 100%. Probably while writing this quiz too",
    "Akash because he has an emotional side too (who knew?)",
    "No one cries, only dramatic eye-rolls",
    "Everyone else will cry. These two will roast each other",
    "1",
  ],
  [
    "Who cooks better?",
    "Akash—makes 1 dish and lives off the glory for a year",
    "Shreya—she experiments, survives, and thrives",
    "Uber Eats, tbh",
    "Cooking is a shared trauma bonding activity",
    "1",
  ],
  [
    "Who made the first move?",
    "Shreya—bold, brave, Bollywood-core",
    "Akash—smooth like sandpaper",
    "It just ‘happened’ (read: mutual stalking)",
    "Their parents set it up, so who cares?",
    "3",
  ],
  [
    "Who’s the better gift-giver?",
    "Shreya—Pinterest boards and emotional blackmail",
    "Akash—surprisingly good at it!",
    "They both just ask what the other wants. Zero risk.",
    "Gifts? Nah, trauma bonding is free",
    "2",
  ],
  [
    "Who’s better with directions?",
    "Shreya— knows east from west, but not north from south",
    "Akash—he *is* Google Maps (but with attitude)",
    "They both get lost together and call it 'an adventure'",
    "Neither—they just end up arguing and going home",
    "2",
  ],
  [
    "What is their dream honeymoon destination?",
    "Backpacking in South America",
    "Somewhere in the mountains, in Europe",
    "Japan or South Korea",
    "What is a honeymoon? They only work",
    "3",
  ],
];

$(document).ready(function () {
    $(document).on("click", ".true", function () {
        right = right + 1;
        $(".true").css("background-color", "#44D37E");
        $(".true").css("color", "white");
        $(".false").css("background-color", "#2F1C42");
        $(".false").css("color", "white");
        window.setTimeout(nextQuestion, 1200);
    });
    $(document).on("click", ".false", function () {
        $(".true").css("background-color", "#44D37E");
        $(".true").css("color", "white");
        $(".false").css("background-color", "#2F1C42");
        $(".false").css("color", "white");
        window.setTimeout(nextQuestion, 1200);
    });

    function nextQuestion() {
        document.getElementById("progress").value += 12 
        counter = counter + 1;
        if (counter > 8) {
            $('#a1, #a2, #a3, #a4, #a5, #question').fadeOut("slow", function () {
                if (right == 9){
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-success'>You got all " + right +"/9 right.</strong></br><div class='is-size-5'> Wow! You got them all right! There's no way you're not a stalker. Not that you need it, but scroll down to read the full story!</div></div>").hide();
                }
                else if (right >= 7){
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-success'>You got " + right +"/9 right.</strong></br><div class='is-size-5'> Pretty good! You must be quite close to Akash and Shreya... or you're a stalker. Scroll down for the full story!</div></div>").hide();
                }
                else if (right < 7 && right >= 3){
                    var result = $("<div id='question' class='field is-size-4'><strong class='orange'>You got " + right +"/9 right.</strong></br><div class='is-size-5'> You've got some work to do! Scroll down and read up...</div></div>").hide();
                }
                else {
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-danger'>You got " + right +"/9 right.</strong></br><div class='is-size-5'> Wow you did terribly! Do you even know Akash and Shreya!? Scroll down and take notes...</div></div>").hide();
                }
                $('#couple-20').replaceWith('<div id="couple-20" class="column is-4 is-offset-1"><p class="title is-2 "><span class="rsvp-label">Your Results</span></p></div>');
                $('#question').replaceWith(result);
                $('#question').fadeIn("slow");
                $('#progress').replaceWith("<p style='line-height:0px;margin:-15px;'><br></p>");
            });
        }
        else {
            $(".true").css("background-color", "#FFFEFE");
            $(".true").css("color", "black");
            $(".false").css("background-color", "#FFFEFE");
            $(".false").css("color", "black");

            $('#question').fadeOut("slow", function () {
                var newQ = $("<div id='question' class='field'><strong>Question " + (counter + 1) + "/9</strong><label id='real-question' class='label is-size-5'>" + questions[counter][0] + "</label ></div >").hide();
                $(this).replaceWith(newQ);
                $('#question').fadeIn("slow");
            });

            var numAnswers = questions[counter].length - 2;
            var correctAnswer = questions[counter][numAnswers + 1];

            if (numAnswers == 4) {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 1) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'><a class='box " + (correctAnswer == 3) + "'>" + questions[counter][3] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'><a class='box " + (correctAnswer == 4) + "'>" + questions[counter][4] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
            }
            else if (numAnswers == 5) {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 3) + "'>" + questions[counter][3] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'><a class='box " + (correctAnswer == 4) + "'>" + questions[counter][4] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'><a class='box " + (correctAnswer == 5) + "'>" + questions[counter][5] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
                $('#a5').fadeOut("slow", function () {
                    newa = $("<p id='a5' class='control'><a class='box " + (correctAnswer == 6) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a5').fadeIn("slow");
                });
            }
            else {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 1) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
            }

        }
    }
});