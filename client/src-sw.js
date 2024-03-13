// removed the offline fallback since it is not being used 
const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
// callback function telling the route how to handle css, js, and service files
//https://developer.chrome.com/docs/workbox/modules/workbox-routing#how_routing_is_performed
registerRoute(({ request }) => ['style', 'script','worker'].includes(request.destination), new StaleWhileRevalidate({
  cacheName: 'asset-cache',
  plugins: [new CacheableResponsePlugin({
    statuses: [0, 200],
  }),],
}));
