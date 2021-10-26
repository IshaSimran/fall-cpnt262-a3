// API Array
const newAnime = function () {

  const object = [
    {
      anime_id: 1,
      anime_name: "bleach",
      anime_img: "https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      anime_id: 2,
      anime_name: "black_clover",
      anime_img: "https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      anime_id: 3,
      anime_name: "dragon_ball",
      anime_img: "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_FMjpg_UX1000_.jpg",
    },
    {
      anime_id: 4,
      anime_name: "jujutsu_kaisen",
      anime_img: "https://m.media-amazon.com/images/M/MV5BNzQyYzU3Y2MtOWY2Yy00ZGM2LTg3ZTUtMDJkZTJiMmEzMjYxXkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_.jpg",
    },
    {
      anime_id: 5,
      anime_name: "fma_brotherhood",
      anime_img: "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    },
    {
      anime_id: 6,
      anime_name: "naruto",
      anime_img: "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    },
    {
      anime_id: 7,
      anime_name: "gintama",
      anime_img: "https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      anime_id: 8,
      anime_name: "itachi_uchiha",
      anime_img: "https://comicvine.gamespot.com/a/uploads/scale_small/0/378/859934-god2vj0xj3.jpg",
    },
    {
      anime_id: 9,
      anime_name: "one_piece",
      anime_img: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    },
    {
      anime_id: 10,
      anime_name: "demon_slayer",
      anime_img: "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    },
    {
      anime_id: 11,
      anime_name: "attack_on_titan",
      anime_img: "https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg",
    },
    {
      anime_id: 12,
      anime_name: "hunter_x_hunter",
      anime_img: "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg",
    },
    {
      anime_id: 13,
      anime_name: "boku_no_hero_academia",
      anime_img: "https://i.pinimg.com/736x/0f/7f/ee/0f7feeb4655ffc029d1b9823bafb2ff8.jpg",
    },
  ];

  // Loop to display array
  const randomAnime = object[Math.floor(Math.random() * object.length)];

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