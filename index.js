// get element by id
const searchInput=document.getElementById('search-input');
const searchBtn=document.getElementById('search-btn');
const resultsList = document.getElementById('results');
const currentsong=document.getElementById('current-song-title');
const Audio =document.getElementById('audio');
const playbutton=document.getElementById('play-btn');


let song = [];
let currentIndex =0;

searchBtn.addEventListener('click',()=>{
  const query = searchInput.ariaValueMax.trim();
  if(query){
    searchMusic(query);
  }
});

