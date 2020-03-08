const API_BASE = '/api/v1';
const clubs = document.getElementById('clubs');
const clubId = window.location.pathname.split('/')[2];
const postForm = document.getElementById('newPost');
const editForm = document.getElementById('editPost');

function getClub() {
  fetch(`${API_BASE}/clubs/${clubId}`)
  .then((stream) => stream.json())
  .then(res => render(res))
}
getClub();

function render(clubObj) {
  const clubTemplate = getClubTemplate(clubObj);
  clubs.innerHTML = '';
  clubs.insertAdjacentHTML('beforeend', clubTemplate);
}
function getClubTemplate(clubs) {
  const clubsPosts = clubs.reviews.map((post) => {
    return `
      <article id="${post._id}" class="card mb-4">
        <div class="card-body">
          <h5 class="card">${post.name}</h5>
          <p class="card-title">${post.review}</p>
          <button class="postBtn btn btn-sm btn-danger float-right edit-post" type="button" data-toggle="modal" data-target="#newEditModal">Edit Post</button>
          
          <button onclick="location.reload()" class="postBtn btn btn-sm btn-danger float-right delete-post" type="button">Delete Post</button>
        </div>
      </article>
    `;
  });

  return `
    <div id="${clubs._id}" class="reviewPage col-md-8 offset-md-2">
      <a type="button" class="postBtn btn btn-primary float-left mb-3" href="../" >Home</a>
      <button type="button" class="postBtn btn btn-primary float-right mb-3" data-toggle="modal" data-target="#newPostModal">
        Add Post
      </button>
      <h2>${clubs.name}</h2>
      <img src="${clubs.image}" class="img-fluid" width="100%" />
      <p class="mb-5">${clubs.details}</p>
      <section>
      <h4 class="mb-4">Reviews:</h4>
        ${clubsPosts}
      </section>
    </div>
  `;
}
function addPost(){
  postForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submitted');
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
    const newPost = {name: title.value, review: body.value};

    fetch(`/api/v1/clubs/${clubId}/posts`, {
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
}
addPost()

// Delete clubs Post

clubs.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-post')) {
    deletePost(event);
  }
  else if (event.target.classList.contains('edit-post')) {
    editPost(event);
  }
});

function deletePost(event) {
  fetch(`/api/v1/clubs/${clubId}/posts/${event.target.parentNode.parentNode.id}`, {
    method: 'DELETE',
  })
    .then((stream) => stream.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err)); 
}

let editId = '';
document.querySelector("#newEdit").addEventListener('submit', submitEditPost);

function editPost(event) {
  editId = event.target.parentNode.parentNode.id;
  let edit = document.querySelector('#edit');
  edit.value = event.target.parentNode.childNodes[1].textContent;
  let body = document.getElementById('edit-body');
  body.value = event.target.parentNode.childNodes[3].textContent
}

function submitEditPost(event) {
  const edit = document.getElementById('edit');
  const body = document.getElementById('edit-body');
  let formIsValid = false; 
  event.preventDefault();
  const editFeedback = document.querySelector('.edit-feedback');
  const bodyFeedback = document.querySelector('.body-feedback');

  // Reset Validation Classes & Errors
  edit.classList.remove('is-invalid');
  body.classList.remove('is-invalid');
  editFeedback && editFeedback.remove();
  bodyFeedback && bodyFeedback.remove();

  if (!edit.value) {
    formIsValid = false;
    edit.classList.add('is-invalid');
    edit.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback edit-feedback">Reviewer is required</div>');
  } else {
    formIsValid = true;
    edit.classList.add('is-valid');
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
    const newPost = {name: edit.value, review: body.value};
    console.log(newPost);
    console.log(editId);
  
  fetch(`/api/v1/clubs/${clubId}/posts/${editId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  })
    .then((stream) => stream.json())
    .then((res) => {
      console.log(res);
      if (res.edit) {
        getClub();
        $('#editPostModal').modal('hide');
      }
    })
    .catch((err) => console.log(err));
  }
}