const params = new URLSearchParams(window.location.search);

const watchFrame = document.querySelector("#watchFrame");
const watchBackdrop = document.querySelector("#watchBackdrop");
const watchPoster = document.querySelector("#watchPoster");
const watchHeroCard = document.querySelector("#watchHeroCard");
const watchPlayerShell = document.querySelector("#watchPlayerShell");
const playInlineBtn = document.querySelector("#playInlineBtn");
const backToDetailsBtn = document.querySelector("#backToDetailsBtn");
const openDirectLink = document.querySelector("#openDirectLink");
const openDirectLinkInline = document.querySelector("#openDirectLinkInline");
const watchType = document.querySelector("#watchType");
const watchTitle = document.querySelector("#watchTitle");
const watchDetailTitle = document.querySelector("#watchDetailTitle");
const watchSummary = document.querySelector("#watchSummary");
const watchDetailSummary = document.querySelector("#watchDetailSummary");
const watchChips = document.querySelector("#watchChips");
const watchDetailChips = document.querySelector("#watchDetailChips");
const watchFacts = document.querySelector("#watchFacts");
const watchDetailFacts = document.querySelector("#watchDetailFacts");
const watchEvents = document.querySelector("#watchEvents");
const watchUrl = document.querySelector("#watchUrl");
const relatedHeading = document.querySelector("#relatedHeading");
const relatedMeta = document.querySelector("#relatedMeta");
const relatedGrid = document.querySelector("#relatedGrid");
const playInlineBtnSecondary = document.querySelector("#playInlineBtnSecondary");
const openDirectLinkDetail = document.querySelector("#openDirectLinkDetail");
const adConfig = window.streamSphereConfig?.adConfig || {
  provider: "placeholder",
  enableAutoAds: false,
  adsense: { client: "", slots: {} },
  custom: {},
};

const mediaType = params.get("type") || "movie";
const tmdbId = params.get("tmdbId") || "";
const season = params.get("season") || "1";
const episode = params.get("episode") || "1";
const color = params.get("color") || "ff6a3d";
const autoPlay = params.get("autoPlay") || "true";
const nextEpisode = params.get("nextEpisode") || "true";
const episodeSelector = params.get("episodeSelector") || "true";
const progress = params.get("progress") || "";
let playerInitialized = false;

function buildEmbedUrl() {
  const base =
    mediaType === "movie"
      ? `https://www.vidking.net/embed/movie/${tmdbId}`
      : `https://www.vidking.net/embed/tv/${tmdbId}/${season}/${episode}`;

  const embedParams = new URLSearchParams();
  if (color) embedParams.set("color", color);
  if (autoPlay) embedParams.set("autoPlay", autoPlay);
  if (mediaType === "tv" && nextEpisode) embedParams.set("nextEpisode", nextEpisode);
  if (mediaType === "tv" && episodeSelector) embedParams.set("episodeSelector", episodeSelector);
  if (progress) embedParams.set("progress", progress);

  return `${base}?${embedParams.toString()}`;
}

async function fetchMetadata() {
  if (!tmdbId) {
    throw new Error("Missing tmdbId in watch page URL.");
  }

  const dbBase = "https://db.videasy.net/3";

  if (mediaType === "movie") {
    const response = await fetch(`${dbBase}/movie/${tmdbId}?language=en-US`);
    if (!response.ok) {
      throw new Error(`Movie metadata request failed: ${response.status}`);
    }
    return response.json();
  }

  const showResponse = await fetch(`${dbBase}/tv/${tmdbId}?language=en-US`);
  if (!showResponse.ok) {
    throw new Error(`TV metadata request failed: ${showResponse.status}`);
  }

  const episodeResponse = await fetch(
    `${dbBase}/tv/${tmdbId}/season/${season}/episode/${episode}?language=en-US`
  );
  if (!episodeResponse.ok) {
    throw new Error(`Episode metadata request failed: ${episodeResponse.status}`);
  }

  const showData = await showResponse.json();
  const episodeData = await episodeResponse.json();
  return { showData, episodeData };
}

async function fetchRelatedByGenre(genreId) {
  if (!genreId) {
    return [];
  }

  const route =
    mediaType === "movie"
      ? `https://db.videasy.net/3/discover/movie?language=en-US&sort_by=popularity.desc&with_genres=${genreId}&page=1`
      : `https://db.videasy.net/3/discover/tv?language=en-US&sort_by=popularity.desc&with_genres=${genreId}&page=1`;

  const response = await fetch(route);
  if (!response.ok) {
    throw new Error(`Genre discover request failed: ${response.status}`);
  }
  const payload = await response.json();
  return payload.results || [];
}

async function fetchRecommendations() {
  const route =
    mediaType === "movie"
      ? `https://db.videasy.net/3/movie/${tmdbId}/recommendations?language=en-US&page=1`
      : `https://db.videasy.net/3/tv/${tmdbId}/recommendations?language=en-US&page=1`;

  const response = await fetch(route);
  if (!response.ok) {
    throw new Error(`Recommendations request failed: ${response.status}`);
  }
  const payload = await response.json();
  return payload.results || [];
}

function renderChips(entries) {
  watchChips.innerHTML = "";
  watchDetailChips.innerHTML = "";
  entries.forEach((entry) => {
    const chip = document.createElement("span");
    chip.textContent = entry;
    watchChips.appendChild(chip);
    watchDetailChips.appendChild(chip.cloneNode(true));
  });
}

function renderFacts(entries) {
  watchFacts.innerHTML = "";
  watchDetailFacts.innerHTML = "";
  entries.forEach((entry) => {
    const fact = document.createElement("span");
    fact.textContent = entry;
    watchFacts.appendChild(fact);
    watchDetailFacts.appendChild(fact.cloneNode(true));
  });
}

function buildWatchPageUrl(item) {
  const search = new URLSearchParams({
    type: item.mediaType,
    tmdbId: item.tmdbId,
    color: item.params?.color || color,
  });

  if (item.mediaType === "tv") {
    search.set("season", item.season || "1");
    search.set("episode", item.episode || "1");
    search.set("nextEpisode", "true");
    search.set("episodeSelector", "true");
  } else {
    search.set("autoPlay", "true");
  }

  return `./watch.html?${search.toString()}`;
}

function mapRelatedItem(result) {
  const resultType = result.media_type === "tv" || mediaType === "tv" ? "tv" : "movie";
  const yearSource = result.release_date || result.first_air_date || "";
  const title = result.title || result.name || "Untitled";
  const imagePath = result.backdrop_path || result.poster_path || "";
  return {
    title,
    mediaType: resultType,
    tmdbId: String(result.id),
    season: "1",
    episode: "1",
    year: yearSource ? yearSource.slice(0, 4) : "Unknown",
    rating: String(Number(result.vote_average || 0).toFixed(1)),
    overview: result.overview || "No summary available.",
    image: imagePath
      ? `https://image.tmdb.org/t/p/w780${imagePath}`
      : "https://placehold.co/780x440/111111/f2f2f2?text=No+Image",
    params:
      resultType === "movie"
        ? { color, autoPlay: true }
        : { color, nextEpisode: true, episodeSelector: true },
  };
}

function renderRelatedItems(items) {
  relatedGrid.innerHTML = "";

  items.forEach((item) => {
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
    card.querySelector("button").addEventListener("click", () => {
      window.location.href = buildWatchPageUrl(item);
    });
    relatedGrid.appendChild(card);
  });
}

async function loadRelatedTitles(primaryGenre) {
  relatedMeta.textContent = "Loading suggestions...";

  try {
    let items = [];

    if (primaryGenre?.id) {
      items = await fetchRelatedByGenre(primaryGenre.id);
    }

    if (!items.length) {
      items = await fetchRecommendations();
    }

    const mapped = items
      .filter((item) => String(item.id) !== String(tmdbId))
      .slice(0, 10)
      .map(mapRelatedItem);

    relatedHeading.textContent = primaryGenre?.name
      ? `More ${primaryGenre.name} titles`
      : "Related titles";
    relatedMeta.textContent = mapped.length
      ? `${mapped.length} suggestions`
      : "No related titles found";

    renderRelatedItems(mapped);
  } catch (error) {
    console.error("Related titles failed", error);
    relatedHeading.textContent = "Related titles";
    relatedMeta.textContent = "Unable to load suggestions";
    relatedGrid.innerHTML = "";
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

    slotNode.innerHTML = `
      <div>
        <strong>${slotName} ad slot</strong>
        <p>For AdSense, add your real publisher and slot IDs in <code>config.js</code>.</p>
      </div>
    `;
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

function openInlinePlayer() {
  if (!playerInitialized) {
    watchFrame.src = buildEmbedUrl();
    playerInitialized = true;
  }
  watchHeroCard.hidden = true;
  watchPlayerShell.hidden = false;
  watchPlayerShell.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showDetailBanner() {
  watchPlayerShell.hidden = true;
  watchHeroCard.hidden = false;
}

async function initWatchPage() {
  const embedUrl = buildEmbedUrl();
  openDirectLink.href = embedUrl;
  openDirectLinkInline.href = embedUrl;
  openDirectLinkDetail.href = embedUrl;
  watchUrl.textContent = embedUrl;
  watchType.textContent = mediaType === "movie" ? "Movie stream" : "TV episode stream";

  try {
    const metadata = await fetchMetadata();

    if (mediaType === "movie") {
      watchTitle.textContent = metadata.title;
      watchDetailTitle.textContent = metadata.title;
      watchSummary.textContent = metadata.overview || "No summary returned by the metadata API.";
      watchDetailSummary.textContent = metadata.overview || "No summary returned by the metadata API.";
      if (metadata.backdrop_path) {
        watchBackdrop.style.backgroundImage = `linear-gradient(180deg, rgba(7, 11, 18, 0.15), rgba(7, 11, 18, 0.94)), url(https://image.tmdb.org/t/p/original${metadata.backdrop_path})`;
      }
      if (metadata.poster_path) {
        watchPoster.style.backgroundImage = `url(https://image.tmdb.org/t/p/w780${metadata.poster_path})`;
      }
      renderFacts([
        metadata.release_date ? metadata.release_date.slice(0, 4) : "Unknown year",
        metadata.runtime ? `${metadata.runtime} min` : "Runtime unavailable",
        `TMDB ${metadata.id}`,
      ]);
      renderChips((metadata.genres || []).map((genre) => genre.name));
      await loadRelatedTitles(metadata.genres?.[0]);
      return;
    }

    watchTitle.textContent = `${metadata.showData.name} • S${season}E${episode}`;
    watchDetailTitle.textContent = `${metadata.showData.name} • S${season}E${episode}`;
    watchSummary.textContent =
      metadata.episodeData.overview || "No episode summary returned by the metadata API.";
    watchDetailSummary.textContent =
      metadata.episodeData.overview || "No episode summary returned by the metadata API.";
    if (metadata.showData.backdrop_path) {
      watchBackdrop.style.backgroundImage = `linear-gradient(180deg, rgba(7, 11, 18, 0.15), rgba(7, 11, 18, 0.94)), url(https://image.tmdb.org/t/p/original${metadata.showData.backdrop_path})`;
    }
    if (metadata.showData.poster_path) {
      watchPoster.style.backgroundImage = `url(https://image.tmdb.org/t/p/w780${metadata.showData.poster_path})`;
    }
    renderFacts([
      metadata.showData.first_air_date
        ? metadata.showData.first_air_date.slice(0, 4)
        : "Unknown year",
      metadata.episodeData.runtime ? `${metadata.episodeData.runtime} min` : `S${season} • E${episode}`,
      `TMDB ${metadata.showData.id}`,
    ]);
    renderChips((metadata.showData.genres || []).map((genre) => genre.name));
    await loadRelatedTitles(metadata.showData.genres?.[0]);
  } catch (error) {
    console.error(error);
    watchTitle.textContent = "Unable to load metadata";
    watchDetailTitle.textContent = "Unable to load metadata";
    watchSummary.textContent =
      "The embed URL was still generated, but the metadata API request failed. Serve the site over HTTP and confirm the ID is valid.";
    watchDetailSummary.textContent =
      "The embed URL was still generated, but the metadata API request failed. Serve the site over HTTP and confirm the ID is valid.";
    renderFacts(["Check TMDB ID", "Serve over HTTP", "See console"]);
    renderChips(["Metadata unavailable"]);
    relatedMeta.textContent = "Unable to load suggestions";
  }
}

window.addEventListener("message", (event) => {
  if (typeof event.data !== "string") {
    return;
  }

  try {
    watchEvents.textContent = JSON.stringify(JSON.parse(event.data), null, 2);
  } catch (_error) {
    watchEvents.textContent = event.data;
  }
});

renderAds();
playInlineBtn.addEventListener("click", openInlinePlayer);
playInlineBtnSecondary.addEventListener("click", openInlinePlayer);
backToDetailsBtn.addEventListener("click", showDetailBanner);
initWatchPage();
