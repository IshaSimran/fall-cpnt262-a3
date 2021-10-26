fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer')
  .then(function (response) {
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function (data) {
    // Any code that depends on the `data` must go in this block
    const animeFacts = document.querySelector('.facts');

    animeFacts.innerHTML = `
      <figure>
       <img src="${data.url}" alt="Random Anime Fact">
       <figcaption>${data.fact_id} bytes of data.</figcaption>
      </figure>
    `;
    console.log(data);
  })
  .catch(function (err) {
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });

