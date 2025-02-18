self.addEventListener('install', e => {
    console.log("install event is called");
    e.waitUntil(
        caches.open('pwa-cache-v1').then(cache => {
            return cache.addAll([
                '/index.html',
                '/style.css',
                '/app.js',
                '/manifest.json',
                '/img/logo.png',
                '/img/image.webp',
                '/img/image2.webp',
                '/img/image2.png',
                '/img/icon256.png',
                '/img/icon128.png'
            ]);
        })
    );
});

self.addEventListener('activate', e => {
    console.log("activate event is called");
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== 'pwa-cache-v1') {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
