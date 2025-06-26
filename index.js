// get element by id
const searchInput=document.getElementById('search-input');
const searchBtn=document.getElementById('search-btn');
const resultsList = document.getElementById('results');
const title=document.getElementById('current-song-title');
const audio =document.getElementById('audio');
const playbutton=document.getElementById('play-btn');


let songs = [];
let currentIndex =0;

searchBtn.addEventListener('click',()=>{
  const query = searchInput.value;
   const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song&limit=5`;

   fetch(`https://cors-anywhere.herokuapp.com/${url}`)
   .then(function(response){
    return response.json();
   })
   .then(function(data){
    results.innerHTML = "";

    data.resultsforEach(function(song){
      const li= document.createElement('li');
      li.innerHTML= `
            ${song.trackName} - ${song.artistName}
            <br>
            <button class="play">Play</button>
            <button class="add">Add to Playlist</button>
          `;

          // the play button
          li.querySelector('.add').addEventListener('click',function(){
            const PlaylistItem =document.createElement('li');
             PlaylistItem.textContent = song.trackName + " - " + song.artistName;
             Playlist.appendChild(PlaylistItem);

          });
          results.appendChild(li);

          });
    });
   });

   function playSong(index) {
    const song = songs[index];
    if (!song) return;

    audio.src = song.previewUrl;
    audio.play();
    currentIndex = index;
    title.textContent = song.trackName + " - " + song.artistName;
    playBtn.textContent = "⏸️";

    audio.onended = function () {
      playBtn.textContent = "▶️";
    };
  }

playBtn.addEventListener('click', function () {
    if (!audio.src) return;

    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playBtn.textContent = "▶️";
    }
  });




 
