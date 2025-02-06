const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

//=======API 1======

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

        return {
            status: true,
            createdBy: "SILVA-MD",
            data: results.length > 0 ? results : [{ title: "No results found", link: "" }]
        };
    } catch (err) {
        console.error("Error scraping data:", err.message);
        return {
            status: false,
            createdBy: "SILVA-MD",
            data: [{ title: "Error fetching results", link: "" }]
        };
    }
}

//=======API 2======

async function getMovieDetails(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const title = $("h1.name.post-title.entry-title span[itemprop='name']").text().trim() || "Title not found";
        const uploader = $(".profile-card__name").text().trim() || "Uploader not found";
        const firstImageUrl = $("img.attachment-slider").first().attr("src") || "Image not found";
        const subtitleCompatibility = $(".neonc").text().trim().replace(/\s+/g, ' ') || "Subtitle compatibility info not found";
        const downloadLink = $("a.download").attr("data-link") || "Download link not found";

        return {
            status: true,
            createdBy: "SILVA-MD",
            data: { title, uploader, imageUrl: firstImageUrl, subtitleCompatibility, downloadLink }
        };
    } catch (err) {
        console.error("Error scraping data:", err.message);
        return { 
            status: false,
            createdBy: "SILVA-MD",
            data: { 
                title: "Error fetching title", 
                uploader: "Error fetching uploader", 
                imageUrl: "Error fetching image",
                subtitleCompatibility: "Error fetching subtitle info",
                downloadLink: "Error fetching download link"
            }
        };
    }
}

// Basic route to check if server is running
app.get('/', (req, res) => {
    res.send('✅ Server is running correctly | API Created by SILVA-MD Owner');
});

//=======API 1 Route=======
app.get('/search/:query', async (req, res) => {
    const query = req.params.query;
    const results = await getSearchResults(query);
    res.json(results);
});

//=======API 2 Route=======
app.get('/movie/details', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: "Please provide a URL in the 'url' query parameter." });
    }

    const details = await getMovieDetails(url);
    res.json(details);
});

// **REMOVE app.listen() when using Vercel**
module.exports = app;
