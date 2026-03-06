// Service Worker Dasar untuk memicu PWA Install Prompt
const CACHE_NAME = 'som-app-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Harus ada listener fetch walau kosong agar lolos syarat PWA
self.addEventListener('fetch', (event) => {
    // Abaikan fetch khusus url dengan ekstensi yg tidak perlu di cache
});
