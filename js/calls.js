const key= "08181a42528d77449ac34296a1328506";

function bringMovies (key){
    
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)
    .then((response) => {
        // console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        bringImage(data);
    }).catch((err) => {
        //  alert("Error 418, try again")
        console.log('Error 418');
    })
}
function bringImage(data) {
    // console.log(data.results);
    for (let i = 0; i < (data.results).length; i++) {
        let dataBackDrop = data.results[i].backdrop_path;
        let backdropUrl = "https://image.tmdb.org/t/p/w500/"+ dataBackDrop;
        let lenguage= data.results[i].original_language;
        let originalTitle = data.results[i].original_title;
        let title= data.results[i].title;
        let resume= data.results[i].overview;        
        let release= data.results[i].release_date;
        let votes= data.results[i].vote_average;
        let poster= data.results[i].poster_path;
        let posterURl = "https://image.tmdb.org/t/p/original"+ poster;
        
        }
    
}
bringMovies(key)