const button     = document.querySelector('#button');
const name       = document.querySelector('#name');
const gender     = document.querySelector('#gender');
const height     = document.querySelector('#height');
const mass       = document.querySelector('#mass');
const birth_year = document.querySelector('#birth_year');
const eye_color  = document.querySelector('#eye_color');
const hair_color = document.querySelector('#hair_color');

// This gets the info from the API.
function getInfo() {
  const randNum = Math.floor((Math.random() * 88) + 1); // This picks a random ID for a random person.
  const apiURL  = 'https://swapi.co/api/people/' + randNum; // This just gets the URL so it can be called in the axios method.

  axios.get(apiURL).then(response =>{ // Axios calls the api, .then() is the promise, which guarantees that it's going to update the info using the response.data
    updateInfo(response.data);
  })
}

// This updates the info to the screen.
function updateInfo(data) {
  name.innerText        = 'Name:  '       + data.name;
  gender.innerText      = 'Gender:  '     + data.gender;
  height.innerText      = 'Height:  '     + data.height;
  mass.innerText        = 'Mass:  '       + data.mass;
  birth_year.innerText  = 'Birth Year:  ' + data.birth_year;
  eye_color.innerText   = 'Eye Color:  '  + data.eye_color;
  hair_color.innerText  = 'Hair Color:  ' + data.hair_color;
}

button.addEventListener('click', getInfo); //checks to see if you clicked or not.
