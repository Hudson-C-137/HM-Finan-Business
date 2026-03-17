const CACHE_NAME = 'salao-v1';

// Arquivos para cache básico
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        './',
        './index.html'
      ]);
    })
  );
});

// Ativação imediata
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// Responde as requisições
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});