"use strict";var precacheConfig=[["/sCoolboss/index.html","4990bccf78c6db6dffca0169ef6f055c"],["/sCoolboss/static/css/main.98dc017f.css","30ba53c44f9546696c3af0b0aa07158c"],["/sCoolboss/static/js/main.86d3379a.js","0051136a2d1aa611ed6641d3e45b6275"],["/sCoolboss/static/media/1.0235024f.jpg","0235024f8767ed9acc29941e7d71781a"],["/sCoolboss/static/media/10.8e72ffe8.jpg","8e72ffe89f5e835cfb833bcefafba745"],["/sCoolboss/static/media/2.d41adbe1.jpg","d41adbe102c8ece3aa6cc5c47c19992e"],["/sCoolboss/static/media/3.cd09c5a8.jpg","cd09c5a839f26effb4120545fc041b9f"],["/sCoolboss/static/media/4.cd80bc13.jpg","cd80bc13e132b84778cec00df7ee3532"],["/sCoolboss/static/media/5.c909dba7.jpg","c909dba7b446ab48ef7775d7ba23acbc"],["/sCoolboss/static/media/6.cfad54fa.png","cfad54fa90b6137a8f9b1bd835f43f72"],["/sCoolboss/static/media/7.f8f84d61.jpg","f8f84d61455b8e75dbd5ee156096ceac"],["/sCoolboss/static/media/8.7f334eb2.jpg","7f334eb23a111e3669ea749c27921a59"],["/sCoolboss/static/media/9.0e9282d9.jpg","0e9282d9a8ca5e5d17adae92e9b31127"],["/sCoolboss/static/media/Gotham-Bold.9c35bf87.otf","9c35bf87f23c8cca614720126fe0baa0"],["/sCoolboss/static/media/Gotham-Light.f76e3adf.otf","f76e3adf545b3299f643fd7642800351"],["/sCoolboss/static/media/Gotham-LightIta.d859fee2.otf","d859fee2eba0e67c75c4c92e719d0630"],["/sCoolboss/static/media/Gotham-Medium.e19c20e9.otf","e19c20e966bde501f94e41cd0322dbe8"],["/sCoolboss/static/media/Gotham-MediumIta.653969a5.otf","653969a51632a4df33358a39d7012f79"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),n=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return s.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),s="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),e=urlsToCacheKeys.has(a));var n="/sCoolboss/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});