const API_BASE = '/api/v1';
const clubs = document.getElementById('clubs');
const clubId = window.location.pathname.split('/')[2];
const postForm = document.getElementById('newPost');

function getClub() {
  fetch(`${API_BASE}/clubs/${clubId}`)
  .then((stream) => stream.json())
  .then(res => render(res))
  .catch((err) => console.log(err));
}
getClub();

function render(clubObj) {
  console.log(clubObj);
  const clubTemplate = getClubTemplate(clubObj);
  clubs.innerHTML = '';
  clubObj.insertAdjacentHTML('beforeend', clubTemplate);
}

function getClubTemplate(clubs) {
  // clubs Posts Template
  const clubsPosts = clubs.posts.map((post) => {
    return `
      <article id="${post._id}" class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${post.name}</h5>
          <p class="card-title">${post.review}</p>
          <p class="card-text">${post.description}</p>
          <button class="btn btn-sm btn-danger float-right delete-post" type="button">Delete Post</button>
        </div>
      </article>
    `;
  });

  // clubs Template
  return `
    <div id="${clubs._id}" class="col-md-8 offset-md-2">
      <a type="button" class="btn btn-primary float-right mb-3 href="/views/index.html">Home</a>
      <button type="button" class="btn btn-primary float-right mb-3" data-toggle="modal" data-target="#newPostModal">
        Add Post
      </button>
      <h2>${clubs.name}</h2>
      <img src="${clubs.image}" class="img-fluid" width="100%" />
      <p class="mb-5">${clubs.details}</p>
      <section>
      <h4 class="mb-4">Posts:</h4>
        ${clubsPosts}
      </section>
    </div>
  `;
}
postForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title');
  const body = document.getElementById('body');
  let formIsValid = false; 

  // Select Error Messages
  const titleFeedback = document.querySelector('.title-feedback');
  const bodyFeedback = document.querySelector('.body-feedback');

  // Reset Validation Classes & Errors
  title.classList.remove('is-invalid');
  body.classList.remove('is-invalid');
  titleFeedback && titleFeedback.remove();
  bodyFeedback && bodyFeedback.remove();

  if (!title.value) {
    formIsValid = false;
    title.classList.add('is-invalid');
    title.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback title-feedback">Reviewer is required</div>');
  } else {
    formIsValid = true;
    title.classList.add('is-valid');
  }
  
  if (!body.value) {
    formIsValid = false;
    body.classList.add('is-invalid');
    body.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback body-feedback">Review is required</div>');
  } else {
    formIsValid = true;
    body.classList.add('is-valid');
  }

  if (formIsValid) {
    console.log('Let\'s do this!');
    const newPost = {title: title.value, body: body.value};
    console.log(newPost);

    fetch(`/api/v1/clubs/${clubsId}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((stream) => stream.json())
      .then((res) => {
        console.log(res);
        if (res.title) {
          getClub();
          $('#newPostModal').modal('hide');
        }
      })
      .catch((err) => console.log(err));
  }
});


// Delete clubs Post
clubs.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-post')) {
    deletePost(event);
  }
});


function deletePost(event) {
  fetch(`/api/v1/clubs/${clubsId}/posts/${event.target.parentNode.parentNode.id}`, {
    method: 'DELETE',
  })
    .then((stream) => stream.json())
    .then((res) => {
      console.log(res);

    })
    .catch((err) => console.log(err));
}
