let movies = [
    { title: "Titanic", genre: "drama", originalLanguage: "english", length: 180 },
    { title: "Shaun of the dead", genre: "comedy", originalLanguage: "english", length: 120 },
    { title: "Star Wars", genre: "scifi", originalLanguage: "english", length: 150 }
]

const getLongestEnglishComedy = (movies) => {
    
    const englishComedies = movies.filter(movie => movie.genre === "comedy" && movie.originalLanguage === "english")

    const emptyArray = (movies.length === 0) ? null : 'Movies array is not empty';

    const longestEnglishComedy = englishComedies.reduce(
        (prev, curr) => (prev.length < curr.length) ? curr : prev
    )

    return longestEnglishComedy.title;
}

console.log(getLongestEnglishComedy(movies))