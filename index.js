// get element by id
const searchInput=document.getElementById('search-input');
const searchBtn=document.getElementById('search-btn');
const resultsList = document.getElementById('results');
const title=document.getElementById('current-song-title');
const Audio =document.getElementById('audio');
const playbutton=document.getElementById('play-btn');


let currentsong =null;

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

;

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
      li.innerHTML= `
        <strong>${songs.trackName}</strong> by ${song.artistName}
        <br>
        <button onclick="playSong(${index})">Play</button>
        <button onclick="addToPlaylist(${index})">➕</button>
      `;
      resultsList.appendChild('li');
    });
  
  }
 


