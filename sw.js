// Declarar as variáveis ou constantes necessárias para a atuação do nosso service worker
var CACHE_NAME = 'gabrielcache-cache-v1';
var urlsToCache = [
    'css/bootstrap.css',
    'js/bootstrap.js',
    'js/jquery-3.4.1.min.js',

];
self.addEventListener('install', function(event) {
        //parametrizar as etapas da instalação do nosso cache no dispositivo
        event.waitUntil(
            caches.open(CACHE_NAME).then(function(cache) {
                console.log('cache aberto')
                return cache.addAll(urlsToCache)
            })
        )
    })
    // Aqui definimios nosso evento fetch e, em event.respondWith(), passamos uma promessa de caches.match(). 
    // Esse método examina a solicitação e encontra todos os resultados armazenados em qualquer um dos caches criados pelo service worker.
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }
            var fetchRequest = event.request.clone()

            return fetch(fetchRequest).then(
                function(response) {
                    if (!response || response.status !== 200 || response.type !== 'basisc') {
                        return response
                    }
                    var responseToCache = response.clone()

                    caches.open(CACHE_NAME).then(
                        function(cache) {
                            cache.put(event.request, responseToCache)
                        }
                    )
                    return response
                }
            )
        })
    )
})

self.addEventListener('active', function(event) {
    var cacheAllowList = ['gabrielcache-cache-v1', 'gabrielcache-cache-v2']

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promisse.all(
                cacheNames.map(function(CacheName) {
                    if (cacheAllowList.indexOf(cacheName) == -1) {
                        return cache.delete(cacheName)
                    }

                })
            )
        })
    )
})