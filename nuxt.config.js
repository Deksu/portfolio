module.exports = {

  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio - Miikka Marin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Simple portfolio site' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:300,600' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Teko:700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:300' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
