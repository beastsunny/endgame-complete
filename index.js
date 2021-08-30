 var readlinesync = require('readline-sync');
 var score = 0;
 var useranswer = readlinesync.question("What is your Name ?")

 console.log( "Welcome" + " " + useranswer +" " + "To The EndGame ");



 function play(question,answer){
 var useranswer = readlinesync.question(question);

   if (useranswer === answer){
     console.log("you are right");
    score = score + 1;
   } else {
     console.log("you are wrong");
   }
console.log("score : " + score);
 }
   var questions = [{
     question : "Who Killed Thanos ?",
     answer : "Thor",
   },
   {
     question : "Who bring back half of the world Population Which Thanos Wiped Out ?",
     answer : "Hulk",
   },
   {
     question : "Who killed Thanos From Another Timeline ?",
     answer : "Iron Man"
   },
   {
     question : "who give idea about time traveling to avengers ?",
     answer : "Ant Man",
   },
   {
     question : "who saved Iron man in Space ?",
     answer : "Captain Marvel"
   }
   
   ];

   for(var i =0; i<questions.length; i++){
     var current = questions[i];
     play(current.question , current.answer);
   }

console.log( "you scored " + score);

