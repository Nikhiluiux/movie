const catalog = [
  {
    section: "Trending Today",
    items: [
      {
        title: "Dune: Part Two",
        mediaType: "movie",
        tmdbId: "693134",
        year: "2024",
        rating: "8.5",
        genres: ["Sci-Fi", "Adventure"],
        image: "https://image.tmdb.org/t/p/w780/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        overview:
          "Paul Atreides unites with the Fremen while war, prophecy, and revenge close in around him.",
        params: { color: "ff6a3d", autoPlay: true },
      },
      {
        title: "Oppenheimer",
        mediaType: "movie",
        tmdbId: "872585",
        year: "2023",
        rating: "8.3",
        genres: ["Drama", "History"],
        image: "https://image.tmdb.org/t/p/w780/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        overview: "A tense prestige drama centered on ambition, consequence, and history.",
        params: { color: "53d6c6" },
      },
      {
        title: "Spider-Man: Across the Spider-Verse",
        mediaType: "movie",
        tmdbId: "569094",
        year: "2023",
        rating: "8.4",
        genres: ["Animation", "Action"],
        image: "https://image.tmdb.org/t/p/w780/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        overview: "A vivid multiverse adventure with huge energy and nonstop motion.",
        params: { color: "9146ff", autoPlay: true },
      },
      {
        title: "John Wick: Chapter 4",
        mediaType: "movie",
        tmdbId: "603692",
        year: "2023",
        rating: "7.8",
        genres: ["Action", "Thriller"],
        image: "https://image.tmdb.org/t/p/w780/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        overview: "Relentless action, stylish staging, and a premium blockbuster finish.",
        params: { color: "e50914" },
      },
      {
        title: "Top Gun: Maverick",
        mediaType: "movie",
        tmdbId: "361743",
        year: "2022",
        rating: "8.2",
        genres: ["Action", "Drama"],
        image: "https://image.tmdb.org/t/p/w780/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        overview: "A polished crowd-pleaser with speed, emotion, and huge scale.",
        params: { color: "53d6c6", autoPlay: true },
      },
    ],
  },
  {
    section: "Featured Series",
    items: [
      {
        title: "The Last of Us",
        mediaType: "tv",
        tmdbId: "100088",
        season: "1",
        episode: "1",
        year: "2023",
        rating: "8.7",
        genres: ["Drama", "Thriller"],
        image: "https://image.tmdb.org/t/p/w780/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        overview: "A prestige series opener driven by survival, grief, and connection.",
        params: { color: "53d6c6", nextEpisode: true, episodeSelector: true },
      },
      {
        title: "Severance",
        mediaType: "tv",
        tmdbId: "95396",
        season: "1",
        episode: "1",
        year: "2022",
        rating: "8.6",
        genres: ["Sci-Fi", "Drama"],
        image: "https://image.tmdb.org/t/p/w780/7XJjU8wB2McqHtwvIg9CJ7aqc0W.jpg",
        overview: "Stylish sci-fi mystery with elegant visuals and creeping tension.",
        params: { color: "53d6c6", nextEpisode: true, episodeSelector: true },
      },
      {
        title: "The Bear",
        mediaType: "tv",
        tmdbId: "136315",
        season: "1",
        episode: "1",
        year: "2022",
        rating: "8.5",
        genres: ["Comedy", "Drama"],
        image: "https://image.tmdb.org/t/p/w780/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg",
        overview: "Fast, anxious, and sharply human from the very first episode.",
        params: { color: "ff6a3d", nextEpisode: true, episodeSelector: true },
      },
      {
        title: "House of the Dragon",
        mediaType: "tv",
        tmdbId: "94997",
        season: "1",
        episode: "1",
        year: "2022",
        rating: "8.3",
        genres: ["Fantasy", "Drama"],
        image: "https://image.tmdb.org/t/p/w780/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
        overview: "A grand fantasy saga full of politics, dragons, and dynastic warfare.",
        params: { color: "e50914", nextEpisode: true, episodeSelector: true },
      },
      {
        title: "Dark",
        mediaType: "tv",
        tmdbId: "70523",
        season: "1",
        episode: "1",
        year: "2017",
        rating: "8.4",
        genres: ["Thriller", "Mystery"],
        image: "https://image.tmdb.org/t/p/w780/5Lo5H9NzzcZPpwX2K7Y4jB7N5hs.jpg",
        overview: "A moody, layered puzzle box with major binge energy.",
        params: { color: "9146ff", nextEpisode: true, episodeSelector: true },
      },
    ],
  },
  {
    section: "Top Rated",
    items: [
      {
        title: "Blade Runner 2049",
        mediaType: "movie",
        tmdbId: "335984",
        year: "2017",
        rating: "7.9",
        genres: ["Sci-Fi", "Mystery"],
        image: "https://image.tmdb.org/t/p/w780/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        overview: "Lush, atmospheric, and stunning from frame to frame.",
        params: { color: "ffa500" },
      },
      {
        title: "Poor Things",
        mediaType: "movie",
        tmdbId: "792307",
        year: "2023",
        rating: "7.8",
        genres: ["Comedy", "Fantasy"],
        image: "https://image.tmdb.org/t/p/w780/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
        overview: "A visually distinctive and playful fantasy drama.",
        params: { color: "ff69b4" },
      },
      {
        title: "The Godfather",
        mediaType: "movie",
        tmdbId: "238",
        year: "1972",
        rating: "8.7",
        genres: ["Crime", "Drama"],
        image: "https://image.tmdb.org/t/p/w780/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        overview: "A classic power saga with unforgettable performances.",
        params: { color: "e50914" },
      },
      {
        title: "The Shawshank Redemption",
        mediaType: "movie",
        tmdbId: "278",
        year: "1994",
        rating: "8.7",
        genres: ["Drama"],
        image: "https://image.tmdb.org/t/p/w780/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
        overview: "A modern classic about hope, endurance, and friendship.",
        params: { color: "53d6c6" },
      },
      {
        title: "Interstellar",
        mediaType: "movie",
        tmdbId: "157336",
        year: "2014",
        rating: "8.4",
        genres: ["Sci-Fi", "Drama"],
        image: "https://image.tmdb.org/t/p/w780/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        overview: "An emotional space odyssey with scale and spectacle.",
        params: { color: "ffa500" },
      },
    ],
  },
];

const adConfig = window.streamSphereConfig?.adConfig || {
  provider: "placeholder",
  enableAutoAds: false,
  adsense: { client: "", slots: {} },
  custom: {},
};

const searchInput = document.querySelector("#searchInput");
const surpriseMeBtn = document.querySelector("#surpriseMeBtn");
const genreFilters = document.querySelector("#genreFilters");
const heroTitle = document.querySelector("#heroTitle");
const heroMeta = document.querySelector("#heroMeta");
const heroOverview = document.querySelector("#heroOverview");
const heroKicker = document.querySelector("#heroKicker");
const featuredHero = document.querySelector("#featuredHero");
const topTenGrid = document.querySelector("#topTenGrid");
const latestGrid = document.querySelector("#latestGrid");
const trendingGrid = document.querySelector("#trendingGrid");
const seriesGrid = document.querySelector("#seriesGrid");
const topRatedGrid = document.querySelector("#topRatedGrid");
const genreGrid = document.querySelector("#genreGrid");
const copyFeaturedBtn = document.querySelector("#copyFeaturedBtn");
const emptyState = document.querySelector("#emptyState");
const resultsMeta = document.querySelector("#resultsMeta");
const browseOnlySections = document.querySelectorAll(".browse-only");

let activeGenre = "All";
let searchTerm = "";
let searchDebounceId = null;

function normalizeItems() {
  return catalog
    .flatMap((section, sectionIndex) =>
      section.items.map((item, itemIndex) => ({
        ...item,
        addedRank: sectionIndex * 100 + itemIndex,
      }))
    );
}

function buildEmbedUrl(item) {
  const base =
    item.mediaType === "movie"
      ? `https://www.vidking.net/embed/movie/${item.tmdbId}`
      : `https://www.vidking.net/embed/tv/${item.tmdbId}/${item.season}/${item.episode}`;

  const params = new URLSearchParams();
  Object.entries(item.params || {}).forEach(([key, value]) => {
    if (value !== undefined && value !== false && value !== null && value !== "") {
      params.set(key, String(value));
    }
  });

  return params.toString() ? `${base}?${params.toString()}` : base;
}

function buildWatchPageUrl(item) {
  const watchParams = new URLSearchParams({
    type: item.mediaType,
    tmdbId: item.tmdbId,
    color: item.params?.color || "ff6a3d",
  });

  if (item.mediaType === "tv") {
    watchParams.set("season", item.season || "1");
    watchParams.set("episode", item.episode || "1");
  }

  Object.entries(item.params || {}).forEach(([key, value]) => {
    if (value !== undefined && value !== false && value !== null && value !== "") {
      watchParams.set(key, String(value));
    }
  });

  return `./watch.html?${watchParams.toString()}`;
}

function openPlayer(item) {
  window.location.href = buildWatchPageUrl(item);
}

function getFeaturedItem() {
  return catalog[0].items[0];
}

function matchesFilters(item) {
  const text = `${item.title} ${item.overview} ${item.genres.join(" ")} ${item.year} ${item.mediaType}`
    .toLowerCase()
    .trim();
  const searchMatches = text.includes(searchTerm.toLowerCase().trim());
  const genreMatches = activeGenre === "All" || item.genres.includes(activeGenre);
  return searchMatches && genreMatches;
}

function sortLatestFirst(items) {
  return [...items].sort((left, right) => {
    const yearDiff = Number(right.year) - Number(left.year);
    if (yearDiff !== 0) {
      return yearDiff;
    }
    return right.addedRank - left.addedRank;
  });
}

function renderHero() {
  const item = getFeaturedItem();
  heroKicker.textContent = item.mediaType === "movie" ? "Movie premiere" : "Series spotlight";
  heroTitle.textContent = item.title;
  heroMeta.innerHTML = `
    <span>${item.rating}</span>
    <span>${item.year}</span>
    <span>${item.mediaType === "movie" ? "Movie" : "Series"}</span>
    <span>${item.genres.join(" / ")}</span>
  `;
  heroOverview.textContent = item.overview;
  featuredHero.style.backgroundImage = `linear-gradient(180deg, rgba(7, 10, 18, 0.12), rgba(7, 10, 18, 0.92)), url(${item.image})`;
}

function renderTopTen() {
  topTenGrid.innerHTML = "";
  sortLatestFirst(normalizeItems())
    .slice(0, 5)
    .forEach((item, index) => {
      const article = document.createElement("article");
      article.className = "top-ten-card";
      article.innerHTML = `
        <span class="top-ten-rank">${index + 1}</span>
        <button class="top-ten-poster" type="button" aria-label="Play ${item.title}">
          <img src="${item.image}" alt="${item.title}" />
        </button>
      `;
      article.querySelector("button").addEventListener("click", () => openPlayer(item));
      topTenGrid.appendChild(article);
    });
}

function createShelfCard(item) {
  const card = document.createElement("article");
  card.className = "shelf-card";
  card.innerHTML = `
    <button class="shelf-card-media" type="button" aria-label="Play ${item.title}" style="background-image:url('${item.image}')">
      <span class="shelf-badge">${item.mediaType === "movie" ? "MOVIE" : "TV SHOW"}</span>
      <span class="shelf-score">${item.rating}</span>
      <div class="shelf-fade"></div>
      <div class="shelf-caption">
        <h3>${item.title}</h3>
        <p>${item.overview}</p>
      </div>
    </button>
  `;
  card.querySelector("button").addEventListener("click", () => openPlayer(item));
  return card;
}

function mapSearchResultToItem(result) {
  const mediaType = result.media_type === "tv" ? "tv" : "movie";
  const title = result.title || result.name || "Untitled";
  const yearSource = result.release_date || result.first_air_date || "";
  const year = yearSource ? yearSource.slice(0, 4) : "Unknown";
  const imagePath = result.backdrop_path || result.poster_path || "";
  const image = imagePath
    ? `https://image.tmdb.org/t/p/w780${imagePath}`
    : "https://placehold.co/780x440/111111/f2f2f2?text=No+Image";

  return {
    title,
    mediaType,
    tmdbId: String(result.id),
    season: "1",
    episode: "1",
    year,
    rating: String(Number(result.vote_average || 0).toFixed(1)),
    genres: [mediaType === "movie" ? "Movie" : "Series"],
    image,
    overview: result.overview || "No summary available.",
    params:
      mediaType === "movie"
        ? { color: "ff6a3d", autoPlay: true }
        : { color: "ff6a3d", nextEpisode: true, episodeSelector: true },
  };
}

function renderShelf(target, items) {
  target.innerHTML = "";
  sortLatestFirst(items.filter(matchesFilters)).forEach((item) => {
    target.appendChild(createShelfCard(item));
  });
}

function getGenres() {
  const genres = new Set(["All"]);
  normalizeItems().forEach((item) => item.genres.forEach((genre) => genres.add(genre)));
  return Array.from(genres);
}

function renderGenreFilters() {
  genreFilters.innerHTML = "";
  getGenres().forEach((genre) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${genre === activeGenre ? " is-active" : ""}`;
    button.textContent = genre;
    button.addEventListener("click", () => {
      activeGenre = genre;
      renderGenreFilters();
      renderShelves();
    });
    genreFilters.appendChild(button);
  });
}

function renderShelves() {
  const allItems = normalizeItems();
  const filteredAll = sortLatestFirst(allItems.filter(matchesFilters));

  latestGrid.innerHTML = "";
  filteredAll.forEach((item) => {
    latestGrid.appendChild(createShelfCard(item));
  });

  renderShelf(trendingGrid, catalog[0].items);
  renderShelf(seriesGrid, catalog[1].items);
  renderShelf(topRatedGrid, catalog[2].items);
  renderShelf(genreGrid, allItems);

  const totalMatches = filteredAll.length;
  const totalItems = allItems.length;
  resultsMeta.textContent = searchTerm.trim()
    ? `${totalMatches} result${totalMatches === 1 ? "" : "s"} for "${searchTerm.trim()}"`
    : `Newest titles first • ${totalItems} total`;

  emptyState.hidden = totalMatches !== 0;
}

async function renderApiSearch() {
  const query = searchTerm.trim();
  if (!query) {
    browseOnlySections.forEach((section) => {
      section.hidden = false;
    });
    renderShelves();
    return;
  }

  browseOnlySections.forEach((section) => {
    section.hidden = true;
  });

  resultsMeta.textContent = `Searching for "${query}"...`;
  latestGrid.innerHTML = "";
  emptyState.hidden = true;

  try {
    const response = await fetch(
      `https://db.videasy.net/3/search/multi?query=${encodeURIComponent(query)}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`Search API failed: ${response.status}`);
    }

    const payload = await response.json();
    const items = (payload.results || [])
      .filter((result) => result.media_type === "movie" || result.media_type === "tv")
      .map(mapSearchResultToItem)
      .filter(matchesFilters);

    resultsMeta.textContent = `${items.length} result${items.length === 1 ? "" : "s"} for "${query}"`;

    if (!items.length) {
      emptyState.hidden = false;
      return;
    }

    items.forEach((item) => {
      latestGrid.appendChild(createShelfCard(item));
    });
  } catch (error) {
    console.error("API search failed", error);
    resultsMeta.textContent = `Search failed for "${query}"`;
    emptyState.hidden = false;
  }
}

function renderAds() {
  const adSlots = document.querySelectorAll("[data-slot]");
  adSlots.forEach((slotNode) => {
    const slotName = slotNode.getAttribute("data-slot");

    if (adConfig.provider === "adsense") {
      slotNode.innerHTML = `
        <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-client="${adConfig.adsense.client}"
          data-ad-slot="${adConfig.adsense.slots[slotName]}"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      `;
      return;
    }

    if (adConfig.provider === "custom") {
      slotNode.innerHTML = adConfig.custom[slotName] || "";
      return;
    }

    slotNode.innerHTML = `<div><strong>Sponsored</strong><p>Ad space</p></div>`;
  });

  if (adConfig.provider === "adsense") {
    if (!document.querySelector('script[data-adsense-loader="true"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adConfig.adsense.client}`;
      script.crossOrigin = "anonymous";
      script.dataset.adsenseLoader = "true";
      document.head.appendChild(script);
      script.addEventListener("load", pushAds);
    } else {
      pushAds();
    }
  }
}

function pushAds() {
  if (!window.adsbygoogle) {
    return;
  }

  document.querySelectorAll(".adsbygoogle").forEach(() => {
    try {
      window.adsbygoogle.push({});
    } catch (error) {
      console.error("AdSense push failed", error);
    }
  });
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  clearTimeout(searchDebounceId);
  searchDebounceId = setTimeout(() => {
    renderApiSearch();
  }, 250);
});

surpriseMeBtn.addEventListener("click", () => {
  const visible = normalizeItems().filter(matchesFilters);
  const pool = visible.length ? visible : normalizeItems();
  openPlayer(pool[Math.floor(Math.random() * pool.length)]);
});

document.querySelector("[data-watch-featured]").addEventListener("click", () => {
  openPlayer(getFeaturedItem());
});

copyFeaturedBtn.addEventListener("click", async () => {
  const item = getFeaturedItem();
  try {
    await navigator.clipboard.writeText(buildEmbedUrl(item));
    copyFeaturedBtn.textContent = "Copied";
    setTimeout(() => {
      copyFeaturedBtn.textContent = "Copy embed";
    }, 1400);
  } catch (error) {
    console.error("Failed to copy embed URL", error);
  }
});

renderHero();
renderTopTen();
renderGenreFilters();
renderShelves();
renderAds();
