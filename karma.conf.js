// karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // Deja el contexto de Jasmine visible en el navegador para depuración
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/front-end-reservas'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'], // Utiliza Chrome en modo headless
    singleRun: true, // Ejecútalo una sola vez, ideal para CI/CD
    restartOnFileChange: false
  });
};
