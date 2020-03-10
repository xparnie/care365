//import rewire from 'rewire';
const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

// New name for our CSS and JS files
const newName = "app";

// Random number for cache busting
const cacheBust = '?cb='+(Math.floor(Math.random() * 1000000) + 1);

// Consolidate chunk files instead
config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};

// Move runtime into bundle instead of separate file
config.optimization.runtimeChunk = false;

// JS
config.output.filename = 'static/js/'+newName+'.js'+cacheBust;

// CSS. "5" is MiniCssPlugin
// config.plugins[5].options.filename = 'static/css/'+newName+'.css'+cacheBust;
// seems like the latest release of react-scripts (3.1.2) broke this for css
// https://github.com/facebook/create-react-app/issues/5306 --> vincerubinetti  sep 21 2019
// try this for now
config.plugins[5].options.moduleFilename = () => 'static/css/'+newName+'.css'+cacheBust;