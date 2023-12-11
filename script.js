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
randomNumberForUpcoming = Math.floor(Math.random() * maxNumberOfComingMovies), posterArea = document.getElementsByClassName("posterAndName"),
comingPosterImage = document.getElementsByClassName("comingPosterImage"), comingh4 = document.getElementsByClassName("comingh4"), comingPosters = document.getElementsByClassName("comingPosters"),
changeColorImages = document.getElementsByClassName("changeColor"), buyButton = document.getElementById("buy"), readButton = document.getElementById("read"),
signButton = document.getElementById("sign")
;

        posterName.innerHTML = currentMovies[0].title;
        poster.style.backgroundImage = "url(" + currentMovies[0].backGround + ")";
        poster.style.backgroundSize = "cover";

        generatePosters(posterh4, posterImage, maxNum, currentMovies, randomNumberForPoster);
        generatePosters(comingh4, comingPosterImage, maxNumberOfComingMovies, comingMovies, randomNumberForUpcoming);

        addEventListeners();

       
/*----------------------------------------------------------------------------------------------------------------*/ 

    function addEventListeners() {
    for (let i = 0; i < changeColorImages.length; i++) {
    changeColorImages[i].addEventListener("mouseover", changeColor);
    changeColorImages[i].para = i;
    changeColorImages[i].addEventListener("mouseleave", changeColor2);
    }
    buyButton.addEventListener("mouseover", changeButton);
    buyButton.addEventListener("mouseleave", changeButton2);
    readButton.addEventListener("mouseover", changeButton);
    readButton.addEventListener("mouseleave", changeButton2);
    signButton.addEventListener("mouseover", changeButton);
    signButton.addEventListener("mouseleave", changeButton2);
}

function changeButton() {
    if (this.id == "buy") this.src = "images/buyButton2.svg";
    else if (this.id == "read") this.src = "images/readMore2.svg";
    else if (this.id == "sign") this.src = "images/signUp2.svg";
}

function changeButton2() {
    if (this.id == "buy") this.src = "images/buyButton.svg";
    else if (this.id == "read") this.src = "images/readMore.svg";
    else if (this.id == "sign") this.src = "images/signUp.svg";
}


function changeColor(event) {
    if (event.target.para == 0 || event.target.para == 2)
event.target.src = "images/myPages2.svg";
else event.target.src = "images/search2.svg";
}

function changeColor2(event) {
    if (event.target.para == 0 || event.target.para == 2)
event.target.src = "images/myPages.svg";
else event.target.src = "images/search.svg";
}
        

        function generatePosters (posterClass, imageClass, numberOfItems, objectArray, rand) {

            for (let i = 0; i < posterClass.length; i++) {
                var temp = rand + i;
                if (temp >= numberOfItems) {rand = 0-i;
                    temp = 0;
                }
                imageClass[i].src = objectArray[temp].poster;
            posterClass[i].innerHTML= objectArray[temp].title;
            }
            createLinks();
        }//generatePoster

        function createLinks() {
            for (let i = 0; i < posterh4.length; i++) {
                if (posterh4[i].innerHTML == "The Marvels") 
                    posterArea[i].addEventListener("click", addLink);
                else posterArea[i].removeEventListener("click", addLink);
            }

            for (let i = 0; i < comingh4.length; i++) {
                if (comingh4[i].innerHTML == "The Marvels")
                comingPosters[i].addEventListener("click", addLink);
                else comingPosters[i].removeEventListener("click", addLink);
            }
        }

        function addLink() {
            window.location.href = "movie.html";
        }
        
        function changeCurrent(index, posterClass, imageClass) {
            for (let i = 0; i < posterClass.length; i++) 
            changePoster(index, imageClass[i], posterClass[i]);
            createLinks();
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
            let menu = document.getElementById("hiddenMenu");
            let originalMenu = document.getElementById("navBar").innerHTML;
            let image = document.getElementById("logo").innerHTML;
          
            if (menu.innerHTML.length == 0) {
                menu.style.paddingBottom = "30px";
              return (
                '<img id="hiddenLogo" src="images/Logo.svg" alt="LFC Bio" />' + originalMenu
              );
            } else{
                menu.style.paddingBottom = "0px";
                return "";
            }
          }