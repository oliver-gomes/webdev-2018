const fs = require("fs");

// Read
fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("Errror!");
  }
  console.log(data.toString("utf8"));
});

// Append
fs.appendFile("./hello.txt", "This is so cool", err => {
  if (err) {
    console.log(err);
  }
});

// Write
// fs.writeFile("bye.txt", "Sad to see you go", err => {
//   if (err) {
//     console.log(err);
//   }
// });

// Delete
// fs.unlink("./bye.txt", err => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Inception");
// });
