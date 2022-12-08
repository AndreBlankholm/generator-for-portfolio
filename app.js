const fs = require("fs"); // requiring the filesystem's module  //

const generatePage = require('./src/page-template');


const profileDataArgs = process.argv.slice(2);

const [name, github, fart] = profileDataArgs;



fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);
  
  console.log("Portfolio complete! Check out index.html to see the output!");
});


