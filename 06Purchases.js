// Allow user to purchase a course only when they are
/*
logged in
email verified
card info valid
If anything is missing stop the purchase
*/
var isloggedin = true;
var emailverified = false;
var cardinfo = true;

if (isloggedin) {
  console.log("You are logged in");
  if (emailverified) {
    console.log("Email verified");
    if (cardinfo) {
      console.log("Card info valid,purchase can be completed");
    } else {
      console.log("Card info invalid");
    }
  } else {
    console.log("email not verified");
  }
} else {
  console.log("login unsucessfull");
}
