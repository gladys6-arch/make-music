function searchSongs() {
  const query = document.getElementById("search").value.trim();
  if (!query) return;

  const proxy = "http://localhost:8080/";
  const url = `${proxy}https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=5`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayResults(data.results);
    })
    .catch((err) => {
      console.error("Error fetching songs", err);
    });
}

function displayResults(songs) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (!songs.length) {
    container.innerHTML = "<p>No results found.</p>";
    return;
  }

  songs.forEach(song => {
    const div = document.createElement("div");
    div.className = "song";
    div.innerHTML = `
      <img src="${song.artworkUrl100}" alt="Cover" />
      <h3>${song.trackName}</h3>
      <p>${song.artistName}</p>
      <audio controls src="${song.previewUrl}"></audio>
    `;
    container.appendChild(div);
  });
}



        

   




 
