import Vue from 'vue'
import Geocoder from "@pderas/vue2-geocoder";

Vue.use(Geocoder, {
    defaultCountryCode: null, // e.g. 'CA'
    defaultLanguage: null, // e.g. 'en'
    defaultMode: 'lat-lng', // or 'address'
    googleMapsApiKey: 'AIzaSyDaYbdWKAZgyTRy_rFzr6UdRGNY_Emu3VE'
});