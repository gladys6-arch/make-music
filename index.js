// get element by id
const searchInput=document.getElementById('search-input');
const searchBtn=document.getElementById('search-btn');
const resultsList = document.getElementById('results');
const title=document.getElementById('current-song-title');
const audio =document.getElementById('audio');
const playBtn=document.getElementById('play-btn');
const nextBtn=document.getElementById('next-btn');
const prevBtn =document.getElementById('prev-btn');

// holds the current search results
let songs = [];
// index of the current playing song
let currentIndex =0;

searchBtn.addEventListener('click',()=>{
  const searchTerm = searchInput.value;
   const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song&limit=5`;

   fetch(`https://cors-anywhere.herokuapp.com/${url}`)
   .then(function(response){
    return response.json();
   })
   .then(function(data){
    songs = data.results;
    resultsList.innerHTML="";

    data.results.forEach(function(song, index){
      const li= document.createElement('li');
      li.innerHTML= `
            ${song.trackName} - ${song.artistName}
            <br>
            <button class="play">Play</button>
            <button class="add">Add to Playlist</button>
          `;

          // the play button
          li.querySelector('.play').addEventListener('click',function(){
            playSong(index);

          });

           li.querySelector('.add').addEventListener('click',function(){
            const playlistItem= document.createElement('li');
            playlistItem.textContent =`${song.trackName} - ${song.artistName}`;
            playlist.appendChild(playlistItem)
           });

          results.appendChild(li);

          });
    })
        .catch(function (error){
         console.error("Error fetching songs", error);
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

  nextBtn.addEventListener('click', function(){
    if(songs.length === 0) return;
    currentIndex= (currentIndex + 1) % songs.length;
    playSong(currentIndex);
  });

  prevBtn.addEventListener('click', function(){
    if(songs.length === 0) return;
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(currentIndex);
  })




 
