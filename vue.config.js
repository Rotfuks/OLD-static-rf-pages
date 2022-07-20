module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pwa: {
    name: 'Rotfuks',
    themeColor: '#F4511E',
    msTileColor: '#FFFFFF',
    manifestOptions: {
      background_color: '#FFFFFF'
    },
    icons: {
      favicon32: 'icons/favicon-32x32.png',
      favicon16: 'icons/favicon-16x16.png',
      appleTouchIcon: 'icons/apple-touch-icon.png',
      maskIcon: 'icons/safari-pinned-tab.svg',
      msTileImage: 'icons/mstile-150x150.png'
    }
  }
}
