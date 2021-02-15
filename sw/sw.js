importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
const {NetworkOnly} = workbox.strategies;
const {registerRoute, NavigationRoute} = workbox.routing;
const {navigationPreload} = workbox;

const CACHE_NAME = 'offline-html';
const FALLBACK_HTML_URL = '%BASE_URL%/assets/offline.html';
self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.add(FALLBACK_HTML_URL))
  );
});

navigationPreload.enable();

const networkOnly = new NetworkOnly();
const navigationHandler = async (params) => {
  try {
    return await networkOnly.handle(params);
  } catch (error) {
    return caches.match(FALLBACK_HTML_URL, {
      cacheName: CACHE_NAME,
    });
  }
};

registerRoute(
  new NavigationRoute(navigationHandler)
);