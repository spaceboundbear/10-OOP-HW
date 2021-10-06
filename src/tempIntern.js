function cIntern(data) {
  return `
  <div class="col s12 m4">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">Intern</span>
      <h6>${data.name}</h6>
      <p>ID: ${data.id}</p>
      <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
      <p>Schoool: ${data.school}</a></p>
    </div>
  </div>
</div>`;
}

module.exports = cIntern;
