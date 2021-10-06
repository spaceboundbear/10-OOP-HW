function cEngineer(data) {
  return `
<div class="col s12 m4">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">Engineer</span>
      <h6>${data.name}</h6>
      <p>ID: ${data.id}</p>
      <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
      <p>Github Username: <a href="https://www.github.com/${data.github}">${data.github}</a></p>
    </div>
  </div>
</div>`;
}

module.exports = cEngineer;
