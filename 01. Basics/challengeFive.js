// 1. Create variable name (favActorFirstName) & store your fav Actor name.
let favActorFirstName = "Chris";
// 2. Create variable name (favActorLastName) & store the last name of (FA).
let favActorLastName = "Pratt";
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favACtorLastName)
let fullName = favActorFirstName.concat(" ", favActorLastName);
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
let uppercase = fullName.toUpperCase();
// 5. Create variable name  (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be UPPERCASE
let message = `My favorite actor is ${uppercase}, and he is a Christian,`;
// 6. Now append this message to the (message variable) `his best show is (best show).
message = `${message} and his best show is Gardians of the Galaxy`;
// 7. Now Log your message.
console.log(message);
