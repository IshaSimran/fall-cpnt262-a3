// API Array
const newAnime = function () {

  const object = [
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    '7',
    '8',
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
  ]

  // Loop to display array
  const randAnime = object[Math.floor(Math.random() * object.length)];

  fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
    .then(function (response) {
      // JSON that is returned from the server must be converted to a JS object asynchronously.
      if (!response.ok) {
        throw new Error('Not 200 OK');
      }
      return response.json();
    })
    .then(function (data) {
      // Any code that depends on the `data` must go in this block
      const animeObject = document.querySelector('.randAnime');

      animeObject.innerHTML = `
      <figure>
       <img src="${data.anime_img}" alt="Random Anime">
       <figcaption>${data.anime_name}</figcaption>
      </figure>
    `;
      console.log(data);
    })
    .catch(function (err) {
      // An error or `reject` from any of the above `.then()` blocks will end up here.
      console.log(err);
    });
}

// Event listener for button
document.querySelector('.different-anime').addEventListener('click', newAnime);