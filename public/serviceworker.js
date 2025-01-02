const cacheName = "heroeshelper-v1";

const cacheableExtensions = [".png", ".jpg", ".ico", ".js", ".css", ".woff2", ".webp"];

const isStaticFile = url => cacheableExtensions.some(ext => url.endsWith(ext));
const isHttpRequest = url => url.startsWith("http");

const putInCache = async (request, response) => {
    const cache = await caches.open(cacheName);
    await cache.put(request, response);
};

const cacheFirst = async request => {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
        return responseFromCache;
    }
    const responseFromNetwork = await fetch(request);
    if (responseFromNetwork.status === 200) putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
};

self.addEventListener("fetch", event => {
    if (isHttpRequest(event.request.url) && isStaticFile(event.request.url))
        event.respondWith(cacheFirst(event.request));
});
