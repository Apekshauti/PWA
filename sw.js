var CACHE_NAME = 'my-site-cache-v1';
    var urlsToCache = [
    '/',
    'index.html',
];
self.addEventListener('install',function(event){
event.waitUntil(
caches.open(CACHE_NAME)
.then(function(cache){
console.log('Opened Cache');
return cache.addAll(urlsToCache);
})
)
});