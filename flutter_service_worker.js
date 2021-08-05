'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "11ebaf3f6a6952498734caea9298919d",
"assets/assets/203553.jpg": "ecb7242db5f0d43b09fdaf24a3309ab3",
"assets/assets/23.jpg": "03d01323b71e1a03960f89f2a61f104a",
"assets/assets/2636555.jpg": "7f135ca9602b8c0b1101b3bd0efcea4e",
"assets/assets/bb.png": "838b770c2db72833be7247f328c019cf",
"assets/assets/blog.png": "599e0917cccb146774c07bf98488c216",
"assets/assets/blogf.png": "f416eeb84d8da59ff7df7cc8e8ff5143",
"assets/assets/blogfinal.png": "0fd317d3eb4c9b0b9045db07ba8b6693",
"assets/assets/blogfinal1.png": "a7acee3984ced3288ec467b2081872d1",
"assets/assets/blogwithtext.png": "4b1382a5c927ebfa29abfe00c95e1b50",
"assets/assets/facebook-round-color.png": "29e884d5b638bc3f46801a2be2fd7e1a",
"assets/assets/github.png": "1598fbffd467d3dd9f8e43d20254edcb",
"assets/assets/HP.png": "7e7babad6223403d168a9ae596ea22aa",
"assets/assets/icons8-hacker-64.png": "31a5a70e9bb76ed679c9f6841573cc6e",
"assets/assets/images.jpg": "115b255fe41e746219d70e3832771d27",
"assets/assets/linkedin-square-color.png": "c8b3614447a287a5251f6e3f80be1fb2",
"assets/assets/medium.png": "a6b7120c1ed2628e53a8a0841ed59ed8",
"assets/assets/p.png": "eac7fbba52e415c100a7327701e4191f",
"assets/assets/portf.png": "9c1f0a355b3ed951b97c0bd77303a7ad",
"assets/assets/pp.png": "2f5981247f991f03b7bf7cf8b88aaa5a",
"assets/assets/prof.png": "e6584cc1b531416a73024b2726ed46fb",
"assets/assets/Profile1.png": "c40f686558291c21314ad58382ab30ef",
"assets/assets/Profile2.png": "fbd8ade67028084fa8df1539666d7390",
"assets/assets/Profile3.png": "34cc2b4a07aecc9337905c058fcb7655",
"assets/assets/profilefinal.png": "90751ad209be0c2c7a4b166752614d4a",
"assets/assets/profilepic.jpg": "8e24013fa00c2d711239675dad5bead3",
"assets/assets/projects123.png": "f4d93b27f512e250e30d31ba47e3cf61",
"assets/assets/projectsfinal.png": "8bbcc49130d71a2ccd7e4f723fba9d8e",
"assets/assets/projectsfinal1.png": "3ec687137c322c08e8044d945cb13b56",
"assets/assets/projectsfinal2.png": "80750a1b5c752b6642e4030eb1919cd9",
"assets/assets/ss2.jpg": "82693a6e49538b74aad71bd47e8d6b93",
"assets/assets/ss3.jpg": "e771ee1d607bdcb16e9e4a52e7716b4c",
"assets/assets/test.png": "5341b47b76b59871ab72508ed76aa3e8",
"assets/assets/twitter-color.png": "3c9bb1883ea58779597c86fb1b2232d2",
"assets/assets/youtube-color.png": "6cd8ec3bac97870dbf0fcfbcd3513930",
"assets/FontManifest.json": "ce3ef14f94a76d3a27cc7b021b38f4d1",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "6abef29286e4dcd69e2ca3d4f9411959",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_auth_buttons/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/flutter_auth_buttons/fonts/SF-Pro-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_black.png": "9beaf6539a3cff54ae8da57e86af4ad4",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_white.png": "37fd17b6b4006b45d337e5f875fd45f6",
"assets/packages/flutter_auth_buttons/graphics/flogo-HexRBG-Wht-100.png": "5037e86e017c472bb7f66d991a97d57a",
"assets/packages/flutter_auth_buttons/graphics/google-logo.png": "6937ba6a7d2de8aa07701225859ae402",
"assets/packages/flutter_auth_buttons/graphics/ms-symbollockup_mssymbol_19.png": "0c29638c7558632a1a5f053d344405ba",
"assets/packages/flutter_auth_buttons/graphics/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e5661d1965aa683da3c52781e53f3482",
"/": "e5661d1965aa683da3c52781e53f3482",
"main.dart.js": "25b26c378633f404193a3674ab5cc389",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
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
