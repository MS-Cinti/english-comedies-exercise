//ezt megírni ternary operatorokkal, használni a mapet, filtert, reducet (higher order functions)
//destructuring mit jelent, utánanézni
const getLongestEnglishComedy = (movies) => {

    const englishComedies = movies.filter((movie) => {

        return movie.genre === "comedy" && movie.originalLanguage === "english"

    })

    if (englishComedies.length === 0){
        return null;
    }

    const longestEnglishComedy = englishComedies.reduce((prev, curr) => {

        if (prev.length < curr.length){
            return curr;
        }else{
            return prev; 
        }
    })

    return longestEnglishComedy.title;
}

console.log(getLongestEnglishComedy(movies))