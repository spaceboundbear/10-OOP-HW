// initial file structure
function cEngineer(data) {
  return `
      <div class="card col-sm4">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <h6>Engineer</h6>
          <p class="card-text">ID: ${data.id}</p>
          <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
          <p class="card-text">Github Username: <a href="https://www.github.com/${data.github}">${data.github}</a></p>
        </div>
      </div>`;
}

module.exports = cEngineer;
