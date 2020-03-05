const clubElement = document.getElementById('clubs');

fetch('/api/v1/clubs')
  .then((buffer) => buffer.json())
  .then((data) => {
    console.log(data);
    render(data);
  })
  .catch((err) => console.log(err));

function render(clubsArr) {
  const clubsTemplates = clubsArr.map((clubs) => {
    return getClubTemplate(clubs);
  }).join('');
  clubElement.insertAdjacentHTML('beforeend', clubsTemplates);
}

function getClubTemplate(clubs) {
  return `
  <div class="club col-md-12 row">
    <div class="col-md-12">        
      <h4>
        ${clubs.name} <span>${clubs.genre}</span>
      </h4>
    </div>
    <div class=" col-md-4">
      <a target="_blank" href="${clubs.link}">
        <img class="img-responsive clubimg" src="${clubs.image}" alt="${clubs.name}"/></a>
    </div>
    <div class="clubInfo col-md-8">
      <p class="details">
        ${clubs.details}</p>
      <a href="/clubs/${clubs._id}" class="postBtn btn btn-primary float-right">View Details</a>
    </div>        
  </div>
  `;
}


