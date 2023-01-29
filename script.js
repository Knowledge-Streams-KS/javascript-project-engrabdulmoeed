const title = document.getElementById("title_search");
const year = document.getElementById("year_filter");

const getData = async (title, year) => {
    alert(title.value);
    const resp = await fetch(
      `http://www.omdbapi.com/?s=${title.value}&apikey=34137365`
    );
    const data = await resp.json();
    const movie_array = data.Search;
    document.getElementById("movie").innerHTML = "";
    movie_array.map(listing);
    console.log(movie_array);
    console.log(data);
};

search_button.addEventListener("click", () => {
    getData(title, year);
});

function listing(data) {
    if (year.value == "") {
        const abc = document.getElementById("movie");

        let type = data.Type;
        let require = "movie";
        let result = type.localeCompare(require);

        if (result === 0) {
            const details = `<div id="movie" class="dis">
            <img src="${data.Poster}">
            <h3 class="year_h">${data.Title}</h3>
            <h3 class="year_h">[${data.Year}]</h3>
            </div>`;
            abc.insertAdjacentHTML("afterbegin", details);
        }
    } else {
        const abc = document.getElementById("movie");

        let type = data.Type;
        let require = "movie";
        let result = type.localeCompare(require);

        if (result === 0  && data.Year == year.value) {
            const details = `<div id="movie" class="dis">
            <img src="${data.Poster}">
            <h3 class="year_h">${data.Title}</h3>
            <h3 class="year_h">[${data.Year}]</h3>
            </div>`;
            abc.insertAdjacentHTML("afterbegin", details);
        }
    }
}