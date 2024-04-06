// 1. Create variable name (passsword) store nothing.
let password;

// 2. if password is equal to 8 print "Welcome"
if (password === 8) {
  console.log("Welcome");
}
// 3. If password is less than or equal to 8 print "Password is too short"
else if (password <= 8) {
  console.log("Password is too short");
}
// 4. If password is greater than or equal to 8 print "Too Long Password" & "Password should be 8 characters"
else if (password >= 8) {
  console.log("Too long password & Password should be 8 characters");
}
// 5. If all fails print "Please provide password"
else {
  console.log("Please provide password");
}
