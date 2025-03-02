const CACHE_NAME = "harvestify-cache-v1";
const urlsToCache = [
  "/",
  "/static/style.css",
  "/static/icons/icon-192x192.png",
  "/static/icons/icon-512x512.png"
  // Add other static files you want cached
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
