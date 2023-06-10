// eslint-disable-next-line no-undef
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// eslint-disable-next-line no-undef, no-restricted-globals
workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );