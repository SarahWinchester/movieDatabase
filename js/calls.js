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
        
        let template =`<div class="collapsible  container">
       
        <img class="col--4 responsive-img" src="{{minImg}}">
        <span class="col-6">{{titles}}</span>
        <span class="col-2 " >Puntuación {{vote}}/100</span>
        </div>
        <div class="content container">
        <div class="row">
        <img class="col-5 responsive-image" src="{{poster}}" alt="">
        <div class="col-4">
        <span>{{title}}</span>
        <div>{{overview}}</div>
        </div>
        <div class=" col-3">
        <span>{{releaseDate}}</span>
        <span>{{originallenguage}}</span>
        </div>
        
        </div>
        </div>`
        let newTemplate= template.replace("{{minImg}}", backdropUrl)
        .replace("{{vote}}",votes)
        .replace("{{poster}}", posterURl)
        .replace("{{titles}}", originalTitle)
        .replace("{{overview}}", resume) 
        .replace("{{releaseDate}}", release)
        .replace("{{title}}", title)
        .replace("{{originallenguage}}", lenguage);
        $("#containCollaps").append(newTemplate);
        
        
    }
    
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
    
    
    
}



// collapsable 



bringMovies(key)