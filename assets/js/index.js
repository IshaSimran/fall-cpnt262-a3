// Strict Mode
'use strict';

// Variables Declared
const url =
  'https://api.unsplash.com/search/photos?query=food&client_id=z-F7xvnBY_0FDRI3KtFPnSOsS3k8Ruo00avGnxxQv-o';
const button = document.querySelector('.button');
const display = document.querySelector('.display');

// Button Added
button.addEventListener('click', async () => {
  let randomImage = await getNewImage();
  display.src = randomImage;
});

// Fetch Sequence
async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    })
    .catch(function (err) {
      // An error or `reject` from any of the above `.then()` blocks will end up here.
      console.log(err);
    });
}
