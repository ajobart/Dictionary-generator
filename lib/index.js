// TODO: Autocomplete the input with AJAX calls.

fetch("https://wagon-dictionary.herokuapp.com/autocomplete/:stem")
  .then(response => response.json())
  .then((data) => {
    console.log(data.words);
  });

const results = document.getElementById("results");
const insertWords = (elements) => {
  results.innerHTML = "";
  elements.words.forEach((element) => {
    const word = `<li class="list-inline-item">
      <p>${element}</p>
    </li>`;
    console.log(word);
    results.insertAdjacentHTML('beforeend', word);
  });
};

const searchWords = (event) => {
  fetch(
    `https://wagon-dictionary.herokuapp.com/autocomplete/${event.currentTarget.value}`
  )
    .then(response => response.json())
    .then(insertWords);
};

const input = document.getElementById("search");
input.addEventListener("keyup", searchWords);
