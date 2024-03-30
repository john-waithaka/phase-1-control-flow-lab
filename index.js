
  // Write your code here!
  
    //this is where we can use conditionals given our argument, someValue
    //don't forget to return whatever the result is!

function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
      return 'This one is on me!';
  } else {
      // give other answer
  }
}


function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
       } else if (feet > 400 && feet <= 2000) {
          return "That will be twenty bucks.";
           } else if (feet > 2000 && feet <= 2500) {
              return "I will gladly take your thirty bucks.";
             } else {
              return 'No can do.';}
}


function ternaryCheckCity(city){
  // Write your code here!
function ternaryCheckCity() {
if (city = NYC){
  return "Ok, sounds good.";
   } else return "No go."
}
}


function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(){
  // Write your code here!
// main if statement for tip
//   function switchOnCharmFromTip(tip){
// if (tip = generous) {
//   return "Thank you so much.";
// }
//   }
  
  // Function definition
  function switchOnCharmFromTip(tip) {
      // Using a switch statement to handle different cases
      switch (tip) {
          case "generous":
              return "Thank you so much.";
          case "not as generous":
              return "Thank you.";
          default:
              return "Bye.";
      }
  }
}