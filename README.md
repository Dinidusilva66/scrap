<h1>Cineru.lk Scraper API</h1>

<p>This project provides two APIs that scrape data from the <strong>Cineru.lk</strong> website. The APIs can be used to search for movie results and retrieve movie details based on a given URL.</p>

<h2>APIs</h2>

<h3>1. Search API</h3>
<p>Search for movies on Cineru.lk based on a query.</p>

<ul>
  <li><strong>Endpoint:</strong> <code>/search/:query</code></li>
  <li><strong>Method:</strong> <code>GET</code></li>
  <li><strong>URL Example:</strong> <br>
    <code>https://your-project-name.vercel.app/search/{query}</code>
  </li>
</ul>

<p><strong>Parameters:</strong></p>
<ul>
  <li><code>query</code>: The search term you want to search on Cineru.lk.</li>
</ul>

<p><strong>Response:</strong></p>
<pre>
<code>
[
  {
    "title": "Movie Title",
    "link": "https://cineru.lk/movie-link"
  }
]
</code>
</pre>

<h3>2. Movie Details API</h3>
<p>Fetch detailed information about a movie from Cineru.lk.</p>

<ul>
  <li><strong>Endpoint:</strong> <code>/movie/details</code></li>
  <li><strong>Method:</strong> <code>GET</code></li>
  <li><strong>URL Example:</strong> <br>
    <code>https://your-project-name.vercel.app/movie/details?url={movie_url}</code>
  </li>
</ul>

<p><strong>Parameters:</strong></p>
<ul>
  <li><code>url</code>: The URL of the movie on Cineru.lk.</li>
</ul>

<p><strong>Response:</strong></p>
<pre>
<code>
{
  "title": "Movie Title",
  "uploader": "Uploader Name",
  "imageUrl": "https://image-link.com",
  "subtitleCompatibility": "The sub comatibility of WebRip , WebDl , HD copy",
  "downloadLink": "https://download-link.com"
}
</code>
</pre>

<h2>Setup Instructions</h2>

<ol>
  <li>Clone the repository to your local machine:</li>
</ol>

<pre>
<code>
git clone https://github.com/your-username/cineru-scraper-api.git
cd cineru-scraper-api
</code>
</pre>

<ol start="2">
  <li>Install dependencies:</li>
</ol>

<pre>
<code>
npm install
</code>
</pre>

<ol start="3">
  <li>Run the server locally:</li>
</ol>

<pre>
<code>
npm start
</code>
</pre>

<p>Visit the API at <code>http://localhost:3000</code> on your browser to test the endpoints.</p>

<h2>Deployment on Vercel</h2>

<p>To deploy this project on Vercel:</p>

<ol>
  <li>Push your code to a GitHub repository.</li>
  <li>Go to the <a href="https://vercel.com/">Vercel dashboard</a>.</li>
  <li>Click <strong>New Project</strong>, then link your GitHub repository.</li>
  <li>Vercel will automatically deploy the project and provide you with a URL.</li>
  <li>Use the provided URLs to access the APIs.</li>
</ol>

<h2>License</h2>

<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
