"use strict";var precacheConfig=[["/portfolio-playground/index.html","85e701acd612bd58a5a6770380aaa757"],["/portfolio-playground/static/css/main.81f6fb7f.css","3bfdfc89e9c2d8b0ef9a4f596c1256f8"],["/portfolio-playground/static/js/0.50b981fe.chunk.js","5611a4f73b473668a27004b5c8aa8b8f"],["/portfolio-playground/static/js/1.ff559a43.chunk.js","6f379987c356946854747268054831e1"],["/portfolio-playground/static/js/2.fc558f52.chunk.js","b3eeabc6e5ff8353d6a4a845a08880cd"],["/portfolio-playground/static/js/3.cc03feb4.chunk.js","3dde1f477aa47307ec13d82fb1c8416e"],["/portfolio-playground/static/js/4.406ab7a5.chunk.js","1b3a5dbd1b92148b11499190182ada86"],["/portfolio-playground/static/js/5.e73929de.chunk.js","d28319a9e07b14b8c80cb8a16e11367d"],["/portfolio-playground/static/js/main.091cbffd.js","8961c579060d915d90a611eb14baa239"],["/portfolio-playground/static/media/1024W-cccwc.2505d7d2.png","2505d7d267f6ab6db43329df12160ed2"],["/portfolio-playground/static/media/1024W-header-img.a5d10b4a.png","a5d10b4af9be7b590dac4f7fd14b3156"],["/portfolio-playground/static/media/1366W-cccwc.daa66960.png","daa669603e3097f996bdd9eec5a6e8c1"],["/portfolio-playground/static/media/1366W-header-img.fbf5ac54.png","fbf5ac545790349e16b6141c642c181f"],["/portfolio-playground/static/media/1400-blueberry-gradient.d95fc530.png","d95fc53024fb11bcafab2c2352e78682"],["/portfolio-playground/static/media/1400-mango-gradient.a9e55b3d.png","a9e55b3ddf01f1e16da63c6d24e1718c"],["/portfolio-playground/static/media/1400-pineapple-gradient.810d19cf.png","810d19cf35ea378942aaf73258ca1e3b"],["/portfolio-playground/static/media/1400-strawberry-gradient.78304b47.png","78304b4730175618551b1412cd51f667"],["/portfolio-playground/static/media/1600W-cccwc.6c3cbe58.png","6c3cbe58cbe93c020773b8e32f25d78e"],["/portfolio-playground/static/media/1600W-header-img.c1bb8acd.png","c1bb8acdbf985bc0c19879544aa76dc1"],["/portfolio-playground/static/media/1920W-cccwc.85777411.png","85777411809b0e72863c5f2d4176e89f"],["/portfolio-playground/static/media/500W-post-four.3c2e12b4.png","3c2e12b4cdd5cfccf00ba187b94c9b43"],["/portfolio-playground/static/media/500W-post-one.243b706e.png","243b706eb98272528d0e52be1e6667e2"],["/portfolio-playground/static/media/500W-post-three.ac4c13fa.png","ac4c13fa33b0d80929fab783f1fb1c8f"],["/portfolio-playground/static/media/500W-post-two.f1807aa1.png","f1807aa1434e4c771f120050098032af"],["/portfolio-playground/static/media/540-blueberry-gradient.863484d2.png","863484d2e0dfb763a6a8282cb9f1fb7e"],["/portfolio-playground/static/media/540-mango-gradient.3560a013.png","3560a013b8cc6a5502107dd9d1fe0c7c"],["/portfolio-playground/static/media/540-pineapple-gradient.a34f225e.png","a34f225ee025d6b64c614b4ab0c6a53d"],["/portfolio-playground/static/media/540-strawberry-gradient.99e5f40e.png","99e5f40e8344f59a454e8fe96a835001"],["/portfolio-playground/static/media/640W-cccwc.72abaf8f.png","72abaf8f383ec666058084452995b2c1"],["/portfolio-playground/static/media/640W-header-img.1d9789f6.png","1d9789f6953c539782e96f2969688753"],["/portfolio-playground/static/media/640W-post-four.5cfa5f52.png","5cfa5f520194d5d5b761b5615451ef30"],["/portfolio-playground/static/media/640W-post-one.d603935c.png","d603935c11a7b235a9b90bb1b05b6844"],["/portfolio-playground/static/media/640W-post-three.37b486ab.png","37b486ab3b1067022827e4db4ddb0225"],["/portfolio-playground/static/media/640W-post-two.a7424e00.png","a7424e00cd3aec2d2cce55d7d591b9b1"],["/portfolio-playground/static/media/768W-cccwc.8d63573c.png","8d63573c8c4c7cd53aaa531c974d0d87"],["/portfolio-playground/static/media/768W-header-img.632e9a31.png","632e9a31017a784c234cfb5393aee546"],["/portfolio-playground/static/media/768W-post-four.33a28fa1.png","33a28fa1e9deba5b4f313a74a3b8cef1"],["/portfolio-playground/static/media/768W-post-one.6d5fcb60.png","6d5fcb600dd879af7d8eb49e423e1f4e"],["/portfolio-playground/static/media/768W-post-three.a65ef14a.png","a65ef14a5a9ae27618bc4419c225683a"],["/portfolio-playground/static/media/768W-post-two.d1ecc79a.png","d1ecc79a77248cf1e038cbcf3b25c092"],["/portfolio-playground/static/media/900-blueberry-gradient.d59320e1.png","d59320e12e40458b1869a7541c3248ea"],["/portfolio-playground/static/media/900-mango-gradient.009397df.png","009397df5ac1d0947be96e39927e7565"],["/portfolio-playground/static/media/900-pineapple-gradient.b5e9197b.png","b5e9197bb12afe4bfd02245c8995ca69"],["/portfolio-playground/static/media/900-strawberry-gradient.e2e02d74.png","e2e02d74f2380958d3e46f18a0cf4c57"],["/portfolio-playground/static/media/architecture2_w500px.bec4cd43.png","bec4cd43bc66777e8f714463a380b6f9"],["/portfolio-playground/static/media/architecture3_w560px.4ec0746e.png","4ec0746e95cda92a3ed73b47407648c0"],["/portfolio-playground/static/media/architecture_w800px.7ff4102e.png","7ff4102e1c624683aedba1b7c23b5f0f"],["/portfolio-playground/static/media/blueberry-gradient.0b585c33.png","0b585c33d65b416f62661ba38d4d340c"],["/portfolio-playground/static/media/budapest_shoe.6917325f.png","6917325fcf8804a2ca9550e9e2537107"],["/portfolio-playground/static/media/cart_icon.bd088d74.svg","bd088d74b805711d264663800fbf8134"],["/portfolio-playground/static/media/euro_icon.4905add5.svg","4905add56a39f6c13faec3a79a865f4b"],["/portfolio-playground/static/media/hank_murphey.d686a21e.png","d686a21e4d22ffcbdfec1cb5ac9e54de"],["/portfolio-playground/static/media/hannah_altel.950d79ec.png","950d79ec9adb1c832c03d2e4ed91f5e2"],["/portfolio-playground/static/media/jenn_burke.9ceb36e3.png","9ceb36e328766cd5c54eab06fbccee54"],["/portfolio-playground/static/media/line_square.702efb7c.svg","702efb7c706714738f246cfc2295d571"],["/portfolio-playground/static/media/mango-gradient.5cf4d462.png","5cf4d462d923d1bf603dba500f96c63b"],["/portfolio-playground/static/media/pineapple-gradient.fded0934.png","fded0934eeea662f0703c8d2fd8ca16b"],["/portfolio-playground/static/media/runa-1-cutout.25af18df.svg","25af18dfed8fca7b76351c8f4adf53f0"],["/portfolio-playground/static/media/runa-10-cutout.1dade3e5.svg","1dade3e51ba0b8ea055259241da1a687"],["/portfolio-playground/static/media/runa-11-cutout.28edf911.svg","28edf911d1db7e1cdbed801d202e1218"],["/portfolio-playground/static/media/runa-12-cutout.d8a62303.svg","d8a62303456f21c969ff2847953ce301"],["/portfolio-playground/static/media/runa-13-cutout.b710ba5a.svg","b710ba5a4512db6691d4609e18fcba24"],["/portfolio-playground/static/media/runa-14-cutout.3a9d225b.svg","3a9d225b0bbe6eb8397f4f19913db5c1"],["/portfolio-playground/static/media/runa-15-cutout.1543fc96.svg","1543fc963e93253761b7278ecb63fcf4"],["/portfolio-playground/static/media/runa-16-cutout.4d084b37.svg","4d084b37a3d3903ecaf28119b1193f1d"],["/portfolio-playground/static/media/runa-17-cutout.d665828b.svg","d665828ba47b1e7700a37e1dce95dfb9"],["/portfolio-playground/static/media/runa-18-cutout.b63e9610.svg","b63e961043c84c60e52499d9b9e0064a"],["/portfolio-playground/static/media/runa-19-cutout.4238446d.svg","4238446d716939d3773b4d3a9dccf8a9"],["/portfolio-playground/static/media/runa-2-cutout.90083a56.svg","90083a56f27720b8fefd718e38b9a927"],["/portfolio-playground/static/media/runa-3-cutout.5220e943.svg","5220e94329152675914a647d0242e5c6"],["/portfolio-playground/static/media/runa-4-cutout.c1cb3292.svg","c1cb3292b3fcb9b5824586b3ea50b456"],["/portfolio-playground/static/media/runa-5-cutout.afc89c0a.svg","afc89c0aaa08bc7e22745469efa2d949"],["/portfolio-playground/static/media/runa-6-cutout.0ef9b7a5.svg","0ef9b7a5aa1b19f74f4c5405bb537cd5"],["/portfolio-playground/static/media/runa-7-cutout.e30b310a.svg","e30b310a31edbe184663aea3b75eec1a"],["/portfolio-playground/static/media/runa-8-cutout.14adea42.svg","14adea42787d652e8d86f7fe1a394b96"],["/portfolio-playground/static/media/runa-9-cutout.6fed2725.svg","6fed2725b51706638442dde3eda7910f"],["/portfolio-playground/static/media/search.544dbc10.svg","544dbc10801c35aa10b88da9536b5206"],["/portfolio-playground/static/media/strawberry-gradient.cf968b2b.png","cf968b2b39807341371710bbdac92e51"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,t,o){var c=new URL(a);return o&&c.pathname.match(o)||(c.search+=(c.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,t){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return t.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],o=new URL(e,self.location),c=createCacheKey(o,hashParamName,t,/\.\w{8}\./);return[o.toString(),c]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(o){return setOfCachedUrls(o).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!t.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return o.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var t=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),o="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,o),a=urlsToCacheKeys.has(t));var c="/portfolio-playground/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});