//Switch for different roles:
/*
admin
sub-admin
testprep
user
*/

var user = "testprep";

switch (user) {
  case "admin":
    console.log("You get all the access");
    break;
  case "sub admin":
    console.log("You get less access  than admin");
    break;
  case "testprep":
    console.log("Get access to create /delete content");
    break;
  case "user":
    console.log("You can access the content");
    break;
  default:
    console.log("Trail user");
}
