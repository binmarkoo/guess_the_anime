function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Words that usually indicate a sequel / later season / part
const sequelKeywords = [
    "part 2", "part 3", "part 4",
    "2nd season", "3rd season", "4th season",
    "season 2", "season 3", "season 4",
    "final season",
    " ii", " iii", " iv", // roman numerals (leading space so "Fate" etc. isn't caught)
];

// returns true if a title looks like a sequel
function isSequel(title) {
    const lower = title.toLowerCase();
    return sequelKeywords.some((word) => lower.includes(word));
}

async function fetchPage(page, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(
                `https://api.jikan.moe/v4/top/anime?page=${page}`
            );

            if (!response.ok) {
                throw new Error(`Status ${response.status}`);
            }

            const json = await response.json();
            return json.data;
        } catch (error) {
            console.log(`Page ${page} failed (attempt ${attempt}): ${error.message}`);
            await wait(2000);
        }
    }

    console.log(`Page ${page} gave up after ${retries} attempts.`);
    return [];
}

async function fetchTopAnime() {
    const allAnime = [];
    const totalPages = 15;

    for (let page = 1; page <= totalPages; page++) {
        console.log(`Fetching page ${page}...`);

        const data = await fetchPage(page);

        if (data && data.length > 0) {
            const filtered = data
                .filter((anime) => !isSequel(anime.title_english || anime.title)) // skip sequels
                .map((anime) => ({
                    id: anime.mal_id,
                    title: anime.title_english || anime.title,
                    image: anime.images.jpg.large_image_url,
                    score: anime.score,
                    year: anime.year,
                    episodes: anime.episodes,
                    source: anime.source,
                    studio: anime.studios[0]?.name || "Unknown",
                    genres: anime.genres.map((g) => g.name),
                    type: anime.type || "Unknown",
                    status: anime.status || "Unknown",
                    season: anime.season || "Unknown",
                    rank: anime.rank,
                }));

            allAnime.push(...filtered);
        }

        await wait(1000);
    }

    console.log(`Done! Fetched ${allAnime.length} anime.`);
    console.log(JSON.stringify(allAnime, null, 2));
}

export default fetchTopAnime;