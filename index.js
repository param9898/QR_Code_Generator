
import inquirer from 'inquirer';
import qr from 'qr-image';
import x from 'fs';

inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL"
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(x.createWriteStream("qr_image.png"));

    x.writeFile("url.txt",url,(err) => {
        if(err) throw err;
        console.log("File has been saved.")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });