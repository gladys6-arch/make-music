# Music Search App

####  Search for any song and listen to 30-second previews using the iTunes API — all from your browser!

#### By **Gladys Achando**

## Description

This is a simple web application that allows users to search for any song or artist and listen to 30-second audio previews directly in the browser. The app fetches music data from the iTunes Search API and displays key information such as the song title, artist name, album artwork, and an audio player.

Since the iTunes API does not support cross-origin requests from the browser, the app uses a local CORS proxy server (cors-anywhere) to fetch data safely. This makes it a great learning project for understanding APIs, working with fetch, and handling CORS issues in JavaScript.



## Features

- Search any song or artist

- See artist name and album cover

- Play 30-second audio previews

- Beautiful gradient layout

- Works with CORS via a local proxy



## How to Use

### Requirements

- A computer, tablet, or phone
- Access to the internet
- A modern web browser



### Local Development

If you want to run the project locally, you'll need:

- Node.js installed on your computer
- Basic understanding of Javascript
- Code editor (VS Code recommended)
- Terminal/Command Line

#### Installation Process

1. Clone this repository using:

   ```bash
   git clone git@github.com:gladys6-arch/make-music.git
   ```

   or by downloading a ZIP file of the code.

2. Navigate to the project directory:

   ```bash
   cd make-music
   ```

3. Install the CORS Proxy:

   ```bash
   npm install cors-anywhere
   ```

4. Start the CORS Proxy:

   ```bash
   node server.js
   ```

## live App


-  Frontend: [https://gladys6-arch.github.io/music-app](https://gladys6-arch.github.io/music-app)
- Proxy Server: [https://your-proxy-name.onrender.com](https://your-proxy-name.onrender.com)

## Technologies Used

- HTML5
- JavaScript
- CSS3
- iTunesSearchApi
- Local CORS proxy (cors-anywhere)
-Live server



## Support and Contact Details

If you have any questions, suggestions, or need assistance, please contact:

- Email: <gladys.achando@student.moringaschool.com>

## License

MIT License

Copyright &copy; 2024 Gladys Achando

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
