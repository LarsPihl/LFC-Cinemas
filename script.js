var posterName = document.getElementById("posterName"), poster = document.getElementsByClassName("hero")[0], 
currentMovies = [
    {title: "The Marvels", poster: "https://m.media-amazon.com/images/M/MV5BM2U2YWU5NWMtOGI2Ni00MGMwLWFkNjItMjgyZWMxNjllNTMzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", backGround : "https://m.media-amazon.com/images/M/MV5BN2U1YzJjMjctNWQ4My00MjhjLTkxOGEtZjFkY2U1YTdkNGZiXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"},
    {title: "The Creator", poster: "https://m.media-amazon.com/images/M/MV5BNDUyNTIzNDQtYTZmMi00M2FlLTgyZjUtYWViZWNhMDYzMjE4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg", backGround : "https://hebdenbridgepicturehouse.co.uk/images/3415.jpg"}, 
    {title: "Expend4bles", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0cug2Sf4YLn-bizD4QDpCsIIn7CcRd0_1SQg2iloQQ&s", backGround : "https://static1.srcdn.com/wordpress/wp-content/uploads/wm/2023/09/expendables-4-streaming-release.jpg"}
];

        var maxNum = currentMovies.length;
        
        var randomNumber = Math.floor(Math.random() * maxNum);

        posterName.innerHTML = currentMovies[randomNumber].title;
        poster.style.backgroundImage = "url(" + currentMovies[randomNumber].backGround + ")";
        poster.style.backgroundSize = "100% 100%";
        
        function changePoster(indexChange) {
            for (let i = 0; i < maxNum; i++) {
                if (posterName.innerHTML == currentMovies[i].title) {
                    if ((i + indexChange) >= 0 && (i + indexChange) < maxNum)
                    posterName.innerHTML = currentMovies[i + indexChange].title;
                poster.style.backgroundImage = "url(" + currentMovies[i + indexChange].backGround + ")";
                return;
                    
                    //poster.style.backgroundImage = posters[i + indexChange];
                }//if
            }//for

        }//function changePoster