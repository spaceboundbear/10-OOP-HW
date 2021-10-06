function renderHTML(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Members</title>
    </head>
    <body class="blue-grey darken-3">
      <h1 class="center-align white-text">Welcome To The Team</h1>
      <h5 class="center-align white-text">Check Out Our Team Members</h5>
      <div class="container">
        <div class="row">${data}
        </div>
        </div>
      </body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </html>
    `;
}
module.exports = renderHTML;
