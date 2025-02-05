const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 3000;

async function getSearchResults(query) {
    const url = `https://cineru.lk/?s=${encodeURIComponent(query)}`;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        let results = [];

        $("h2.post-box-title a").each((index, element) => {
            const title = $(element).text().trim();
            const link = $(element).attr("href");
            results.push({ title, link });
        });

        return results.length > 0 ? results : [{ title: "No results found", link: "" }];
    } catch (err) {
        console.error("Error scraping data:", err.message);
        return [{ title: "Error fetching results", link: "" }];
    }
}

app.get('/', (req, res) => {
    res.send('✅ Server is running!');
});

app.get('/search/:query', async (req, res) => {
    const query = req.params.query;
    const results = await getSearchResults(query);
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
