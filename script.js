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
const openSearchBtn = document.querySelector("#openSearchBtn");
const countrySelect = document.querySelector("#countrySelect");
const closeSearchBtn = document.querySelector("#closeSearchBtn");
const closeSearchBackdrop = document.querySelector("#closeSearchBackdrop");
const clearSearchBtn = document.querySelector("#clearSearchBtn");
const searchModal = document.querySelector("#searchModal");
const searchTypeSelect = document.querySelector("#searchTypeSelect");
const searchResultsList = document.querySelector("#searchResultsList");
const searchResultsMeta = document.querySelector("#searchResultsMeta");
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
const providerGrid = document.querySelector("#providerGrid");
const topRatedGrid = document.querySelector("#topRatedGrid");
const genreGrid = document.querySelector("#genreGrid");
const copyFeaturedBtn = document.querySelector("#copyFeaturedBtn");
const emptyState = document.querySelector("#emptyState");
const resultsMeta = document.querySelector("#resultsMeta");
const browseOnlySections = document.querySelectorAll(".browse-only");
const providerTabs = document.querySelector("#providerTabs");

let activeGenre = "All";
let searchTerm = "";
let searchDebounceId = null;
let liveTopTenItems = [];
let liveTrendingMovieItems = [];
let liveTrendingSeriesItems = [];
let activeProvider = "netflix";
let latestApiItems = [];
let selectedCountry = window.localStorage.getItem("streamSphereCountry") || "US";

const countryNames = {
  US: "USA",
  IN: "India",
  CN: "China",
  GB: "UK",
  KR: "South Korea",
  JP: "Japan",
};

const providerCollections = {
  netflix: [catalog[1].items[0], catalog[1].items[2], catalog[1].items[4], catalog[1].items[1], catalog[2].items[3]],
  prime: [catalog[0].items[0], catalog[0].items[4], catalog[2].items[4], catalog[2].items[0], catalog[1].items[3]],
  max: [catalog[1].items[3], catalog[1].items[0], catalog[2].items[1], catalog[2].items[3], catalog[0].items[3]],
  disney: [catalog[0].items[2], catalog[0].items[4], catalog[0].items[0], catalog[2].items[4], catalog[2].items[1]],
  apple: [catalog[1].items[1], catalog[1].items[0], catalog[2].items[4], catalog[2].items[0], catalog[0].items[1]],
};

function normalizeItems() {
  return catalog
    .flatMap((section, sectionIndex) =>
      section.items.map((item, itemIndex) => ({
        ...item,
        addedRank: sectionIndex * 100 + itemIndex,
      }))
    );
}

function getCurrentCountryName() {
  return countryNames[selectedCountry] || selectedCountry;
}

function buildApiRoute(path, params = {}) {
  const searchParams = new URLSearchParams({ language: "en-US", ...params });
  return `https://db.videasy.net/3${path}?${searchParams.toString()}`;
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

function mapApiResultToItem(result) {
  const mediaType = result.media_type === "tv" || result.name ? "tv" : "movie";
  const title = result.title || result.name || "Untitled";
  const yearSource = result.release_date || result.first_air_date || "";
  const imagePath = result.poster_path || result.backdrop_path || "";

  return {
    title,
    mediaType,
    tmdbId: String(result.id),
    season: "1",
    episode: "1",
    year: yearSource ? yearSource.slice(0, 4) : "Unknown",
    rating: String(Number(result.vote_average || 0).toFixed(1)),
    genres: [mediaType === "movie" ? "Movie" : "Series"],
    image: imagePath
      ? `https://image.tmdb.org/t/p/w780${imagePath}`
      : "https://placehold.co/500x750/111111/f2f2f2?text=No+Image",
    overview: result.overview || "No summary available.",
    params:
      mediaType === "movie"
        ? { color: "ff6a3d", autoPlay: true }
        : { color: "ff6a3d", nextEpisode: true, episodeSelector: true },
  };
}

function openPlayer(item) {
  window.location.href = buildWatchPageUrl(item);
}

function getFeaturedItem() {
  return liveTopTenItems[0] || catalog[0].items[0];
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
  const items = (liveTopTenItems.length ? liveTopTenItems : sortLatestFirst(normalizeItems())).slice(0, 10);

  items
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
  return mapApiResultToItem(result);
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

function renderProviderShelf() {
  providerGrid.innerHTML = "";
  const items =
    activeProvider === "netflix"
      ? liveTrendingSeriesItems.length
        ? liveTrendingSeriesItems
        : providerCollections[activeProvider] || []
      : providerCollections[activeProvider] || [];

  items.forEach((item) => {
    providerGrid.appendChild(createShelfCard(item));
  });
}

function renderShelves() {
  const allItems = normalizeItems();
  const latestPool = latestApiItems.length ? latestApiItems : allItems;
  const filteredAll = sortLatestFirst(latestPool.filter(matchesFilters));

  latestGrid.innerHTML = "";
  filteredAll.forEach((item) => {
    latestGrid.appendChild(createShelfCard(item));
  });

  renderShelf(trendingGrid, liveTrendingMovieItems.length ? liveTrendingMovieItems : catalog[0].items);
  renderProviderShelf();
  renderShelf(topRatedGrid, catalog[2].items);
  renderShelf(genreGrid, allItems);

  const totalMatches = filteredAll.length;
  const totalItems = latestPool.length;
  resultsMeta.textContent = searchTerm.trim()
    ? `${totalMatches} result${totalMatches === 1 ? "" : "s"} for "${searchTerm.trim()}"`
    : `Newest titles first in ${getCurrentCountryName()} • ${totalItems} total`;

  emptyState.hidden = totalMatches !== 0;
}

async function renderApiSearch() {
  const query = searchTerm.trim();
  if (!query) {
    searchResultsList.innerHTML = "";
    searchResultsMeta.textContent = "Start typing to search the library";
    return;
  }
  searchResultsMeta.textContent = `Searching for "${query}"...`;
  searchResultsList.innerHTML = "";

  try {
    const type = searchTypeSelect.value;
    const endpoint =
      type === "movie"
        ? "movie"
        : type === "tv"
          ? "tv"
          : "multi";
    const response = await fetch(
      buildApiRoute(`/search/${endpoint}`, {
        query,
        page: "1",
        region: selectedCountry,
      })
    );

    if (!response.ok) {
      throw new Error(`Search API failed: ${response.status}`);
    }

    const payload = await response.json();
    const items = (payload.results || [])
      .map((result) => ({
        ...result,
        media_type:
          result.media_type || (type === "movie" ? "movie" : type === "tv" ? "tv" : result.media_type),
      }))
      .filter((result) => result.media_type === "movie" || result.media_type === "tv")
      .map(mapSearchResultToItem)
      .slice(0, 12);

    searchResultsMeta.textContent = `${items.length} result${items.length === 1 ? "" : "s"} for "${query}"`;

    if (!items.length) {
      searchResultsList.innerHTML = `
        <div class="search-empty-state">
          <strong>No results found</strong>
          <p>Try another title or switch between movies and TV shows.</p>
        </div>
      `;
      return;
    }

    items.forEach((item) => {
      const result = document.createElement("button");
      result.type = "button";
      result.className = "search-result-item";
      result.innerHTML = `
        <span class="search-result-poster" style="background-image:url('${item.image}')"></span>
        <span class="search-result-copy">
          <strong>${item.title}</strong>
          <span>${item.mediaType === "movie" ? "Movie" : "TV Show"} | ${item.year} | ${item.rating}</span>
          <small>${item.overview}</small>
        </span>
      `;
      result.addEventListener("click", () => openPlayer(item));
      searchResultsList.appendChild(result);
    });
  } catch (error) {
    console.error("API search failed", error);
    searchResultsMeta.textContent = `Search failed for "${query}"`;
    searchResultsList.innerHTML = `
      <div class="search-empty-state">
        <strong>Search failed</strong>
        <p>Please try again in a moment.</p>
      </div>
    `;
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

async function fetchLiveTopTen() {
  try {
    const response = await fetch(
      buildApiRoute("/trending/all/day", {
        region: selectedCountry,
      })
    );
    if (!response.ok) {
      throw new Error(`Trending API failed: ${response.status}`);
    }

    const payload = await response.json();
    liveTopTenItems = (payload.results || [])
      .filter((item) => item.media_type === "movie" || item.media_type === "tv")
      .slice(0, 10)
      .map(mapApiResultToItem);

    return liveTopTenItems;
  } catch (error) {
    console.error("Unable to refresh Top 10 from API", error);
    return [];
  }
}

async function fetchLiveTrendingMovies() {
  try {
    const response = await fetch(
      buildApiRoute("/trending/movie/day", {
        region: selectedCountry,
      })
    );
    if (!response.ok) {
      throw new Error(`Trending movies API failed: ${response.status}`);
    }

    const payload = await response.json();
    liveTrendingMovieItems = (payload.results || []).slice(0, 10).map(mapApiResultToItem);
    return liveTrendingMovieItems;
  } catch (error) {
    console.error("Unable to refresh Trending Today from API", error);
    return [];
  }
}

async function fetchLiveTrendingSeries() {
  try {
    const response = await fetch(
      buildApiRoute("/trending/tv/day", {
        region: selectedCountry,
      })
    );
    if (!response.ok) {
      throw new Error(`Trending TV API failed: ${response.status}`);
    }

    const payload = await response.json();
    liveTrendingSeriesItems = (payload.results || []).slice(0, 10).map(mapApiResultToItem);
    return liveTrendingSeriesItems;
  } catch (error) {
    console.error("Unable to refresh Featured Series from API", error);
    return [];
  }
}

async function fetchLatestByCountry() {
  try {
    const [movieResponse, tvResponse] = await Promise.all([
      fetch(
        buildApiRoute("/discover/movie", {
          sort_by: "primary_release_date.desc",
          region: selectedCountry,
          page: "1",
        })
      ),
      fetch(
        buildApiRoute("/discover/tv", {
          sort_by: "first_air_date.desc",
          with_origin_country: selectedCountry,
          page: "1",
        })
      ),
    ]);

    if (!movieResponse.ok || !tvResponse.ok) {
      throw new Error(`Latest API failed: ${movieResponse.status}/${tvResponse.status}`);
    }

    const [moviePayload, tvPayload] = await Promise.all([
      movieResponse.json(),
      tvResponse.json(),
    ]);

    latestApiItems = [...(moviePayload.results || []), ...(tvPayload.results || [])]
      .filter((item) => item.id)
      .map((item) => ({
        ...item,
        media_type: item.media_type || (item.title ? "movie" : "tv"),
      }))
      .map(mapApiResultToItem)
      .map((item, index) => ({
        ...item,
        addedRank: 1000 - index,
      }))
      .slice(0, 24);

    return latestApiItems;
  } catch (error) {
    console.error("Unable to load latest titles by country", error);
    latestApiItems = [];
    return [];
  }
}

function renderHomepage() {
  renderHero();
  renderTopTen();
  renderGenreFilters();
  renderShelves();
}

async function initHomepage() {
  countrySelect.value = selectedCountry;
  renderAds();

  await Promise.allSettled([
    fetchLatestByCountry(),
    fetchLiveTopTen(),
    fetchLiveTrendingMovies(),
    fetchLiveTrendingSeries(),
  ]);

  renderHomepage();

  window.setInterval(async () => {
    await fetchLatestByCountry();
    renderShelves();
  }, 30 * 60 * 1000);

  window.setInterval(async () => {
    await fetchLiveTopTen();
    renderHero();
    renderTopTen();
  }, 30 * 60 * 1000);

  window.setInterval(async () => {
    await fetchLiveTrendingMovies();
    renderShelves();
  }, 30 * 60 * 1000);

  window.setInterval(async () => {
    await fetchLiveTrendingSeries();
    renderShelves();
  }, 30 * 60 * 1000);
}

function openSearchModal() {
  searchModal.hidden = false;
  document.body.classList.add("modal-open");
  setTimeout(() => {
    searchInput.focus();
  }, 0);
}

function closeSearchModal() {
  searchModal.hidden = true;
  document.body.classList.remove("modal-open");
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  clearTimeout(searchDebounceId);
  searchDebounceId = setTimeout(() => {
    renderApiSearch();
  }, 250);
});

searchTypeSelect.addEventListener("change", () => {
  if (searchTerm.trim()) {
    renderApiSearch();
  }
});

openSearchBtn.addEventListener("click", openSearchModal);
closeSearchBtn.addEventListener("click", closeSearchModal);
closeSearchBackdrop.addEventListener("click", closeSearchModal);
clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  searchResultsList.innerHTML = "";
  searchResultsMeta.textContent = "Start typing to search the library";
  searchInput.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !searchModal.hidden) {
    closeSearchModal();
  }
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

providerTabs.querySelectorAll("[data-provider]").forEach((button) => {
  button.addEventListener("click", () => {
    activeProvider = button.dataset.provider;
    providerTabs.querySelectorAll("[data-provider]").forEach((tab) => {
      tab.classList.toggle("is-active", tab === button);
    });
    renderProviderShelf();
  });
});

countrySelect.addEventListener("change", async (event) => {
  selectedCountry = event.target.value;
  window.localStorage.setItem("streamSphereCountry", selectedCountry);
  latestApiItems = [];
  liveTopTenItems = [];
  liveTrendingMovieItems = [];
  liveTrendingSeriesItems = [];

  await Promise.allSettled([
    fetchLatestByCountry(),
    fetchLiveTopTen(),
    fetchLiveTrendingMovies(),
    fetchLiveTrendingSeries(),
  ]);

  renderHomepage();

  if (searchTerm.trim()) {
    renderApiSearch();
  }
});

initHomepage();
