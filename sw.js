( function () {

	var CACHE_NAME = 'v1';

	var paths = [
		'/sw/'
		, '/sw/index.html'
		, '/sw/style.css'
	];

	self.addEventListener( 'install', function ( event ) {
		/*
		event.waitUntil(
			caches.open( CACHE_NAME ).then( function ( cache ) {
				return cache.addAll( paths );
			})
		);
		*/
		self.skipWaiting();
	});
	

	self.addEventListener( 'activate', function(event) {

	  var cacheWhitelist = [  ];

	  event.waitUntil(
	    caches.keys().then(function(cacheNames) {
	      return Promise.all(
	        cacheNames.map(function(cacheName) {
	          if (cacheWhitelist.indexOf(cacheName) === -1) {
	            return caches.delete(cacheName);
	          }
	        })
	      );
	    })
	  );
	});
/*
	self.addEventListener( 'fetch', function ( event ) {
		event.respondWith(
			caches.match( event.request )
				.then( function( response ) {
					// Cache hit - return response
					if ( response ) {
						return response;
					}

					// IMPORTANT: Clone the request. A request is a stream and
					// can only be consumed once. Since we are consuming this
					// once by cache and once by the browser for fetch, we need
					// to clone the response
					var fetchRequest = event.request.clone();

					return fetch( fetchRequest ).then(
						function ( response ) {
							// Check if we received a valid response
							if( !response || response.status !== 200 || response.type !== 'basic' ) {
								return response;
							}

							// IMPORTANT: Clone the response. A response is a stream
							// and because we want the browser to consume the response
							// as well as the cache consuming the response, we need
							// to clone it so we have 2 stream.
							var responseToCache = response.clone();

							caches.open( CACHE_NAME )
								.then( function( cache ) {
									cache.put( event.request, responseToCache );
								});

							return response;
						}
					);
				}
			)
		);
	});
*/
	//key AIzaSyBPDOiR20CSxCnCEdgiXtgLatmLSyjNWgM
	//eNSqEBDAPdI:APA91bEdW89W2Dn17X6RW_JmHhQEMcIPCnu2o2TBsk7io9uaV03SjqxhWqf8scvckyXPQpp3j0Y70R8Zdk6meEHJSe9BAgjs4gq93r-OEubd-SUnapoQkdvrrczHr0VHKcEZ4ucmkbeU

	self.addEventListener( 'push', function ( event ) {
	  console.dir( event );
    var title = 'Push message';
	  event.waitUntil(
	    self.registration.showNotification(title, {
	      body: 'The Message',
	      icon: 'images/icon.png',
	      tag: 'my-tag'
	    })
	  );
	});

})();