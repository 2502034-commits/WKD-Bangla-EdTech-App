const CACHE_NAME = 'wkd-edtech-v1';
const assetsToCache = [
  'index.html',
  'dashboard.html',
  'math-solver.html',
  'quiz.html',
  'lessons.html',
  'video.html',
  'discussion.html',
  'parent-report.html',
  'leaderboard.html'
];

// ইনস্টল করার সময় ফাইলগুলো ক্যাশ করা
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// অফলাইন মোডে ক্যাশ থেকে পেজ লোড করা
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
