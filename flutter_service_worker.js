'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "71f086fd1d000c72806091c3c1fa27b3",
"index.html": "b71f1d4f2f0df847a39e62adf81b97ac",
"/": "b71f1d4f2f0df847a39e62adf81b97ac",
"main.dart.js": "ba6aa1ecce5b77b098cd7b3e1844a539",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b5ef4ce16b1829399e37e174f12b2ac",
"assets/AssetManifest.json": "1762877a276f8c1fb295ea46b1c1aeff",
"assets/NOTICES": "6e8a04c37df8ec3922e3cc326dab4bbc",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/Fire_Icon.png": "6eca375fa3554189a415351a967a6c48",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/kingdom/8.png": "cc72633f7a888278e68518f7c0c774f6",
"assets/assets/images/kingdom/9.png": "e5c56026e930b404044fdc9c3daf9ac6",
"assets/assets/images/kingdom/14.png": "85218c2b852bafba63fb45d745bff836",
"assets/assets/images/kingdom/15.png": "298d02c276113ccbc6a6132526cb9abb",
"assets/assets/images/kingdom/12.png": "15a0b005bfbde4d07fac676ef5e996fe",
"assets/assets/images/kingdom/13.png": "29c1da05553b6739bee619bbd8a02ff4",
"assets/assets/images/kingdom/11.png": "09b48752cbc13336a2a5af23bf062012",
"assets/assets/images/kingdom/10.png": "40469c111c5e8cc7ba814dc9ba13bc3b",
"assets/assets/images/kingdom/4.png": "04b4772d37f872690175cdd724ebeb95",
"assets/assets/images/kingdom/5.png": "53a32206da6045e231ed39f33d90cec0",
"assets/assets/images/kingdom/7.png": "6eee755970fd216b7ab4c749c60db81a",
"assets/assets/images/kingdom/6.png": "3fd4045f20d689cf870c6242c4c87616",
"assets/assets/images/kingdom/2.png": "5af539c4858e8ff96d779feffcb3247f",
"assets/assets/images/kingdom/3.png": "64d5fde1acb91898cd2774dad6eb677a",
"assets/assets/images/kingdom/1.png": "6ad37647c211d4c5c2a4ad610ef8514d",
"assets/assets/images/Fire.png": "a8704fe5c405afa7cca28d2eaa3e73a3",
"assets/assets/images/Energy.png": "ace4db565be881ee0cb61fb67a07311e",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/Guide.png": "c0bc412a4410d82d2beeb9f1c203354e",
"assets/assets/images/Water_Icon.png": "b5eb8a71970fb107223752d9f3c8e02d",
"assets/assets/images/Wind_Icon.png": "7f483d8b017b14d92feeee551dd92eff",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/Wind.png": "cb5221a29c58aa759d06929cfcf960db",
"assets/assets/images/Stone.png": "b15fc31fd80c11593fb61f90d5b61c9c",
"assets/assets/images/Wisdom.png": "89986e497fb4d627621781ef19298422",
"assets/assets/images/logo.png": "b3554deccedd288733b340376d44b2ca",
"assets/assets/images/Earth_Icon.png": "f321f2213f2abd3abbf92e6be7877a24",
"assets/assets/images/Water.png": "7f59db408c6d1aaf31f46e300e105cff",
"assets/assets/images/Nature.png": "a3ace265b64847fd6632b39614be65e3",
"assets/assets/images/boarder.png": "fe8129e04597b0048bb6b2a6234362ac",
"assets/assets/images/Art.png": "2d0d0ffcd22e654744a9c35e22f69b6d",
"assets/assets/images/Security.png": "c8f0360d069f3aa0a1377d83ad5426ea",
"assets/assets/images/Economy.png": "863478eafa97ad3b9e8aafacbbf2b024",
"assets/assets/images/Back.png": "ab1b47c288228422f0165412c2a6468c",
"assets/assets/images/Back_Card.jpeg": "fd3aafe9d4cb3cda62e0efd8b63dd0e0",
"assets/assets/animations/background.json": "9781afdd877bffbc903778a469e6c81e",
"assets/assets/animations/gameOver.json": "3c7155d4bbb0942539761bffa10d729e",
"assets/assets/animations/background1.json": "c784683675efb0caa99adefad8d616ae",
"assets/assets/animations/spaceCoffee.riv": "b0663435de371a7bce0b0231add5f583",
"assets/assets/animations/798-1554-tree-demo.riv": "9ec4af3b2d2752d2b6dd9a58c5a21aac",
"assets/assets/animations/gameController.json": "b0aa3468915cc700fc17e9119eec2be3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
