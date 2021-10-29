// Strict Mode
'use strict';

// Variables Declared
const url =
  'https://api.unsplash.com/search/photos?query=food&client_id=z-F7xvnBY_0FDRI3KtFPnSOsS3k8Ruo00avGnxxQv-o';
const button = document.querySelector('.button');
const display = document.querySelector('.display');

// Button Added
button.addEventListener('click', async () => {
  let image = await getNewImage();
  display.src = image;
});

// Fetch Sequence
async function getNewImage() {
  let number = Math.floor(Math.random() * 10);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let all = data.results[number];
      return all.urls.regular;
    })
    .catch(function (err) {
      // An error or `reject` from any of the above `.then()` blocks will end up here.
      console.log(err);
    });
}
