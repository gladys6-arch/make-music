// get element by id
const searchInput=document.getElementById('search-input');
const searchBtn=document.getElementById('search-btn');
const resultsList = document.getElementById('results');
const currentsong=document.getElementById('current-song-title');
const Audio =document.getElementById('audio');
const playbutton=document.getElementById('play-btn');


let songs = [];
let currentIndex =0;

searchBtn.addEventListener('click',()=>{
  const query = searchInput.ariaValueMax.trim();
  if(query){
    searchMusic(query);
  }
});

function searchMusic(query) {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=10`;

    fetch(`https://cors-anywhere.herokuapp.com/${url}`)
      .then(res => res.json())
      .then(data => {
        songs = data.results;
        displayResults(songs);
      })
      .catch(console.error);
  }

  function displayResults(results){
    resultsList.innerHTML="";

    results.forEach((songs,index)=>{
      const li =document.createElement('li');
      li.innerHTML=
    })
  }



