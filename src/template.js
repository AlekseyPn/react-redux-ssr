function template(title, initialState = {}, content = "") {
  let scripts = "";

  if (content) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/client.js"></script>
                `;
  } else {
    scripts = ` <script src="assets/bundle.js"> </script> `;
  }

  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                <link href="assets/style.css" rel="stylesheet">
              </head>
              <body>
                <div id="app">
                  ${content}
                </div>
                ${scripts}
              </body>
              `;

  return page;
}

module.exports = template;
