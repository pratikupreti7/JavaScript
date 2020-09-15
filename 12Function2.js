//Switch for different roles:
/*
admin
sub-admin
testprep
user
*/

var getuserrole = function getuserrole(name, role) {
  switch (role) {
    case "admin":
      return `${name} admin previlages granted`;
      break;
    case "sub-admin":
      return `${name} sub-admin previlages granted`;
      break;
    case "testprep":
      return `${name} works as database handler`;
      break;
    case "user":
      return `${name} admin previlages granted`;
      break;

    default:
      break;
  }
};

console.log(getuserrole("Messi", "testprep"));
