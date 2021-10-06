// initial file structure
function cIntern(data) {
  return `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6>Intern</h6>
            <p class="card-text">ID: ${data.id}</p>
            <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
            <p class="card-text">Schoool: ${data.school}</a></p>
          </div>
        </div>`;
}

module.exports = cIntern;
