( function () {
	"use strict";
	if ( !'serviceWorker' in navigator ) { return false; }

	navigator.serviceWorker.register( 'sw.js' ).then( function ( reg ) {
		console.log( 'Registered!' );
		reg.pushManager.subscribe({
      userVisibleOnly: true
    }).then( function( sub ) {
      console.log( 'endpoint: ', sub.endpoint );
    });
	}).catch( function () {
		console.error( 'Error on register!' );
	});

})();