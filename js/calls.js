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
    let id= data;
}
bringMovies(key)