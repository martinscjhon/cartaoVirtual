const CACHE_NAME = 'oser-cache';
const urlsToCache = [
    '/',
    'main.js'
]

//evento para instalar o pwa na área dde trabalho
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1')
        .then(function(cache){
            console.log('Opened cache');
            return cache.addAll(urlsToCache)
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
})


//evento para funcionar offline
self.addEventListener('fetch' , event => {
    event.responWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
        })
    );
});