import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDaYbdWKAZgyTRy_rFzr6UdRGNY_Emu3VE',
        libraries: 'places',
    }
})