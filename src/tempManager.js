/*function cManager(data) {
  return `
    <div class="card col-sm4">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6>Manager</h6>
        <p class="card-text">ID: ${data.id}</p>
        <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
        <p class="card-text">Office Number: ${data.officeNumber}</p>
      </div>
    </div>`;
}*/

function cManager(data) {
  return `
<div class="col s12 m4">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">Manager</span>
      <h6>${data.name}</h6>
      <p>ID: ${data.id}</p>
      <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
      <p>Office Number: ${data.officeNumber}</p>
    </div>
  </div>
</div>`;
}

module.exports = cManager;
