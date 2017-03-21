"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["0.bundle.js","744514abb22410a7ade3a2f96cb04a89"],["05ca2c9a791c2544263573b3870d9e94.png","05ca2c9a791c2544263573b3870d9e94"],["1.bundle.js","d41679c36061010b01543fad476efb36"],["2.bundle.js","3e1582816400b4a8ac7a17d88720280a"],["25f6bde415035ded9ddcafbe073c5001.jpg","25f6bde415035ded9ddcafbe073c5001"],["3.bundle.js","ad47fead9c54c50002f3b1d3c3a39fd5"],["7a350f25f3061d5c3ecfd69858528472.jpg","7a350f25f3061d5c3ecfd69858528472"],["bundle.js","bcd3144c4443463cf5cf2c4c3a76f061"],["icons-91d1eb63e2ce9fc737b40e41f47b0b15/.cache","445576756989fe4215413b713c49ca8f"],["icons-91d1eb63e2ce9fc737b40e41f47b0b15/favicon-16x16.png","e86020dee761f187755a9eb30bfcfb06"],["icons-91d1eb63e2ce9fc737b40e41f47b0b15/favicon-230x230.png","c83de9f3da603693e1ea955cfeed84b5"],["icons-91d1eb63e2ce9fc737b40e41f47b0b15/favicon-32x32.png","dfbad91659eae1eb7e54dc3218e1def4"],["icons-91d1eb63e2ce9fc737b40e41f47b0b15/favicon-96x96.png","000f9a20765308eec771d7b4702027b4"],["icons-91d1eb63e2ce9fc737b40e41f47b0b15/favicon.ico","061267115e6b2ef45fddc6b28faffecd"],["index.html","e5eff3d88d9799a25951e0f1d078384e"],["styles.css","1faae6adf3646bd58715bd159b681969"],["vendor.bundle.js","2fc74e7964f62a447c2700d200967932"]],cacheName="sw-precache-v3-bareminimum-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(n);t||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(a,i){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!i&&s)return s(a,!0);if(c)return c(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var c="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){function r(e,t){t=t||{},(t.debug||m.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function c(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&a(e,n,r)})}),r.clone()})}function a(e,t,n){var r=i.bind(null,e,t,n);d=d?d.then(r):r()}function i(e,t,n){var o=e.url,c=n.maxAgeSeconds,a=n.maxEntries,i=n.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+a+", max age is "+c),g.getDb(i).then(function(e){return g.setTimestampForUrl(e,o,s)}).then(function(e){return g.expireEntries(e,a,c,s)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function s(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||l(e),m.preCacheItems=m.preCacheItems.concat(e)}function l(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function p(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){if(new Date(r).getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:c,openCache:o,renameCache:s,cache:u,uncache:f,precache:h,validatePrecacheInput:l,isResponseFresh:p}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){r.result.createObjectStore(h,{keyPath:l}).createIndex(p,p,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function c(e,t,n){return new Promise(function(r,o){var c=e.transaction(h,"readwrite");c.objectStore(h).put({url:t,timestamp:n}),c.oncomplete=function(){r(e)},c.onabort=function(){o(c.error)}})}function a(e,t,n){return t?new Promise(function(r,o){var c=1e3*t,a=[],i=e.transaction(h,"readwrite"),s=i.objectStore(h);s.index(p).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-c>t.value[p]){var r=t.value[l];a.push(r),s.delete(r),t.continue()}},i.oncomplete=function(){r(a)},i.onabort=o}):Promise.resolve([])}function i(e,t){return t?new Promise(function(n,r){var o=[],c=e.transaction(h,"readwrite"),a=c.objectStore(h),i=a.index(p),s=i.count();i.count().onsuccess=function(){var e=s.result;e>t&&(i.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var c=r.value[l];o.push(c),a.delete(c),e-o.length>t&&r.continue()}})},c.oncomplete=function(){n(o)},c.onabort=r}):Promise.resolve([])}function s(e,t,n,r){return a(e,n,r).then(function(n){return i(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",l="url",p="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:c,expireEntries:s}},{}],3:[function(e,t,n){function r(e){var t=s.match(e.request);t?e.respondWith(t(e.request)):s.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(s.default(e.request))}function o(e){i.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(i.renameCache(t,u.cache.name))}function c(e){return e.reduce(function(e,t){return e.concat(t)},[])}function a(e){var t=u.cache.name+"$$$inactive$$$";i.debug("install event fired"),i.debug("creating cache ["+t+"]"),e.waitUntil(i.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(c).then(i.validatePrecacheInput).then(function(t){return i.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var i=e("./helpers"),s=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:a}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location),o=r.pathname,c=e("path-to-regexp"),a=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),c=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},i=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){i.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),i.prototype.add=function(e,t,n,a){a=a||{};var i;t instanceof RegExp?i=RegExp:(i=a.origin||self.location.origin,i=i instanceof RegExp?i.source:r(i)),e=e.toLowerCase();var s=new o(e,t,n,a);this.routes.has(i)||this.routes.set(i,new Map);var u=this.routes.get(i);u.has(e)||u.set(e,new Map);var f=u.get(e),h=s.regexp||s.fullUrlRegExp;f.has(h.source)&&c.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,s)},i.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,a(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},i.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],c=o&&o.get(e.toLowerCase());if(c){var i=a(c,n);if(i.length>0)return i[0].makeHandler(n)}}return null},i.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new i},{"./helpers":1,"./route":5}],7:[function(e,t,n){function r(e,t,n){return n=n||{},c.debug("Strategy: cache first ["+e.url+"]",n),c.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,a=Date.now();return c.isResponseFresh(t,r.maxAgeSeconds,a)?t:c.fetchAndCache(e,n)})})}var o=e("../options"),c=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){function r(e,t,n){return n=n||{},c.debug("Strategy: cache only ["+e.url+"]",n),c.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),c=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,a){var i=!1,s=[],u=function(e){s.push(e.toString()),i?a(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),c(e,t,n).then(f,u)})}var o=e("../helpers"),c=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,a=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return c.debug("Strategy: network first ["+e.url+"]",n),c.openCache(n).then(function(t){var i,s,u=[];if(a){var f=new Promise(function(r){i=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,a=Date.now(),i=t.maxAgeSeconds;c.isResponseFresh(e,i,a)&&r(e)})},1e3*a)});u.push(f)}var h=c.fetchAndCache(e,n).then(function(e){if(i&&clearTimeout(i),r.test(e.status))return e;throw c.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return c.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),c=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),c=e("./helpers"),a=e("./strategies"),i=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:a.networkOnly,networkFirst:a.networkFirst,cacheOnly:a.cacheOnly,cacheFirst:a.cacheFirst,fastest:a.fastest,router:o,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,c=0,a="",i=t&&t.delimiter||"/";null!=(n=b.exec(e));){var f=n[0],h=n[1],l=n.index;if(a+=e.slice(c,l),c=l+f.length,h)a+=h[1];else{var p=e[c],d=n[2],m=n[3],g=n[4],v=n[5],x=n[6],w=n[7];a&&(r.push(a),a="");var y=null!=d&&null!=p&&p!==d,E="+"===x||"*"===x,R="?"===x||"*"===x,C=n[2]||i,k=g||v;r.push({name:m||o++,prefix:d||"",delimiter:C,optional:R,repeat:E,partial:y,asterisk:!!w,pattern:k?u(k):w?".*":"[^"+s(C)+"]+?"})}}return c<e.length&&(a+=e.substr(c)),a&&r.push(a),r}function o(e,t){return i(r(e,t))}function c(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=r||{},u=s.pretty?c:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var l,p=i[h.name];if(null==p){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(p)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!t[f].test(l))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===d?h.prefix:h.delimiter)+l}}else{if(l=h.asterisk?a(p):u(p),!t[f].test(l))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+l+'"');o+=h.prefix+l}}else o+=h}return o}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function l(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function p(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",h(n)),t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,c="",a=0;a<e.length;a++){var i=e[a];if("string"==typeof i)c+=s(i);else{var u=s(i.prefix),l="(?:"+i.pattern+")";t.push(i),i.repeat&&(l+="(?:"+u+l+")*"),l=i.optional?i.partial?u+"("+l+")?":"(?:"+u+"("+l+"))?":u+"("+l+")",c+=l}}var p=s(n.delimiter||"/"),d=c.slice(-p.length)===p;return r||(c=(d?c.slice(0,-p.length):c)+"(?:"+p+"(?=$))?"),c+=o?"$":r&&d?"":"(?="+p+"|$)",f(new RegExp("^"+c,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?l(e,t):v(e)?p(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=i,t.exports.tokensToRegExp=m;var b=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/grade-calculator/,toolbox.cacheFirst,{}),toolbox.router.get(/weighted-gpa-calculator/,toolbox.cacheFirst,{}),toolbox.router.get(/gpa-calculator/,toolbox.cacheFirst,{});