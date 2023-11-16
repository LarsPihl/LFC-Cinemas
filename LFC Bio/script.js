var currentMovies = [
    {title: "The Marvels", poster: "https://m.media-amazon.com/images/M/MV5BM2U2YWU5NWMtOGI2Ni00MGMwLWFkNjItMjgyZWMxNjllNTMzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", backGround : "https://m.media-amazon.com/images/M/MV5BN2U1YzJjMjctNWQ4My00MjhjLTkxOGEtZjFkY2U1YTdkNGZiXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"},
    {title: "The Creator", poster: "https://m.media-amazon.com/images/M/MV5BNDUyNTIzNDQtYTZmMi00M2FlLTgyZjUtYWViZWNhMDYzMjE4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg", backGround : "https://hebdenbridgepicturehouse.co.uk/images/3415.jpg"}, 
    {title: "Expend4bles", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0cug2Sf4YLn-bizD4QDpCsIIn7CcRd0_1SQg2iloQQ&s", backGround : "https://static1.srcdn.com/wordpress/wp-content/uploads/wm/2023/09/expendables-4-streaming-release.jpg"}
], 

comingMovies = [
    {title: "The Marvels", poster: "https://m.media-amazon.com/images/M/MV5BM2U2YWU5NWMtOGI2Ni00MGMwLWFkNjItMjgyZWMxNjllNTMzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", backGround : "https://m.media-amazon.com/images/M/MV5BN2U1YzJjMjctNWQ4My00MjhjLTkxOGEtZjFkY2U1YTdkNGZiXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"},
    {title: "The Creator", poster: "https://m.media-amazon.com/images/M/MV5BNDUyNTIzNDQtYTZmMi00M2FlLTgyZjUtYWViZWNhMDYzMjE4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg", backGround : "https://hebdenbridgepicturehouse.co.uk/images/3415.jpg"}, 
    {title: "Expend4bles", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0cug2Sf4YLn-bizD4QDpCsIIn7CcRd0_1SQg2iloQQ&s", backGround : "https://static1.srcdn.com/wordpress/wp-content/uploads/wm/2023/09/expendables-4-streaming-release.jpg"}
],
posterName = document.getElementById("posterName"), poster = document.getElementsByClassName("hero")[0] ,posterImage = document.getElementsByClassName("currentPoster"), posterh4 = document.getElementsByClassName("currenth4"),
maxNum = currentMovies.length, maxNumberOfComingMovies = comingMovies.length, randomNumber = Math.floor(Math.random() * maxNum), randomNumberForPoster = Math.floor(Math.random() * maxNum), 
randomNumberForUpcoming = Math.floor(Math.random() * maxNumberOfComingMovies),
comingPosterImage = document.getElementsByClassName("comingPosterImage"), comingh4 = document.getElementsByClassName("comingh4")
;

        posterName.innerHTML = currentMovies[randomNumber].title;
        poster.style.backgroundImage = "url(" + currentMovies[randomNumber].backGround + ")";
        poster.style.backgroundSize = "100% 100%";

        generatePosters(posterh4, posterImage, maxNum, currentMovies, randomNumberForPoster);
        generatePosters(comingh4, comingPosterImage, maxNumberOfComingMovies, comingMovies, randomNumberForUpcoming);

/*----------------------------------------------------------------------------------------------------------------*/ 

        function generatePosters (posterClass, imageClass, numberOfItems, objectArray, rand) {

            for (let i = 0; i < posterClass.length; i++) {
                var temp = rand + i;
                if (temp >= maxNum) temp = 0;
                imageClass[i].src = objectArray[temp].poster;
            posterClass[i].innerHTML= objectArray[temp].title;
            }
        }//generatePoster
        
        function changeCurrent(index, posterClass, imageClass) {
            for (let i = 0; i < posterClass.length; i++) 
            changePoster(index, imageClass[i], posterClass[i]);
        }//changeCurrent
        
        function changePoster(indexChange, image, h4) {
            for (let i = 0; i < maxNum; i++) {
                if (h4.innerHTML == currentMovies[i].title) {
                    if ((i + indexChange) >= 0 && (i + indexChange) < maxNum) {
                    h4.innerHTML = currentMovies[i + indexChange].title;
                image.src = currentMovies[i + indexChange].poster;
                return;
                    }//if

                    else if ((i + indexChange) < 0) {
                        h4.innerHTML = currentMovies[maxNum-1].title;
                    image.src = currentMovies[maxNum-1].poster;
                    return;
                    }//if

                    else if ((i + indexChange) >= maxNum) {
                        h4.innerHTML = currentMovies[0].title;
                    image.src = currentMovies[0].poster;
                    return;
                    }//if
                    
                }//if
            }//for

        }//function changePoster

        function changeMenu() {
            let menu = document.getElementById("hiddenMenu").innerHTML;
            let originalMenu = document.getElementById("navBar").innerHTML;
            if (menu.length == 0) return originalMenu;
            else return "";
        }//changeMenu