import { config } from "./config.js";

const getMovieData = async () => {
    const movieTitle = document.getElementById('search_key').value;

    if (!movieTitle) {
        alert("Please enter a movie title to Search for");
        return;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apiKey=${config.apiKey}`);
        const data = await response.json();

        const { Title, Poster, Released, Response } = data;

        if (Response === 'False') {
            alert('Movie not found');
            return;
        }
        
        document.getElementById('title').innerText = `Movie Title : ${Title}`;
        
        document.getElementById('poster').src = Poster !== 'N/A' ? Poster : "https://via.placeholder.com/150";

        document.getElementById('release-year').innerText = `Release Year : ${Released}`;

    } catch (error) {
        alert(`Error fetching movie data: ${error}`);
    }
};

document.getElementById('search_btn').addEventListener('click', getMovieData);

const moreInfo = async () => {
    const movieSearch = document.getElementById('search_key').value;
    let modalBody = document.getElementById('modal-content');

    if (!movieSearch) {
        alert("Please enter a movie title to Search for");
        return;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${movieSearch}&apiKey=${config.apiKey}`);
        const data = await response.json();

        const { Title, Poster, Plot, Actors, Director, imdbRating, Response } = data;

        if (Response === 'False') {
            alert('Movie not found');
            return;
        }

        const modalheader = document.getElementById('exampleModalLabel');
        modalheader.innerText = `${Title}`;
        console.log(Plot);
        console.log(Actors);
        console.log(Director);
        
        modalBody.innerHTML = `
            <p><strong>Movie Plot: </strong> ${Plot}</p>
            <p><strong>Actors: </strong> ${Actors}</p>
            <p><strong>Director: </strong> ${Director}</p>
            <p><strong>IMDB Rating: </strong> ${imdbRating}</p>
            <img src="${Poster}" />
        `;

    } catch (error) {
        alert(`Error fetching movie info: ${error}`);
    }
};

document.getElementById('more-info-btn').addEventListener('click', moreInfo);