# StreamSphere

Static streaming-style movie website prototype with:

- A Netflix-inspired landing page and content rows
- VidKing embed support for movies and TV episodes
- Built-in ad placements for AdSense or custom ad code
- A dedicated watch page with player-side ad slots and event tracking

## Files

- `config.js`: shared ad provider and AdSense slot configuration
- `index.html`: homepage structure and sections
- `styles.css`: responsive design and visual styling
- `script.js`: catalog data, filtering, watch-page navigation, and homepage ad rendering
- `watch.html`: dedicated movie and TV player page
- `watch.js`: metadata loading, player-page ads, and event tracking

## Run locally

Open `index.html` directly in a browser, or serve the folder with:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## VidKing integration

This prototype uses the public embed patterns exposed on VidKing:

- `https://www.vidking.net/embed/movie/{tmdbId}`
- `https://www.vidking.net/embed/tv/{tmdbId}/{season}/{episode}`

Publicly visible URL params on their docs/site include:

- `color`
- `autoPlay`
- `nextEpisode`
- `episodeSelector`
- `progress`

The site also listens for `window.postMessage` events from the player and shows them in the sidebar.

## AdSense setup

In `config.js`, update:

```js
window.streamSphereConfig = {
  adConfig: {
    provider: "adsense",
    enableAutoAds: true,
    adsense: {
      client: "ca-pub-your-real-id",
      slots: {
        leaderboard: "your-slot-id",
        inline: "your-slot-id",
        sidebar: "your-slot-id",
        watchTop: "your-slot-id",
        watchRail: "your-slot-id",
      },
    },
  },
};
```

After that, the page will inject the AdSense loader script and render the configured ad units.

If you want an ad experience when someone enters the movie page, the safer AdSense approach is to:

- Place standard AdSense units on `watch.html`
- Turn on Auto Ads in AdSense
- Enable vignette ads in your AdSense dashboard so Google can show full-screen ads between page loads

## Important policy note

Use ads only with legitimate user traffic and policy-compliant content. Do not click your own ads, buy fake traffic, or encourage ad clicks. That can trigger invalid-traffic enforcement and get an AdSense account disabled.

Also, be careful with AdSense on pages centered around embedded third-party streaming players. Google's publisher policies prohibit monetizing content that infringes copyright, and their program policies also prohibit placing AdSense on pages that frame other content without permission. If the movie/TV streams are not licensed to you, or the page is primarily a framed external player, AdSense approval or continued serving may fail.
