
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tether-Nuxt' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_app.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@300;400;600&display=swap' }
    ],
    script: [
      { src: 'https://code.iconify.design/1/1.0.6/iconify.min.js', body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-fragment' },
    { src: '~/plugins/vue-viewer', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],
  moment: {
    /* module options */
    defaultLocale: 'id',
    locales: ['id']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-gmaps', {
      key: 'AIzaSyDaYbdWKAZgyTRy_rFzr6UdRGNY_Emu3VE',
      //you can use libraries: ['places']
    }],
    '@nuxtjs/axios',
    'vue-social-sharing/nuxt'
  ],
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
