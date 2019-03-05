self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open("odvlhcovac-vzduchu.cz")
      .then(cache =>
        cache.addAll([
          "./favicon.ico",
          "./index.css",
          "./fonts/Roboto-Black.ttf",
          "./fonts/Roboto-Regular.ttf"
        ])
      )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        //we found an entry in the cache!
        return response;
      }
      return fetch(event.request);
    })
  );
});
