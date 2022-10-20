//User Case
// =========================================================================
//Suppose if we want to register an user account
//before sending to the server we need to serialize the user object into Json string
//at server side we need to desirialize the JSon string back to Object

//Registered User Object
const user = {
  userName: "jhon",
  password: "password@2022",
  age: 25,
  isPremiumUser: true,
  notification: ["subscriptions", "likes"],
};

console.log("\nUser Object is", user);

const serialize = JSON.stringify(user);

//sending to server
console.log("\nsending to server", serialize);

// received by server
console.log("\nreceived by server:", JSON.parse(serialize));
