var op = ['+', '-', '*', '/', '%'];
var questions = [];
var answers = [];
var multAns1 = [];
var multAns2 = [];
var multAns3 = [];
var multAns4 = [];
var ansPos = [];
var wrong = 0;
var j = 0;
var i = 1;

function startQuiz(a, b) {
    var type = document.getElementById("ToQ").value;
    document.getElementById("userInput").value = '';
    var y = op[a];
    if (b < 1 || b > 10) {
        window.alert("Plase input a valid number of questions between 1 and 10")
    } else {
    if (type === "md") {
        while (i <= b) {
            var x = Math.floor(Math.random() * 10) + 1;
            var z = Math.floor(Math.random() * 10) + 1;
            var ans = Math.round(eval(x + y + z) * 100) / 100;
            questions.push(i + '. ' + x + ' ' + y + ' ' + z + ' = ');
            answers.push(ans);
            i++;
        }
    document.getElementById("test").innerHTML = questions[0];
        var sp = document.getElementById("startPrompt");
        var drill = document.getElementById("drill");
        sp.style.display = "none";
        drill.style.display = "block";
    } else {
       choice(y, b); 
    }
    }
}
function choice(y, q) {
    while(i <= q) {
        var pos = Math.floor(Math.random() * (3-0 + 1) + 0);
        var x = Math.floor(Math.random() * 10) + 1;
        var z = Math.floor(Math.random() * 10) + 1;
        var ans = Math.round(eval(x + y + z) * 100) / 100;
        ansPos.push(pos);
        questions.push(i + '. ' + x + ' ' + y + ' ' + z + ' = ');
        answers.push(ans);
        multAns1.push(ans + (Math.floor(Math.random() * 10) + 4));
        multAns2.push(ans - (Math.floor(Math.random() * 10) + 3));
        multAns3.push(ans + (Math.floor(Math.random() * 10) + 2));
        multAns4.push(ans - (Math.floor(Math.random() * 10) + 1));
        i++;
    }
    document.getElementById("test2").innerHTML = questions[0];
    document.getElementById("one").innerHTML = multAns1[0];
    document.getElementById("two").innerHTML = multAns2[0];
    document.getElementById("three").innerHTML = multAns3[0];
    document.getElementById("four").innerHTML = multAns4[0];
    var sp = document.getElementById("startPrompt");
    var choice = document.getElementById("multChoice");
    sp.style.display = "none";
    choice.style.display = "block";
    placeAns();
}
function placeAns() {
    if (ansPos[j] === 0) {
        document.getElementById("one").innerHTML = answers[j];
    } else if (ansPos[j] === 1) {
        document.getElementById("two").innerHTML = answers[j];
    } else if (ansPos[j] === 2) {
        document.getElementById("three").innerHTML = answers[j];
    } else {
        document.getElementById("four").innerHTML = answers[j];
    }
}
function checkAnswer() {
    var type = document.getElementById("ToQ").value;
    if (type === "md") {
        var answer = answers[j];
        var input = document.getElementById("userInput").value;
    } else {
        var answer = ansPos[j];
        var input = document.getElementById("userInput2").value;
    }
    if (input == answer) {
        window.alert("Congrats! You got the question correct!");
        if (j == (questions.length - 1)) {
            window.alert("Good Job. You have finished the test.");
            score();
        } else {
            j++;
            document.getElementById("test").innerHTML = questions[j];
            if (type === "md") {
                document.getElementById("userInput").value = ''; 
            } else {
                document.getElementById("test2").innerHTML = questions[j];
                placeAns();
            }
        }
    } else {
        wrong++;
        window.alert("Please Try Again");
    }
}
function score() {
    var result = document.getElementById("end");
    var drill = document.getElementById("drill");
    var mult = document.getElementById("multChoice");
    var showQuestions = questions.length - wrong;
    result.style.display = "block";
    drill.style.display = "none";
    mult.style.display = "none";
    if (wrong === 1) {
        document.getElementById("mistake2").innerHTML = " mistake.";
    } else {
        document.getElementById("mistake2").innerHTML = " mistakes."
    }
    document.getElementById("mistake").innerHTML = wrong;
    document.getElementById("score").innerHTML = showQuestions;
    document.getElementById("questions").innerHTML = questions.length;
    
}
function restart() {
    var result = document.getElementById("end");
    var sp = document.getElementById("startPrompt");
    result.style.display = "none";
    sp.style.display = "block";
    questions = [];
    answers = [];
    multAns1 = [];
    multAns2 = [];
    multAns3 = [];
    multAns4 = [];
    ansPos = [];
    wrong = 0;
    j = 0;
    i = 1;
    document.getElementById("quest").value = '';
}
$(document).ready(function(){
$('#userInput').keypress(function(e){
  if(e.keyCode==13)
  $('#submit').click();
});
});
$(document).ready(function(){
$('#userInput2').keypress(function(e){
  if(e.keyCode==13)
  $('#submit').click();
});
});
$(document).ready(function(){
$('#quest').keypress(function(e){
  if(e.keyCode==13)
  $('#start').click();
});
});