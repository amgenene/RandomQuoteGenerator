// $(document).ready(function() {
//     $('#getMessage').on('click', function(){
//       // Only change code below this line.
//       $(".message").html(quotes[Math.floor(Math.random()*10) +1]);
//       // Only change code above this line.
//     });
//   $('#twitter').on('click', function(){
//       // Only change code below this li
    
//       // Only change code above this line.
//     });
//   });

function quoteFunction() {
  var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  var tweetQuote = "https://twitter.com/intent/tweet?text=" + "\"" + randQuote.text+ " " + randQuote.author +"\"";
  document.getElementById('theMessage').innerHTML = randQuote.text + "<br>" + randQuote.author;
document.getElementById("twitterid").setAttribute("href",tweetQuote);
  twttr.widgets.load(document.getElementById("twitterid"))
}
var quotes = [{
  text: "  The best preparation for tomorrow is doing your best today.",
  author:"H. Jackson Brown, Jr."
} , {
  text: "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
  author:"-Joeseph Campbell"
},
{ 
  text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  author:"Jimmy Dean"
},
{ 
  text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  author:"Helen Keller"
},
{ 
  text: "Happiness is not something you postpone for the future; it is something you design for the present.",
  author:"Jim Rohn"
},];
  


