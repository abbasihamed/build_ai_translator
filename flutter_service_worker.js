'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b793378aa1c294f23fe2f8c64ad2da2d",
".git/config": "e641ae87529518cf9b715ed3aad6717e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a23455bc9412bd7dec69aa220d58fab6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b49401d0ac7a052f0f014219348d6ad",
".git/logs/refs/heads/main": "0b49401d0ac7a052f0f014219348d6ad",
".git/logs/refs/remotes/origin/main": "c8801b2c56c1f644084f2558359882c3",
".git/objects/06/07088afab9cc3d445ccfcd587734ece923729f": "3b886258f863f039249baa50b6478d1a",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0c/88d921833d3f668bedba511ea1869155ff6e74": "0bb55bfb4394dc4c196e3ebef1a48145",
".git/objects/10/d2c389a197647771cc8ed3f6a5091840273b0e": "419330fc24504567a1f83634b6695c16",
".git/objects/11/13864109816db219c9684ab77314b3cbf4e388": "d98caafd6459e2922a9e3a6f28667287",
".git/objects/14/3d5fe92bd53e5ff16551b774f6ce1d9a3bacfc": "1f99a3d3953182135cb73ff04455b44e",
".git/objects/15/487f14227f0c18a07dd430ba6a68807086c9e8": "88870e06bae87299184caf60ddea5836",
".git/objects/16/a473cb359f815ea28e1c95d3fbde3223a80219": "88bb4b49d9d173e88923be5780279439",
".git/objects/18/ead9d360ad305b1c665b961db6ca5a11d3263e": "a5e12c922e9b4fe43d354031530bfd50",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/21/83159577dcf27f1003c97b83c28f2dd9433587": "ae222982283642673ce5430a4478bfc3",
".git/objects/24/b04926693d466e0a48119810fc58d69bb9df9c": "0e4f3c623af68b18c084659ae435dbe5",
".git/objects/27/33b760edfc6eeaa1ce7574cc23fb77fc1d2040": "a0431e1cf6a98a8d0c95bd62132fff0c",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/ccacab914a65b83e5ff8f9391fa91478b38d62": "153fd73fa7fd38787c8c7299d200cafe",
".git/objects/2f/0bc87b100092b5645a7aa2849e958b4ec92713": "4a4def88202491cec444e9638a64e714",
".git/objects/31/72441f2ebd1d9980127c67df4b88a0bcc048b0": "05c61fdfacc4228d375d39fed4833e43",
".git/objects/31/ad41c8177358e296c26e5bc6197336f05155ce": "4be599d279809d14dd7f37b23da4f55d",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3b/4d372908f16fd7e31c8de84ac32b3f2ce8f6ec": "a991e11c4556fafbc1b287975fc034fe",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/cd63709aabf7177f96204fa903aa4bc7645450": "92525928ce3767567a5256986f642eae",
".git/objects/3d/c2ee44c63aae71c5eaa0478ea5a28f9609534b": "e79f478c91e2062e16ff5b17f71fd1ae",
".git/objects/3e/addcd35e45ed601a6f75d470528257d72ccb55": "77f3de3be3b1ecc53e771b6aef7f0094",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/2ab738169af48e4d345b317e919728f742858a": "24833f279506ef39d3d5ad1965de0786",
".git/objects/44/93bbfd8c80bdacd6976623741c4fe975dfce7a": "a11537c07ffe7b71009822db5f3e36ac",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/77daf81bd3e019ecae257404ffe998f18e6e44": "2c7b28166fc3677d53c97cb61eaa716c",
".git/objects/48/9ef008a9049d3eeca13d7e9cbc39266533b313": "fde7a58365225fc69a3afb76e53b898b",
".git/objects/4a/bea5cd0d3ac66f9829989accce41cb2ba90c46": "17e359bf3791bb2b7d99953f8f95aba9",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/54/0ffb60a62408ab7da782702f28982722174433": "892891b42b516a01c26bbe7808a3d84d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/09d8b3a35af28551335e7290b2d6a03c341431": "eb8cf58aedccfe34729475ad3b95f131",
".git/objects/59/6b5ef06be4f0997498dc249b449ae28f8c2b14": "5d3de8b95a8f6420864693df639c6029",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/dc8f31150e93912c19a052a94c82faed055185": "8ee400896885cf27b556938060859f74",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/76/da866be96e56053020007b552bf5ba33ffb1e1": "84fb374a8b852316c09e5ec25aaad33d",
".git/objects/77/47f6ebf5f83c71015b01557528408cc2304b35": "dc7ca206ea0684c174255ceb3ee2f25b",
".git/objects/77/c5ece60ad67474c48079f7b075cf1695be6175": "8af8b9578889a241d8271a6611344f04",
".git/objects/79/ae5422d44e6305b5078294f2f25af44bb2c421": "5d9ee2e869dbb653562f0ddf9e3c72bf",
".git/objects/80/cf4f0836c5cb5edc271e23ac5c7a265c2a9279": "b8f1f27b9a84c728e8e53775bdffe805",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/85311c1b302581a90de65892484e654812c4d1": "d2fb2b87fbf7dfcd73711413bec2cb80",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/cb8e0306d904e7932b943a9701a9d8258e2885": "284aea4e58060504f17cfed3d750ba3d",
".git/objects/99/1927f9ef8bfd6868960d3a218a692963af3891": "521ff9c268ea1d9fc805eef9736181f0",
".git/objects/a2/86e161ab3e089ada41081296b78aeae2670cb1": "66698de614140089c904742ce2982117",
".git/objects/a2/dbfc5af8485943b92979b007f940d71c24ab48": "e812d827e87c24fde7712db9517a0270",
".git/objects/a5/530c25b9e25022fe8d924de95b6f785d6c7609": "05ff8f37b341d8fff4c01df2791f34af",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ab/40bd254f93827f07fa4703ef41e3bb4d710008": "a22d3257d52bd5035d628726c3604de9",
".git/objects/af/cca74d1de2158ec1ecd152c0594c4cc1bd22c7": "94dd79da40717ce872a10210d6376599",
".git/objects/b1/0bd822108c93d7b2ee59dd045574bfd63b4979": "09e094811566c4d75506acc9e9020a2d",
".git/objects/b4/599b03982e5aad0b3f30caf26064690eac3ff2": "4ee7bafeed8d80f6584d0938d20bf833",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/7cd5cb03d358f73c410223f822fcadbab48daf": "c23a52eb538eeffa4b01a39483bcfcc7",
".git/objects/bc/7724ca0f8457faec8d0e401d66e9c6d625f6f4": "14f5998d9be927ce426d13949cc90081",
".git/objects/bf/a1a103b7df07e63f5c5794c3405e853acbb0a9": "e293aa80ab1fa52132a2825551e853a0",
".git/objects/c3/896b11ded23ae03456b907ea695a33777ba798": "f0592cdb1ca5f622d1b047858a7c90c8",
".git/objects/c5/8b0e4bd2d24ef2cc33e34c6143d9d341d79bfa": "d16747197f143b34699a218819bcdc87",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/d2/0bb5eecd9cedcc3f6b726461ff6368e6054f6b": "0f7f465c974fb9955224dae1dfa5c1bb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e5/24b76a71128cb3fbd4d5ec881829d08b37ea90": "aa5ba191b670aafe308e8efe4e093912",
".git/objects/e7/3098c53b4040746e2ce2772b3530f901b9efd2": "49db6a827e060793c5f73dbda55a77bb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/31c2d87d74c105f73b65e3876fe59bfdb0525d": "8a911dc30c6822bf12f35182d4b4791b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f3b0922f53e3dde0973ff3f080d8211b516b63": "325f23db1219cafdc23969bf4851214d",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/b4e58add4cc9aeb1a2685b470feb045ed92110": "4f54f81fc0ed5f287cab53b16993477b",
".git/objects/fc/abc23b9e650a997607f6cf0c6b64d6b16f14fb": "419604743072f6d8a9cd63c7dc2645c3",
".git/objects/fe/e0c318aff8cc32cbf36fca090a0b9debf7f3b1": "5707156c6f2a3ecb3ba498c726d56f4a",
".git/refs/heads/main": "b949a0d41ed4282feffc771998c5c8d7",
".git/refs/remotes/origin/main": "b949a0d41ed4282feffc771998c5c8d7",
"assets/AssetManifest.bin": "b7d481147721115f5bf1c07a29b5b679",
"assets/AssetManifest.bin.json": "bbcc09fa7cc283d30870a013530b0e49",
"assets/AssetManifest.json": "06c86050c05cef0b208e79e2fb35d0be",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "89333b137bc929722197ce7d092f71ff",
"assets/NOTICES": "0e06302b5f170bcc9009a6a6c7a13fad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"extension_manifest.json": "ac4d6f2291f6f33792fd36d8546d40f6",
"favicon.png": "c14f9a4d429342732903ff73ad58a32e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3a0ab5ce7f7f525ba876017af8f06431",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "65b8c1a689dcab864338cca2923be070",
"/": "65b8c1a689dcab864338cca2923be070",
"main.dart.js": "8881fd38d79f75ffb1b2d4be8108aab8",
"manifest.json": "2dfd4809eb1895e1d40f0cecb62d3bc5",
"version.json": "01c60b7d7c20b28eb5eb78e90f450eeb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
