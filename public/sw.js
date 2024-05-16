if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => a(e, i),
      d = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-c06b064f"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/138-c7a2da124375de65.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/178-434b4a15ecc0f316.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/190-1619fd70a128de3f.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/260-534ec493ca611822.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/53c13509-dc117abe8876745d.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/795d4814-bffa94c0708d37c2.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/8e1d74a4-afc1ec098d54d1ad.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/92-819d68bd398bc9c2.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/9c4e2130-f6a15c72617f12f5.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-f0ac3598758ff37d.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/app/categories/%5Bslug%5D/page-eef6cfa320a2a8e4.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/app/layout-7c4e2258b8c6aa6a.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/app/not-found-95fbb628cd4e6cc8.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/app/page-a4b2d1e4f20609cd.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/app/play/%5Bslug%5D/page-a63d2445784b1007.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/dc112a36-4627e70196a7f48b.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/fd9d1056-1a6cec4e37df8ae8.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/framework-f66176bb897dc684.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/main-5124c9022d8404ca.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/main-app-d4a76084edd59e1f.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/pages/_app-6a626577ffa902a4.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/pages/_error-1be831200e60c5c0.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-c3a35d3a80743358.js",
          revision: "gn0SWdS_S9ZYVkO1SwbFt",
        },
        {
          url: "/_next/static/css/11e5fa7f116c7ac1.css",
          revision: "11e5fa7f116c7ac1",
        },
        {
          url: "/_next/static/css/9aca24ade4d84fd0.css",
          revision: "9aca24ade4d84fd0",
        },
        {
          url: "/_next/static/gn0SWdS_S9ZYVkO1SwbFt/_buildManifest.js",
          revision: "3ced21493dbab1978b75a37096fad4f1",
        },
        {
          url: "/_next/static/gn0SWdS_S9ZYVkO1SwbFt/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/media/0610ebff456d6cfc-s.woff2",
          revision: "8786f06e95694337521729d147b3f669",
        },
        {
          url: "/_next/static/media/21ed5661b47f7f6d-s.p.woff2",
          revision: "91c3bc1f55db641843550a62e39f0031",
        },
        {
          url: "/_next/static/media/8a9e72331fecd08b-s.woff2",
          revision: "f8a4d4cec8704b696ec245377c0e188e",
        },
        {
          url: "/_next/static/media/bde16c1724335d95-s.woff2",
          revision: "c56527d8c69315a82039a810338fd378",
        },
        {
          url: "/_next/static/media/e3b8d441242e07fb-s.woff2",
          revision: "8699475078b0c1b86dbe7ad907bb4e81",
        },
        {
          url: "/audio/shake-audio.mp3",
          revision: "6e916b6ee4aac09adc0458fc93fac17b",
        },
        {
          url: "/icons/action.svg",
          revision: "0c16fcf58ad979d71a2b05a5a610c68c",
        },
        {
          url: "/icons/adventure.svg",
          revision: "4420352e9492a03169845fe315753a59",
        },
        {
          url: "/icons/arcade.svg",
          revision: "0bf068a3e56f22e524531ad865ac6f52",
        },
        {
          url: "/icons/favorites.svg",
          revision: "c5c7de8deeda7d8d8a6094cd0cdc5ece",
        },
        {
          url: "/icons/featured.svg",
          revision: "e0244edf4792e2cccbb85c6de42a6e04",
        },
        {
          url: "/icons/home.svg",
          revision: "c4ef68e7bb8410afe6ebae1ab34e4e7e",
        },
        {
          url: "/icons/logo.svg",
          revision: "c42a47c15e923bd086e3d06d91c8d515",
        },
        { url: "/icons/new.svg", revision: "8e28db2968e5dcb6994edb689cc6f700" },
        {
          url: "/icons/puzzle & logic.svg",
          revision: "49292682a6cc9076960d043bb09c9694",
        },
        {
          url: "/icons/random.svg",
          revision: "eb01229aa6478e262ee57af4dc8ccca5",
        },
        {
          url: "/icons/sports & racing.svg",
          revision: "0dcd427a5365a114cb1bcd61daad5587",
        },
        {
          url: "/icons/strategy.svg",
          revision: "d66541a2e452b39f0c5de3ac9b75a122",
        },
        {
          url: "/images/forward.png",
          revision: "e15407950632fadc8da4f268e04288ac",
        },
        {
          url: "/images/square.png",
          revision: "6f62e6ae2db5e43c0345769c46a0f410",
        },
        { url: "/manifest.json", revision: "b82605fe581a898dd0d7225e4682dc1e" },
        {
          url: "/pwa-icons/logo@192.png",
          revision: "fa45cfed2fe76dac7ddca57e6ef28758",
        },
        {
          url: "/pwa-icons/logo@384.png",
          revision: "89de7315e19a51a196b48b13c4fc95ee",
        },
        {
          url: "/pwa-icons/logo@512.png",
          revision: "795a419ccf2779f016dc899425747113",
        },
        {
          url: "/swe-worker-5c72df51bb1f6ee0.js",
          revision: "5a47d90db13bb1309b25bdf7b363570e",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        a &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0);
});
