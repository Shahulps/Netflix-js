let movies = [
{ name:"The Shawshank Redemption",
  rating:"IMDb: 9.3",
  poster:"https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF1000,1000_QL80_.jpg",
  cast:"Tim Robbins · Andy Dufresne ; Morgan Freeman · Ellis Boyd"
},
{
    name:"Avengers: Infinity War",
    rating:"IMDb: 8.4",
    poster:"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    cast:""
},
{
    name:"Inception",
    rating:"IMDb: 8.8",
    poster:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    cast:""
},
{
    name:"The Dark Knight",
    rating:"IMDb: 9",
    poster:"https://rukminim2.flixcart.com/image/850/1000/kmns7m80/poster/w/r/8/medium-the-batman-the-dark-knight-rises-maxi-origins-jumbo-original-imagfgb6rmaz3cef.jpeg?q=90",
    cast:" Christian Bale · Bruce Wayne ; Heath Ledger · Joker ; Aaron Eckhart · Harvey Dent ;"
},
{
    name:"Interstellar",
    rating:"IMDb: 8.7",
    poster:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    cast:""
},
{
    name:"Shutter Island",
    rating:"IMDb: 8.2",
    poster:"https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    cast:""
},
{
    name:"Edge of Tomorrow",
    rating:"IMDb: 7.9",
    poster:"https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_FMjpg_UX1000_.jpg",
    cast:""
},
{
    name:"Sputnik",
    rating:"IMDb: 6.4",
    poster:"https://m.media-amazon.com/images/M/MV5BMzJhZDVmYTEtZjIwOS00YmIwLTg1YTUtYmNhMTM5ZWJjOGUzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    cast:""
},

{
    name:"Oppenheimer",
    rating:"IMDb: 8.6",
    poster:"https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    cast:"",
},
{
    name:"Brave",
    rating:"IMDb: 7",
    poster:"https://www.jovoto.com/wp-content/uploads/2016/09/Brave-movie-poster.jpg",
    cast:"Kelly Macdonald · Merida ; Billy Connolly · Fergus ; Emma Thompson",
},
{
    name:"Life of Pi",
    rating:"IMDb: 7.9",
    poster:"https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg",
    cast:"Suraj Sharma · Pi Patel ; Irrfan Khan · Adult Pi Patel ; Adil Hussain",
},
{
    name:"AVATAR",
    rating:"IMDb: 7.9",
    poster:"https://i.pinimg.com/736x/f3/f0/4a/f3f04a485eaad60915d70bb3df8e6440.jpg",
    cast:"Sam Worthington · Jake Sully ; Zoe Saldana · Neytiri ; Sigourney Weaver · Dr. Grace",
},
{
    name:"",
    rating:"IMDb: ",
    poster:"https://m.media-amazon.com/images/M/MV5BMDdhYzNkOWQtYWNlNi00NDdjLWJlZDMtMjJjZDYyNjAxM2U1XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
    cast:"",
},
{
    name:"",
    rating:"IMDb: ",
    poster:"",
    cast:"",
},
{
    name:"",
    rating:"IMDb: ",
    poster:"",
    cast:"",
},
{
    name:"",
    rating:"IMDb: ",
    poster:"",
    cast:"",
},


]




function searchMovie()
{
   let moviename= document.getElementById('search-value').value;
    
   if(moviename!=="")
   {
   let result = movies.filter(function(movie)
    {
        return movie.name.toUpperCase().includes(moviename.toUpperCase())
    })
 
displayMovies(result);

}else 
{
    displayMovies(movies)
}


}



function displayMovies(data)
    {
        document.getElementById("Movies").innerHTML="";


        let htmlString = ``;
for(let i=0;i<data.length;i++)
{     
        htmlString=htmlString+`
        <div class="movie">
            <div class="overlay">
                <div class="trailer">
              

                </div>
                <div class="details">
                    <h1>${data[i].name}</h1>
                    <h2>${data[i].rating}</h2>
                    <p>${data[i].cast}</p>
                </div>
            </div>
<img class="poster" src="${data[i].poster}" alt="poster">
        </div>
              `}
                console.log(htmlString);
              document.getElementById("Movies").innerHTML=htmlString;
    }

    displayMovies(movies);